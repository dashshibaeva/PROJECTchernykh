// ===== Состояние приложения =====
const state = {
    currentCategory: null,
    currentQuestionIndex: 0,
    score: 0,
    selectedOption: null,
    startTime: null,
    timerInterval: null,
    elapsedSeconds: 0,
    combo: 0,
    maxCombo: 0,
    hints: {
        fiftyFifty: 3,
        skip: 2,
        extraTime: 2
    },
    eliminatedOptions: [],
    progress: {
        science: 0,
        history: 0,
        sport: 0,
        cinema: 0
    },
    stats: {
        totalGames: 0,
        bestScores: {
            science: 0,
            history: 0,
            sport: 0,
            cinema: 0
        },
        bestTime: null,
        maxCombo: 0
    },
    unlockedAchievements: []
};

// ===== Инициализация приложения =====
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    loadStats();
    loadAchievements();
    setupEventListeners();
    createAchievementsButton();
    
    setTimeout(() => {
        showScreen('main-screen');
    }, 2500);
});

// ===== Навигация =====
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// ===== Загрузка/сохранение данных =====
function loadProgress() {
    const saved = localStorage.getItem('quizProgress');
    if (saved) {
        try {
            state.progress = JSON.parse(saved);
        } catch (e) {
            console.error('Ошибка загрузки прогресса:', e);
        }
    }
    updateProgressDisplay();
}

function saveProgress() {
    localStorage.setItem('quizProgress', JSON.stringify(state.progress));
}

function loadStats() {
    const saved = localStorage.getItem('quizStats');
    if (saved) {
        try {
            state.stats = JSON.parse(saved);
        } catch (e) {
            console.error('Ошибка загрузки статистики:', e);
        }
    }
}

function saveStats() {
    localStorage.setItem('quizStats', JSON.stringify(state.stats));
}

function loadAchievements() {
    const saved = localStorage.getItem('unlockedAchievements');
    if (saved) {
        try {
            state.unlockedAchievements = JSON.parse(saved);
        } catch (e) {
            console.error('Ошибка загрузки достижений:', e);
        }
    }
}

function saveAchievements() {
    localStorage.setItem('unlockedAchievements', JSON.stringify(state.unlockedAchievements));
}

function updateProgressDisplay() {
    Object.keys(state.progress).forEach(category => {
        const element = document.getElementById(`progress-${category}`);
        if (element) {
            element.textContent = `${state.progress[category]}/10`;
        }
    });
}

// ===== Обработчики событий =====
function setupEventListeners() {
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            startQuiz(card.dataset.category);
        });
    });

    document.getElementById('start-random-btn').addEventListener('click', () => {
        const categories = Object.keys(quizData);
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        startQuiz(randomCategory);
    });

    document.getElementById('select-button').addEventListener('click', handleSelectAnswer);
    document.getElementById('play-again-button').addEventListener('click', () => {
        showScreen('main-screen');
        updateProgressDisplay();
    });
}

// ===== Кнопка достижений =====
function createAchievementsButton() {
    const button = document.createElement('button');
    button.className = 'achievements-button';
    button.textContent = '🏆';
    button.addEventListener('click', showAchievementsScreen);
    document.body.appendChild(button);
}

function showAchievementsScreen() {
    const screen = document.createElement('div');
    screen.className = 'screen achievements-screen active';
    screen.id
 = 'achievements-screen';
    
    const unlockedCount = state.unlockedAchievements.length;
    const totalCount = achievements.length;
    
    screen.innerHTML = `
        <div class="achievements-header">
            <h2>Достижения</h2>
            <div class="achievements-stats">
                <div class="stat-item">
                    <div class="stat-value">${state.stats.totalGames}</div>
                    <div class="stat-label">Игр сыграно</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${state.stats.maxCombo}</div>
                    <div class="stat-label">Макс. комбо</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${unlockedCount}/${totalCount}</div>
                    <div class="stat-label">Достижений</div>
                </div>
            </div>
        </div>
        <div class="achievements-list">
            ${achievements.map
(achievement => {
                const isUnlocked = state.unlockedAchievements.includes(achievement.id
);
                return `
                    <div class="achievement-card ${isUnlocked ? 'unlocked' : 'locked'}">
                        <div class="achievement-icon">${achievement.icon}</div>
                        <div class="achievement-info">
                            <div class="achievement-name">${achievement.name
}</div>
                            <div class="achievement-description">${achievement.description}</div>
                        </div>
                        <div class="achievement-status">${isUnlocked ? '✅' : '🔒'}</div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
    
    document.querySelector('.app-container').appendChild(screen);
    
    const closeButton = document.createElement('button');
    closeButton.className = 'action-button';
    closeButton.textContent = 'Закрыть';
    closeButton.style.marginTop = '20px';
    closeButton.addEventListener('click', () => {
        screen.remove();
        showScreen('main-screen');
    });
    screen.appendChild(closeButton);
}

// ===== Запуск викторины =====
function startQuiz(category) {
    state.currentCategory = category;
    state.currentQuestionIndex = 0;
    state.score = 0;
    state.selectedOption = null;
    state.elapsedSeconds = 0;
    state.combo = 0;
    state.hints = {
        fiftyFifty: 3,
        skip: 2,
        extraTime: 2
    };
    state.startTime = Date.now
();

    startTimer();
    document.getElementById('category-title').textContent = categoryNames[category];

    showScreen('quiz-screen');
    showQuestion();
    updateHintsDisplay();
}

// ===== Таймер =====
function startTimer() {
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
        state.elapsedSeconds++;
    }, 1000);
}

function stopTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ===== Отображение подсказок =====
function updateHintsDisplay() {
    const hintsContainer = document.getElementById('hints-container');
    if (!hintsContainer) {
        const container = document.createElement('div');
        container.className = 'hints-container';
        container.id
 = 'hints-container';
        container.innerHTML = `
            <button class="hint-button" id="hint-5050" onclick="useHint('fiftyFifty')">
                <span class="hint-icon">✂️</span>
                <span class="hint-label">50/50</span>
                <span class="hint-count" id="hint-5050-count">${state.hints.fiftyFifty}</span>
            </button>
            <button class="hint-button" id="hint-skip" onclick="useHint('skip')">
                <span class="hint-icon">️</span>
                <span class="hint-label">Пропуск</span>
                <span class="hint-count" id="hint-skip-count">${state.hints.skip}</span>
            </button>
            <button class="hint-button" id="hint-time" onclick="useHint('extraTime')">
                <span class="hint-icon">⏰</span>
                <span class="hint-label">Время</span>
                <span class="hint-count" id="hint-time-count">${state.hints.extraTime}</span>
            </button>
        `;
        document.getElementById('quiz-screen').insertBefore(container, document.getElementById('options-container'));
    } else {
        document.getElementById('hint-5050-count').textContent = state.hints.fiftyFifty;
        document.getElementById('hint-skip-count').textContent = state.hints.skip;
        document.getElementById('hint-time-count').textContent = state.hints.extraTime;
        
        document.getElementById('hint-5050').disabled = state.hints.fiftyFifty === 0;
        document.getElementById('hint-skip').disabled = state.hints.skip === 0;
        document.getElementById('hint-time').disabled = state.hints.extraTime === 0;
    }
}

// ===== Использование подсказки =====
function useHint(hintType) {
    if (state.hints[hintType] <= 0) return;
    
    state.hints[hintType]--;
    updateHintsDisplay();
    
    const questions = quizData[state.currentCategory];
    const question = questions[state.currentQuestionIndex];
    
    switch(hintType) {
        case 'fiftyFifty':
            // Убираем 2 неправильных ответа
            const wrongOptions = [];
            question.options.forEach((_, index) => {
                if (index !== question.correct) wrongOptions.push(index);
            });
            state.eliminatedOptions = wrongOptions.sort(() => Math.random() - 0.5).slice(0, 2);
            document.querySelectorAll('.option').forEach((btn, index) => {
                if (state.eliminatedOptions.includes(index)) {
                    btn.style.opacity = '0.3';
                    btn.disabled = true;
                }
            });
            break;
            
        case 'skip':
            // Пропускаем вопрос без штрафа
            state.currentQuestionIndex++;
            showQuestion();
            break;
            
        case 'extraTime':
            // Добавляем 30 секунд бонуса (визуально)
            state.elapsedSeconds = Math.max(0, state.elapsedSeconds - 30);
            showPointsPopup('+30с', '#4CAF50');
            break;
    }
}

// ===== Показ вопроса =====
function showQuestion() {
    const questions = quizData[state.currentCategory];
    
    if (state.currentQuestionIndex >= questions.length) {
        stopTimer();
        showResults();
        return;
    }

    const question = questions[state.currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('progress-text').textContent = 
        `${state.currentQuestionIndex + 1}/${questions.length}`;
    document.getElementById('progress-fill').style.width = 
        `${((state.currentQuestionIndex + 1) / questions.length) * 100}%`;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    const labels = ['А', 'Б', 'В', 'Г'];
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.dataset.index = index;
        button.textContent = `${labels[index]}) ${option}`;
        button.addEventListener('click', () => selectOption(index));
        
        if (state.eliminatedOptions.includes(index)) {
            button.style.opacity = '0.3';
            button.disabled = true;
        }
        
        optionsContainer.appendChild(button);
    });

    state.selectedOption = null;
    state.eliminatedOptions = [];
    document.getElementById('select-button').disabled = true;
    updateHintsDisplay();
    updateComboDisplay();
}

// ===== Выбор варианта =====
function selectOption(index) {
    if (state.eliminatedOptions.includes(index)) return;
    
    state.selectedOption = index;
    document.querySelectorAll('.option').forEach((btn, i) => {
        btn.classList.toggle('selected', i === index);
    });
    document.getElementById('select-button').disabled = false;
}

// ===== Обработка ответа =====
function handleSelectAnswer() {
    if (state.selectedOption === null) return;

    const questions = quizData[state.currentCategory];
    const question = questions[state.currentQuestionIndex];
    const isCorrect = state.selectedOption === question.correct;
    
    const options = document.querySelectorAll('.option');
    options.forEach((btn, index) => {
        btn.disabled = true;
        if (index === question.correct) {
            btn.classList.add('correct');
        } else if (index === state.selectedOption && !isCorrect) {
            btn.classList.add('wrong');
        }
    });

    if (isCorrect) {
        state.combo++;
        if (state.combo > state.maxCombo) {
            state.maxCombo = state.combo;
        }
        
        // Бонусные очки за комбо
        const basePoints = 10;
        const comboBonus = Math.floor(state.combo / 3) * 5;
        const totalPoints = basePoints + comboBonus;
        state.score += totalPoints > 10 ? 1 : 1; // Счёт остаётся по правильным ответам
        
        if (state.combo >= 3) {
            showPointsPopup(`+${totalPoints} 🔥x${state.combo}`, '#FF6B35');
        } else {
            showPointsPopup(`+${totalPoints}`, '#4CAF50');
        }
        
        updateComboDisplay();
    } else {
        state.combo = 0;
        updateComboDisplay();
    }

    setTimeout(() => {
        state.currentQuestionIndex++;
        showQuestion();
    }, 1200);
}

// ===== Отображение комбо =====
function updateComboDisplay() {
    let comboDisplay = document.getElementById('combo-display');
    if (!comboDisplay) {
        comboDisplay = document.createElement('div');
        comboDisplay.className = 'combo-display';
        comboDisplay.id
 = 'combo-display';
        document.body.appendChild(comboDisplay);
    }
    
    if (state.combo >= 3) {
        comboDisplay.textContent = `🔥 Комбо x${state.combo}`;
        comboDisplay.classList.add('active');
        comboDisplay.classList.remove('pulse');
        void comboDisplay.offsetWidth; // Trigger reflow
        comboDisplay.classList.add('pulse');
    } else {
        comboDisplay.classList.remove('active');
    }
}

// ===== Всплывающие очки =====
function showPointsPopup(text, color) {
    const popup = document.createElement('div');
    popup.className = 'points-popup';
    popup.textContent = text;
    popup.style.color = color;
    document.body.appendChild(popup);
    
    setTimeout(() => popup.remove(), 1000);
}

// ===== Результаты =====
function showResults() {
    const questions = quizData[state.currentCategory];
    const correctAnswers = state.score;
    const percentage = (correctAnswers / questions.length) * 100;

    let message = '';
    if (percentage >= 80) message = 'Отличный результат!';
    else if (percentage >= 60) message = 'Хороший результат!';
    else if (percentage >= 40) message = 'Неплохо!';
    else message = 'Попробуйте ещё раз!';

    document.getElementById('result-score').textContent = 
        `${correctAnswers}/${questions.length}`;
    document.getElementById('result-message').textContent = message;
    document.getElementById('result-time').textContent = 
        `Время: ${formatTime(state.elapsedSeconds)}`;

    // Обновление статистики
    state.stats.totalGames++;
    if (correctAnswers > state.stats.bestScores[state.currentCategory]) {
        state.stats.bestScores[state.currentCategory] = correctAnswers;
    }
    if (!state.stats.bestTime || state.elapsedSeconds < state.stats.bestTime) {
        state.stats.bestTime = state.elapsedSeconds;
    }
    if (state.maxCombo > state.stats.maxCombo) {
        state.stats.maxCombo = state.maxCombo;
    }
    saveStats();

    // Обновление прогресса
    if (correctAnswers > state.progress[state.currentCategory]) {
        state.progress[state.currentCategory] = correctAnswers;
        saveProgress();
    }

    // Проверка достижений
    checkAchievements();

    showScreen('result-screen');

    if (percentage >= 60) {
        launchConfetti();
    }
}

// ===== Проверка достижений =====
function checkAchievements() {
    achievements.forEach(achievement => {
        if (!state.unlockedAchievements.includes(achievement.id
)) {
            if (achievement.condition(state.stats)) {
                state.unlockedAchievements.push(achievement.id
);
                saveAchievements();
                showAchievementNotification(achievement);
            }
        }
    });
}

// ===== Уведомление о достижении =====
function showAchievementNotification(achievement) {
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <div class="icon">${achievement.icon}</div>
        <h3>Достижение разблокировано!</h3>
        <p><strong>${achievement.name
}</strong><br>${achievement.description}</p>
        <button onclick="this.parentElement.remove()">Круто!</button>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

const hintElement = document.getElementById('ваш-id-подсказки');
if (hintElement) {
    hintElement.textContent = вашТекстПодсказки;
} else {
    console.warn("Элемент подсказки не найден в HTML!");
}
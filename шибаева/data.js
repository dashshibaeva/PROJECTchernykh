const quizData = {
    science: [
        {
            question: "Какая планета ближе всего к Солнцу?",
            options: ["Земля", "Меркурий", "Марс", "Венера"],
            correct: 1,
            difficulty: 1
        },
        {
            question: "Сколько планет в Солнечной системе?",
            options: ["7", "8", "9", "10"],
            correct: 1,
            difficulty: 1
        },
        {
            question: "Какой газ составляет большую часть атмосферы Земли?",
            options: ["Кислород", "Азот", "Углекислый газ", "Водород"],
            correct: 1,
            difficulty: 1
        },
        {
            question: "Какая самая большая планета Солнечной системы?",
            options: ["Сатурн", "Юпитер", "Нептун", "Уран"],
            correct: 1,
            difficulty: 1
        },
        {
            question: "Сколько естественных спутников у Земли?",
            options: ["0", "1", "2", "3"],
            correct: 1,
            difficulty: 1
        },
        {
            question: "Какой химический элемент обозначается символом O?",
            options: ["Золото", "Кислород", "Осмий", "Олово"],
            correct: 1,
            difficulty: 2
        },
        {
            question: "Сколько костей в теле взрослого человека?",
            options: ["186", "206", "226", "256"],
            correct: 1,
            difficulty: 2
        },
        {
            question: "Какова приблизительная скорость света?",
            options: ["200 000 км/с", "300 000 км/с", "400 000 км/с", "500 000 км/с"],
            correct: 1,
            difficulty: 2
        },
        {
            question: "Кто открыл закон всемирного тяготения?",
            options: ["Эйнштейн", "Ньютон", "Галилей", "Кеплер"],
            correct: 1,
            difficulty: 2
        },
        {
            question: "Какой орган отвечает за фильтрацию крови в организме?",
            options: ["Сердце", "Печень", "Почки", "Лёгкие"],
            correct: 2,
            difficulty: 3
        }
    ],
    history: [
        {
            question: "В каком году началась Вторая мировая война?",
            options: ["1937", "1938", "1939", "1940"],
            correct: 2,
            difficulty: 1
        },
        {
            question: "Кто был первым президентом США?",
            options: ["Томас Джефферсон", "Джордж Вашингтон", "Авраам Линкольн", "Джон Адамс"],
            correct: 1,
            difficulty: 1
        },
        {
            question: "В каком году человек впервые полетел в космос?",
            options: ["1957", "1961", "1965", "1969"],
            correct: 1,
            difficulty: 1
        },
        {
            question: "Кто был первым императором Рима?",
            options: ["Юлий Цезарь", "Август", "Нерон", "Калигула"],
            correct: 1,
            difficulty: 2
        },
        {
            question: "В каком году пала Берлинская стена?",
            options: ["1987", "1989", "1991", "1993"],
            correct: 1,
            difficulty: 2
        },
        {
            question: "Кто написал роман 'Война и мир'?",
            options: ["Достоевский", "Толстой", "Пушкин", "Гоголь"],
            correct: 1,
            difficulty: 1
        },
        {
            question: "В каком году была основана Москва?",
            options: ["1147", "1247", "1347", "1447"],
            correct: 0,
            difficulty: 2
        },
        {
            question: "Кто был первым человеком в космосе?",
            options: ["Нил Армстронг", "Юрий Гагарин", "Базз Олдрин", "Алексей Леонов"],
            correct: 1,
            difficulty: 1
        },
        {
            question: "В каком году закончилась Первая мировая война?",
            options: ["1916", "1917", "1918", "1919"],
            correct: 2,
            difficulty: 2
        },
        {
            question: "Кто открыл Америку в 1492 году?",
            options: ["Магеллан", "Колумб", "Васко да Гама", "Кук"],
            correct: 1,
            difficulty: 1
        }
    ],
    sport: [
        {
            question: "Сколько игроков в футбольной команде на поле?",
            options: ["9", "10", "11", "12"],
            correct: 2,
            difficulty: 1
        },
        {
            question: "В каком году прошли первые современные Олимпийские игры?",
            options: ["1894", "1896", "1900", "1904"],
            correct: 1,
            difficulty: 2
        },
        {
            question: "Сколько колец на олимпийском флаге?",
            options: ["4", "5", "6", "7"],
            correct: 1,
            difficulty: 1
        },
        {
            question: "Какой вид спорта называют 'королём спорта'?",
            options: ["Футбол", "Баскетбол", "Лёгкая атлетика", "Теннис"],
            correct: 2,
            difficulty: 2
        },
        {
            question: "Сколько минут длится стандартный футбольный матч?",
            options: ["80", "90", "100", "120"],
            correct: 1,
            difficulty: 1
        },
        {
            question: "В какой стране зародился современный футбол?",
            options: ["Бразилия", "Германия", "Англия", "Италия"],
            correct: 2,
            difficulty: 2
        },
        {
            question: "Сколько очков даётся за тачдаун в американском футболе?",
            options: ["3", "6", "7", "8"],
            correct: 1,
            difficulty: 3
        },
        {
            question: "Кто выиграл больше всего турниров Большого шлема в теннисе?",
            options: ["Федерер", "Надаль", "Джокович", "Сампрас"],
            correct: 2,
            difficulty: 3
        },
        {
            question: "Сколько игроков в баскетбольной команде на площадке?",
            options: ["4", "5", "6", "7"],
            correct: 1,
            difficulty: 1
        },
        {
            question: "В каком городе прошли летние Олимпийские игры 2012 года?",
            options: ["Пекин", "Лондон", "Рио", "Токио"],
            correct: 1,
            difficulty: 2
        }
    ],
    cinema: [
        {
            question: "Кто режиссёр фильма 'Титаник'?",
            options: ["Стивен Спилберг", "Джеймс Кэмерон", "Кристофер Нолан", "Мартин Скорсезе"],
            correct: 1,
            difficulty: 1
        },
        {
            question: "Какой фильм получил Оскар за лучший фильм в 2020 году?",
            options: ["1917", "Джокер", "Паразиты", "Однажды в Голливуде"],
            correct: 2,
            difficulty: 2
        },
        {
            question: "Кто сыграл главную роль в фильме 'Матрица'?",
            options: ["Брэд Питт", "Киану Ривз", "Том Круз", "Джонни Депп"],
            correct: 1,
            difficulty: 1
        },
        {
            question: "Сколько фильмов в основной серии 'Гарри Поттер'?",
            options: ["6", "7", "8", "9"],
            correct: 2,
            difficulty: 1
        },
        {
            question: "Кто режиссёр фильма 'Криминальное чтиво'?",
            options: ["Квентин Тарантино", "Гай Ричи", "Дэвид Финчер", "Ридли Скотт"],
            correct: 0,
            difficulty: 2
        },
        {
            question: "В каком году вышел первый фильм 'Звёздные войны'?",
            options: ["1975", "1977", "1979", "1981"],
            correct: 1,
            difficulty: 2
        },
        {
            question: "Кто сыграл Джека в фильме 'Титаник'?",
            options: ["Брэд Питт", "Леонардо ДиКаприо", "Джонни Депп", "Том Хэнкс"],
            correct: 1,
            difficulty: 1
        },
        {
            question: "Какой фильм является самым кассовым в истории кино?",
            options: ["Титаник", "Мстители: Финал", "Аватар", "Звёздные войны: Пробуждение силы"],
            correct: 2,
            difficulty: 2
        },
        {
            question: "Кто режиссёр трилогии 'Властелин колец'?",
            options: ["Стивен Спилберг", "Питер Джексон", "Джеймс Кэмерон", "Ридли Скотт"],
            correct: 1,
            difficulty: 1
        },
        {
            question: "Сколько премий Оскар получил фильм 'Титаник'?",
            options: ["9", "10", "11", "12"],
            correct: 2,
            difficulty: 3
        }
    ]
};

const categoryNames = {
    science: 'Наука',
    history: 'История',
    sport: 'Спорт',
    cinema: 'Кино'
};

const categoryIcons = {
    science: '🔬',
    history: '',
    sport: '⚽',
    cinema: '🎬'
};

// Система достижений
const achievements = [
    {
        id: 'first_win',
        name: 'Первая победа',
        description: 'Пройди первую викторину',
        icon: '🏆',
        condition: (stats) => stats.totalGames >= 1
    },
    {
        id: 'perfect_score',
        name: 'Идеальный результат',
        description: 'Набери 10/10 в любой категории',
        icon: '',
        condition: (stats) => Object.values(stats.bestScores).some(score => score === 10)
    },
    {
        id: 'combo_master',
        name: 'Мастер комбо',
        description: 'Набери комбо x5',
        icon: '🔥',
        condition: (stats) => stats.maxCombo >= 5
    },
    {
        id: 'speed_demon',
        name: 'Скоростной демон',
        description: 'Пройди викторину быстрее 2 минут',
        icon: '⚡',
        condition: (stats) => stats.bestTime && stats.bestTime < 120
    },
    {
        id: 'all_categories',
        name: 'Универсал',
        description: 'Пройди все 4 категории',
        icon: '🌟',
        condition: (stats) => Object.values(stats.bestScores).filter(s => s > 0).length >= 4
    },
    {
        id: 'science_expert',
        name: 'Эксперт науки',
        description: 'Набери 8+ в категории Наука',
        icon: '',
        condition: (stats) => stats.bestScores.science
 >= 8
    },
    {
        id: 'history_buff',
        name: 'Знаток истории',
        description: 'Набери 8+ в категории История',
        icon: '',
        condition: (stats) => stats.bestScores.history >= 8
    },
    {
        id: 'sport_fan',
        name: 'Спортивный фанат',
        description: 'Набери 8+ в категории Спорт',
        icon: '🏅',
        condition: (stats) => stats.bestScores.sport
 >= 8
    },
    {
        id: 'cinema_lover',
        name: 'Киноман',
        description: 'Набери 8+ в категории Кино',
        icon: '🎬',
        condition: (stats) => stats.bestScores.cinema >= 8
    },
    {
        id: 'ten_games',
        name: 'Опытный игрок',
        description: 'Сыграй 10 викторин',
        icon: '🎮',
        condition: (stats) => stats.totalGames >= 10
    }
];
const questions = [
    
        {
            question: "Which keyword is used to define a class in Java?",
            answers: [
                { "text": "class", "correct": true },
                { "text": "Class", "correct": false },
                { "text": "define", "correct": false },
                { "text": "create", "correct": false }
            ]
        },
        {
            question: "Which method is used to start a thread in Java?",
            answers: [
                { "text": "start()", "correct": true },
                { "text": "run()", "correct": false },
                { "text": "init()", "correct": false },
                { "text": "begin()", "correct": false }
            ]
        },
        {
            question: "Which of these is a valid declaration of a char?",
            answers: [
                { "text": "char c = 'a';", "correct": true },
                { "text": "char c = 'abc';", "correct": false },
                { "text": "char c = \"a\";", "correct": false },
                { "text": "char c = 97;", "correct": false }
            ]
        },
        {
            question: "What is the size of an int variable in Java?",
            answers: [
                { "text": "4 bytes", "correct": true },
                { "text": "2 bytes", "correct": false },
                { "text": "8 bytes", "correct": false },
                { "text": "1 byte", "correct": false }
            ]
        },
        {
            question: "Which operator is used to compare two values?",
            answers: [
                { "text": "==", "correct": true },
                { "text": "=", "correct": false },
                { "text": "equals", "correct": false },
                { "text": "!=", "correct": false }
            ]
        },
        {
            question: "Which package contains the Random class?",
            answers: [
                { "text": "java.util", "correct": true },
                { "text": "java.lang", "correct": false },
                { "text": "java.io", "correct": false },
                { "text": "java.math", "correct": false }
            ]
        },
        {
            question: "What is the default value of a boolean variable?",
            answers: [
                { "text": "false", "correct": true },
                { "text": "true", "correct": false },
                { "text": "0", "correct": false },
                { "text": "null", "correct": false }
            ]
        },
        {
            question: "Which method is used to get the length of a string?",
            answers: [
                { "text": "length()", "correct": true },
                { "text": "getSize()", "correct": false },
                { "text": "size()", "correct": false },
                { "text": "getLength()", "correct": false }
            ]
        },
        {
            question: "Which keyword is used to inherit a class in Java?",
            answers: [
                { "text": "extends", "correct": true },
                { "text": "implements", "correct": false },
                { "text": "inherits", "correct": false },
                { "text": "derives", "correct": false }
            ]
        },
        {
            question: "What is the base class of all classes in Java?",
            answers: [
                { "text": "Object", "correct": true },
                { "text": "Base", "correct": false },
                { "text": "Super", "correct": false },
                { "text": "Root", "correct": false }
            ]
        },
        {
            question: "Which method is called when an object is created?",
            answers: [
                { "text": "constructor", "correct": true },
                { "text": "main()", "correct": false },
                { "text": "init()", "correct": false },
                { "text": "start()", "correct": false }
            ]
        },
        {
            question: "Which exception is thrown when a method cannot find a specified file?",
            answers: [
                { "text": "FileNotFoundException", "correct": true },
                { "text": "IOException", "correct": false },
                { "text": "ClassNotFoundException", "correct": false },
                { "text": "NullPointerException", "correct": false }
            ]
        },
        {
            question: "Which keyword is used to prevent inheritance of a class?",
            answers: [
                { "text": "final", "correct": true },
                { "text": "static", "correct": false },
                { "text": "abstract", "correct": false },
                { "text": "protected", "correct": false }
            ]
        },
        {
            question: "Which of the following is not a primitive data type?",
            answers: [
                { "text": "String", "correct": true },
                { "text": "int", "correct": false },
                { "text": "boolean", "correct": false },
                { "text": "char", "correct": false }
            ]
        },
        {
            questio: "Which keyword is used to define an interface in Java?",
            answers: [
                { "text": "interface", "correct": true },
                { "text": "Interface", "correct": false },
                { "text": "class", "correct": false },
                { "text": "abstract", "correct": false }
            ]
        },
        {
            question: "What is the return type of the hashCode() method?",
            answers: [
                { "text": "int", "correct": true },
                { "text": "long", "correct": false },
                { "text": "boolean", "correct": false },
                { "text": "double", "correct": false }
            ]
        },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Creative Style Sheets", correct: false },
            { text: "Colorful Style Sheets", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Computer Style Sheets", correct: false },
        ]
    },
    {
        question: "Which property is used to change the background color?",
        answers: [
            { text: "color", correct: false },
            { text: "bgcolor", correct: false },
            { text: "background-color", correct: true },
            { text: "bgColor", correct: false },
        ]
    },
    {
        question: "Which CSS property controls the text size?",
        answers: [
            { text: "font-style", correct: false },
            { text: "text-size", correct: false },
            { text: "font-size", correct: true },
            { text: "text-style", correct: false },
        ]
    },
    {
        question: "What is the correct syntax for making the text bold?",
        answers: [
            { text: "font-weight: bold;", correct: true },
            { text: "font-style: bold;", correct: false },
            { text: "text-style: bold;", correct: false },
            { text: "text-weight: bold;", correct: false },
        ]
    },
    {
        question: "How do you make each word in a text start with a capital letter?",
        answers: [
            { text: "text-transform: capitalize;", correct: true },
            { text: "text-style: capitalize;", correct: false },
            { text: "transform: capitalize;", correct: false },
            { text: "transform: uppercase;", correct: false },
        ]
    },
    {
        question: "Which property is used to change the font of an element?",
        answers: [
            { text: "font-style", correct: false },
            { text: "font-family", correct: true },
            { text: "font-weight", correct: false },
            { text: "font-size", correct: false },
        ]
    },
    {
        question: "How do you change the left margin of an element?",
        answers: [
            { text: "margin-left", correct: true },
            { text: "padding-left", correct: false },
            { text: "indent-left", correct: false },
            { text: "margin-right", correct: false },
        ]
    },
    {
        question: "How do you make a list that lists its items with squares?",
        answers: [
            { text: "list-type: square;", correct: false },
            { text: "list-style-type: square;", correct: true },
            { text: "list: square;", correct: false },
            { text: "list-style: rectangle;", correct: false },
        ]
    },
    {
        question: "How do you select an element with id 'demo'?",
        answers: [
            { text: ".demo", correct: false },
            { text: "#demo", correct: true },
            { text: "demo", correct: false },
            { text: "*demo", correct: false },
        ]
    },
    {
        question: "How do you select elements with class name 'test'?",
        answers: [
            { text: ".test", correct: true },
            { text: "#test", correct: false },
            { text: "test", correct: false },
            { text: "*test", correct: false },
        ]
    },
    {
        question: "How do you make the text italic?",
        answers: [
            { text: "font-style: italic;", correct: true },
            { text: "font-weight: italic;", correct: false },
            { text: "text-style: italic;", correct: false },
            { text: "text-weight: italic;", correct: false },
        ]
    },
    {
        question: "Which property is used to change the left padding of an element?",
        answers: [
            { text: "padding-left", correct: true },
            { text: "margin-left", correct: false },
            { text: "padding-right", correct: false },
            { text: "indent-left", correct: false },
        ]
    },
    {
        question: "How do you display hyperlinks without an underline?",
        answers: [
            { text: "a {text-decoration:none;}", correct: true },
            { text: "a {underline:none;}", correct: false },
            { text: "a {decoration:no-underline;}", correct: false },
            { text: "a {text-underline:none;}", correct: false },
        ]
    },
    {
        question: "How do you make the first letter of every word in a text uppercase?",
        answers: [
            { text: "text-transform: capitalize;", correct: true },
            { text: "text-transform: uppercase;", correct: false },
            { text: "text-transform: lowercase;", correct: false },
            { text: "text-transform: none;", correct: false },
        ]
    },
    {
        question: "Which property is used to change the space between characters?",
        answers: [
            { text: "letter-spacing", correct: true },
            { text: "character-spacing", correct: false },
            { text: "font-spacing", correct: false },
            { text: "text-spacing", correct: false },
        ]
    },
    {
        question: "How do you change the text color of an element?",
        answers: [
            { text: "color", correct: true },
            { text: "text-color", correct: false },
            { text: "font-color", correct: false },
            { text: "text-style", correct: false },
        ]
    },
    {
        question: "Which property is used to change the bottom margin of an element?",
        answers: [
            { text: "margin-bottom", correct: true },
            { text: "padding-bottom", correct: false },
            { text: "bottom-margin", correct: false },
            { text: "indent-bottom", correct: false },
        ]
    },
    {
        question: "Which property is used to change the font size of an element?",
        answers: [
            { text: "font-size", correct: true },
            { text: "font-style", correct: false },
            { text: "text-size", correct: false },
            { text: "text-style", correct: false },
        ]
    },
    {
        question: "Which property is used to change the alignment of text?",
        answers: [
            { text: "text-align", correct: true },
            { text: "text-style", correct: false },
            { text: "text-decoration", correct: false },
            { text: "text-transform", correct: false },
        ]
    },
    {
        question: "Which property is used to change the height of an element?",
        answers: [
            { text: "height", correct: true },
            { text: "min-height", correct: false },
            { text: "max-height", correct: false },
            { text: "size", correct: false },
        ]
    }
    ];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultsElement = document.getElementById("results");
const timerElement = document.getElementById('timer');
const progressElement = document.getElementById('progress');

let currentQuestionIndex;
let score;
let timeLeft;
let timer;
let selectedQuestions;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 60;
    nextButton.innerHTML = "Next";
    selectedQuestions = shuffleAndSelect(questions, 10);
    showQuestion();
    startTimer();
}

function shuffleAndSelect(array, numberOfQuestions) {
    const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, numberOfQuestions);
}

function showQuestion() {
    resetState();
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });

    updateProgress(currentQuestionIndex, selectedQuestions.length);
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    resultsElement.innerHTML = '';
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${selectedQuestions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    updateHighScore(score);
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function updateHighScore(score) {
    const highScore = localStorage.getItem('highScore') || 0;
    if (score > highScore) {
        localStorage.setItem('highScore', score);
        alert('New High Score!');
    }
}

function updateProgress(currentQuestion, totalQuestions) {
    progressElement.textContent = `Question ${currentQuestion + 1} of ${totalQuestions}`;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startTimer() {
    timerElement.textContent = `${timeLeft} seconds remaining`;
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        } else {
            timerElement.textContent = `${timeLeft} seconds remaining`;
            timeLeft--;
            timerElement.style.color = 'red';
            timerElement.style.fontSize = '36px';
            timerElement.style.fontWeight = '50px';
        }
    }, 1000);
}

function endQuiz() {
    showScore();
    clearInterval(timer);
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < selectedQuestions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();

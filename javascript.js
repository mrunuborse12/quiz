const questions = [
    {
        question: "Which company developed JavaScript?",
        answers: [
            { text: "Netscape", correct: true },
            { text: "Microsoft", correct: false },
            { text: "Google", correct: false },
            { text: "IBM", correct: false }
        ]
    },
    {
        question: "Which of the following is a JavaScript framework?",
        answers: [
            { text: "React", correct: true },
            { text: "Laravel", correct: false },
            { text: "Django", correct: false },
            { text: "Flask", correct: false }
        ]
    },
    {
        question: "What does 'DOM' stand for?",
        answers: [
            { text: "Document Object Model", correct: true },
            { text: "Document Oriented Model", correct: false },
            { text: "Data Object Model", correct: false },
            { text: "Data Oriented Model", correct: false }
        ]
    },
    {
        question: "Which of the following is not a primitive data type in JavaScript?",
        answers: [
            { text: "String", correct: false },
            { text: "Number", correct: false },
            { text: "Boolean", correct: false },
            { text: "Object", correct: true }
        ]
    },
    {
        question: "What is the correct syntax to create a new array in JavaScript?",
        answers: [
            { text: "var myArray = [];", correct: true },
            { text: "var myArray = {};", correct: false },
            { text: "var myArray = <>;", correct: false },
            { text: "var myArray = ();", correct: false }
        ]
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answers: [
            { text: "//", correct: true },
            { text: "#", correct: false },
            { text: "<!-- -->", correct: false },
            { text: "/* */", correct: true }
        ]
    },
    {
        question: "Which method is used to convert a JSON string into a JavaScript object?",
        answers: [
            { text: "JSON.parse()", correct: true },
            { text: "JSON.stringify()", correct: false },
            { text: "JSON.object()", correct: false },
            { text: "JSON.convert()", correct: false }
        ]
    },
    {
        question: "What is the output of 'console.log(typeof NaN);'?",
        answers: [
            { text: "'number'", correct: true },
            { text: "'NaN'", correct: false },
            { text: "'undefined'", correct: false },
            { text: "'object'", correct: false }
        ]
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: [
            { text: "=", correct: true },
            { text: "==", correct: false },
            { text: "===", correct: false },
            { text: "::", correct: false }
        ]
    },
    {
        question: "How do you declare a JavaScript variable?",
        answers: [
            { text: "var", correct: true },
            { text: "int", correct: false },
            { text: "string", correct: false },
            { text: "let", correct: true }
        ]
    },
    {
        question: "What is the result of '2' + 2 in JavaScript?",
        answers: [
            { text: "'22'", correct: true },
            { text: "'4'", correct: false },
            { text: "4", correct: false },
            { text: "NaN", correct: false }
        ]
    },
    {
        question: "Which built-in method sorts the elements of an array?",
        answers: [
            { text: "sort()", correct: true },
            { text: "order()", correct: false },
            { text: "arrange()", correct: false },
            { text: "sortArray()", correct: false }
        ]
    },
    {
        question: "Which JavaScript method is used to write into an alert box?",
        answers: [
            { text: "alert()", correct: true },
            { text: "msg()", correct: false },
            { text: "msgBox()", correct: false },
            { text: "alertBox()", correct: false }
        ]
    },
    {
        question: "Which JavaScript method is used to access an HTML element by id?",
        answers: [
            { text: "getElementById()", correct: true },
            { text: "getElement()", correct: false },
            { text: "getElementByClass()", correct: false },
            { text: "getId()", correct: false }
        ]
    },
    {
        question: "What does 'this' keyword refer to in JavaScript?",
        answers: [
            { text: "The current object", correct: true },
            { text: "The previous object", correct: false },
            { text: "The next object", correct: false },
            { text: "The global object", correct: false }
        ]
    },
    {
        question: "Which method adds a new element to the end of an array?",
        answers: [
            { text: "push()", correct: true },
            { text: "pop()", correct: false },
            { text: "shift()", correct: false },
            { text: "unshift()", correct: false }
        ]
    },
    {
        question: "How do you write a function in JavaScript?",
        answers: [
            { text: "function myFunction() {}", correct: true },
            { text: "def myFunction() {}", correct: false },
            { text: "func myFunction() {}", correct: false },
            { text: "function:myFunction() {}", correct: false }
        ]
    },
    {
        question: "What is the value of 'undefined == null'?",
        answers: [
            { text: "true", correct: true },
            { text: "false", correct: false },
            { text: "undefined", correct: false },
            { text: "null", correct: false }
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: [
            { text: "onclick", correct: true },
            { text: "onchange", correct: false },
            { text: "onmouseover", correct: false },
            { text: "onmouseclick", correct: false }
        ]
    },
    {
        question: "How can you add a comment in JavaScript?",
        answers: [
            { text: "// This is a comment", correct: true },
            { text: "<!-- This is a comment -->", correct: false },
            { text: "# This is a comment", correct: false },
            { text: "' This is a comment", correct: false }
        ]
    },
    {
        question: "Which method removes the last element from an array?",
        answers: [
            { text: "pop()", correct: true },
            { text: "push()", correct: false },
            { text: "shift()", correct: false },
            { text: "unshift()", correct: false }
        ]
    },
    {
        question: "Which keyword is used to check whether a given property is valid or not?",
        answers: [
            { text: "in", correct: true },
            { text: "is in", correct: false },
            { text: "exists", correct: false },
            { text: "lies", correct: false }
        ]
    },
    {
        question: "How do you round the number 7.25 to the nearest integer?",
        answers: [
            { text: "Math.round(7.25)", correct: true },
            { text: "Math.rnd(7.25)", correct: false },
            { text: "round(7.25)", correct: false },
            { text: "rnd(7.25)", correct: false }
        ]
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        answers: [
            { text: "Math.max(x, y)", correct: true },
            { text: "Math.ceil(x, y)", correct: false },
            { text: "Math.higher(x, y)", correct: false },
            { text: "Math.highest(x, y)", correct: false }
        ]
    },
    {
        question: "Which operator returns true if the two compared values are not equal?",
        answers: [
            { text: "!=", correct: true },
            { text: "=", correct: false },
            { text: "==", correct: false },
            { text: "!==", correct: true }
        ]
    }
];

console.log(questions);

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
    timeLeft = 90;
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

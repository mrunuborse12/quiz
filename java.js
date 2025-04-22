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
            question: "Which keyword is used to define an interface in Java?",
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
            question: "Which method is used to terminate a thread?",
            answers: [
                { "text": "stop()", "correct": true },
                { "text": "terminate()", "correct": false },
                { "text": "end()", "correct": false },
                { "text": "finish()", "correct": false }
            ]
        },
        {
            question: "Which operator is used to access members of an object?",
            answers: [
                { "text": ".", "correct": true },
                { "text": ":", "correct": false },
                { "text": "->", "correct": false },
                { "text": "::", "correct": false }
            ]
        },
        {
            question: "Which method is used to get the current thread?",
            answers: [
                { "text": "currentThread()", "correct": true },
                { "text": "getCurrentThread()", "correct": false },
                { "text": "mainThread()", "correct": false },
                { "text": "activeThread()", "correct": false }
            ]
        },
        {
            question: "Which of these is a checked exception?",
            answers: [
                { "text": "IOException", "correct": true },
                { "text": "ArrayIndexOutOfBoundsException", "correct": false },
                { "text": "NullPointerException", "correct": false },
                { "text": "ArithmeticException", "correct": false }
            ]
        },
        {
            question: "What does the JVM stand for?",
            answers: [
                { "text": "Java Virtual Machine", "correct": true },
                { "text": "Java Variable Method", "correct": false },
                { "text": "Java Value Machine", "correct": false },
                { "text": "Java Virtual Method", "correct": false }
            ]
        },
        {
            question: "Which method is used to create an instance of a class?",
            answers: [
                { "text": "new", "correct": true },
                { "text": "create", "correct": false },
                { "text": "instance", "correct": false },
                { "text": "init", "correct": false }
            ]
        },
        {
            question: "Which keyword is used to handle exceptions?",
            answers: [
                { "text": "try", "correct": true },
                { "text": "catch", "correct": false },
                { "text": "throw", "correct": false },
                { "text": "handle", "correct": false }
            ]
        },
        {
            question: "What is the correct way to create an array in Java?",
            answers: [
                { "text": "int[] arr = new int[10];", "correct": true },
                { "text": "int arr = new int[10];", "correct": false },
                { "text": "int[] arr = int[10];", "correct": false },
                { "text": "int arr = int[10];", "correct": false }
            ]
        },
       
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
    if (currentQuestionIndex < selectedQuestions.length) {+
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
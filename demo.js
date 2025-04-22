const questions=[
    
        {
            question: "What does HTML stand for?",
            answers: [
                { "text": "Hyper Text Markup Language", correct: true },
                { "text": "Hyperlinks and Text Markup Language", correct: false },
                { "text": "Home Tool Markup Language", correct: false },
                { "text": "Hyperlinking Text Mark Language", correct: false }
            ]
        },
        {
            question: "Who is making the Web standards?",
            answers: [
                { "text": "The World Wide Web Consortium", correct: true },
                { "text": "Mozilla", correct: false },
                { "text": "Microsoft", correct: false },
                { "text": "Google", correct: false }
            ]
        },
        {
            question: "Choose the correct HTML element for the largest heading",
            answers: [
                { "text": "h1", correct: true },
                { "text": "h6", correct: false },
                { "text": "heading", correct: false },
                { "text": "head", correct: false }
            ]
        },
        {
            question: "What is the correct HTML element for inserting a line break?",
            answers: [
                { "text": "br", correct: true },
                { "text": "lb", correct: false },
                { "text": "break", correct: false },
                { "text": "newline", correct: false }
            ]
        },
        {
            question: "What is the correct HTML for adding a background color?",
            answers: [
                { "text": "body style=\"background-color:yellow;\"", correct: true },
                { "text": "body bg=\"yellow\"", correct: false },
                { "text": "background>yellow</background", correct: false },
                { "text": "body style=\"color:yellow;\"", correct: false }
            ]
        },
        {
            question: "Choose the correct HTML element to define important text",
            answers: [
                { "text": "strong", correct: true },
                { "text": "b", correct: false },
                { "text": "important", correct: false },
                { "text": "<i>", correct: false }
            ]
        },
        {
            question: "Choose the correct HTML element to define emphasized text",
            answers: [
                { "text": "em", correct: true },
                { "text": "i", correct: false },
                { "text": "italic", correct: false },
                { "text": "strong", correct: false }
            ]
        },
        {
            question: "What is the correct HTML for creating a hyperlink?",
            answers: [
                { "text": "a href", correct: true },
                { "text": "a https", correct: false },
                { "text": "a url", correct: false },
                { "text": "a link", correct: false }
            ]
        },
        {
            question: "Which character is used to indicate an end tag?",
            answers: [
                { "text": "/", correct: true },
                { "text": "<", correct: false },
                { "text": "^", correct: false },
                { "text": "*", correct: false }
            ]
        },
        {
            question: "How can you open a link in a new tab/browser window?",
            answers: [
                { "text": "a href=\"url\" target=\"_blank\"", correct: true },
                { "text": "a href=\"url\" new", correct: false },
                { "text": "a href=\"url\" target=\"new\"", correct: false },
                { "text": "a href=\"url\" target=\"_new\"", correct: false }
            ]
        },
        {
            question: "Which of these elements are all <table> elements?",
            answers: [
                { "text": "table, tr, td", correct: true },
                { "text": "table,footer,header", correct: false },
                {"text":"table a ol",correct:false},
                {"text":"table a ul",correct:false},
            ]
        },
        {
            question: "How can you make a numbered list?",
            answers: [
                { "text": "ol", correct: true },
                { "text": "ul", correct: false },
                { "text": "list", correct: false },
                { "text": "dl", correct: false }
            ]
        },
        {
            question: "How can you make a bulleted list?",
            answers: [
                { "text": "ul", correct: true },
                { "text": "ol", correct: false },
                { "text": "list", correct: false },
                { "text": "dl", correct: false }
            ]
        },
        {
            question: "What is the correct HTML for making a checkbox?",
            answers: [
                { "text": "input type=\"checkbox\"", correct: true },
                { "text": "input type=\"check\"", correct: false },
                { "text": "check", correct: false },
                { "text": "checkbox", correct: false }
            ]
        },
        {
            question: "What is the correct HTML for making a text input field?",
            answers: [
                { "text": "input type=\"text\"", correct: true },
                { "text": "input type=\"textfield\"", correct: false },
                { "text": "input type=\"textfield\"", correct: false },
                { "text": "textfield", correct: false }
            ]
        },
        {
            question: "What is the correct HTML for making a drop-down list?",
            answers: [
                { "text": "select", correct: true },
                { "text": "list", correct: false },
                { "text": "dropdown", correct: false },
                { "text": "input type=\"dropdown\"", correct: false }
            ]
        },
        {
            question: "What is the correct HTML for making a text area?",
            answers: [
                { "text": "textarea", correct: true },
                { "text": "input type=\"textarea\"", correct: false },
                { "text": "input type=\"textbox\"", correct: false },
                { "text": "textarea type=\"text\"", correct: false }
            ]
        },
        {
            question: "What is the correct HTML for inserting an image?",
            answers: [
                { "text": "img src=\"image.jpg\" alt=\"MyImage\"", correct: true },
                { "text": "img href=\"image.jpg\" alt=\"MyImage\"", correct: false },
                { "text": "image src=\"image.jpg\" alt=\"MyImage\"", correct: false },
                { "text": "img alt=\"MyImage\">image.jpg</img", correct: false }
            ]
        },
        {
            question: "What is the correct HTML for inserting a background image?",
            answers: [
                { "text": "body style=\"background-image:url('background.jpg');\"", correct: true },
                { "text": "background img=\"background.jpg\"", correct: false },
                { "text": "body bg=\"background.jpg\"", correct: false },
                { "text": "background src=\"background.jpg\"", correct: false }
            ]
        },
        {
            question: "An <iframe> is used to display a web page within a web page.",
            answers: [
                { "text": "True", correct: true },
                { "text": "False", correct: false }
            ]
        },
        {
            question: "HTML comments start with <!-- and end with -->.",
            answers: [
                { "text": "True", correct: true },
                { "text": "False", correct: false }
            ]
        },
        {
            question: "Block elements are normally displayed without starting a new line.",
            answers: [
                { "text": "False", correct: true },
                { "text": "True", correct: false }
            ]
        },
        {
            question: "Inline elements are normally displayed without starting a new line.",
            answers: [
                { "text": "True", correct: true },
                { "text": "False", correct: false }
            ]
        },
        {
            question: "The <div> element is a block-level element.",
            answers: [
                { "text": "True", correct: true },
                { "text": "False", correct: false }
            ]
        },
        {
            question: "The <span> element is an inline element.",
            answers: [
                { "text": "True", correct: true },
                { "text": "False", correct: false }
            ]
        }
    ]
    

;
   
            

    


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

const questions = [
    {
        question: "HTML stands for",
        answers: [
            { text: "Hyper text marking language", correct: false },
            { text: "Hypo text marking language", correct: false },
            { text: "Hyper text markeup language", correct: true },
            { text: "Hypo text markeup language", correct: false },
        ]
    },
    {
        question: "Why we use HTML",
        answers: [
            { text: "for adding colours", correct: false },
            { text: "for creating web pages", correct: true },
            { text: "for adding functionality", correct: false },
            { text: "none of the above", correct: false },
        ]
    },
    {
        question: "Which HTML element is used to define a clickable button",
        answers: [
            { text: "input type=button", correct: true },
            { text: "a", correct: false },
            { text: "div", correct: false },
            { text: "img", correct: false },
        ]
    },
    {
        question: "Which tag is used to define an unordered list in HTML?",
        answers: [
            { text: "ul", correct: true },
            { text: "a", correct: false },
            { text: "list", correct: false },
            { text: "li", correct: false },
        ]
    },
    {
        question: "What is the correct HTML tag for inserting an image?",
        answers: [
            { text: "img src=image.jpg", correct: true },
            { text: "image src=image.jpg", correct: false },
            { text: "img href=image.jpg", correct: false },
            { text: "img source=image.jpg", correct: false },
        ]
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        answers: [
            { text: "alt", correct: true },
            { text: "src", correct: false },
            { text: "title", correct: false },
            { text: "link", correct: false },
        ]
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        answers: [
            { text: "link", correct: false },
            { text: "a", correct: true },
            { text: "div", correct: false },
            { text: "hyperlink", correct: false },
        ]
    },
    {
        question: "What does the HTML br tag represent?",
        answers: [
            { text: "bold", correct: false },
            { text: "break", correct: true },
            { text: "bullet", correct: false },
            { text: "broke", correct: false },
        ]
    },
    {
        question: "Which tag is used to define a table row in HTML",
        answers: [
            { text: "td", correct: false },
            { text: "th", correct: false },
            { text: "table", correct: false },
            { text: "tr", correct: true },
        ]
    },
    {
        question: "Which HTML element is used to specify a title for the document?",
        answers: [
            { text: "title", correct: true },
            { text: "header", correct: false },
            { text: "div", correct: false },
            { text: "meta", correct: false },
        ]
    }
];
    // Add 20 more questions here...
    
    
    
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
    
    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        timeLeft = 60;
        nextButton.innerHTML = "Next";
        shuffle(questions);
        showQuestion();
        startTimer();
    }
    
    function showQuestion() {
        resetState();
        const currentQuestion = questions[currentQuestionIndex];
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
    
        updateProgress(currentQuestionIndex, questions.length);
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
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
        updateHighScore(score);
    }
    
    function handleNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
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
                timerElement.style.color = 'black'; // Change color to red
                timerElement.style.fontSize = '36px'; // Increase font size
                timerElement.style.fontWeight = 'bold'; // Make font bold
            }
        }, 1000);
    }
    
    function endQuiz() {
        showScore();
        clearInterval(timer);
    }
    
    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    });
    
    startQuiz();
    


const questions=[
    {
        question:"HTML stands for",
        answers:[
            {text: "Hyper text marking language", correct:false},
            {text: "Hypo text marking language", correct:false},
            {text: "Hyper text markeup language", correct:true},
            {text: "Hypo text markeup language", correct:false},
            
        ]
    },
    {
        question:"Why we use HTML",
        answers:[
            {text: "for adding colours", correct:false},
            {text: "for creating web pages", correct:true},
            {text: "for adding functionality", correct:false},
            {text: "none of the above", correct:false},
            
        ]

    },
    {
        question:"Which HTML element is used to define a clickable button",
        answers:[
            {text: "input type=button", correct:true},
            {text: "a", correct:false},
            {text: "div", correct:false},
            {text: "img", correct:false},
            
        ]


    },
    {
        question:"Which tag is used to define an unordered list in HTML?",
        answers:[
            {text: "ul", correct:true},
            {text: "a", correct:false},
            {text: "list", correct:false},
            {text: "li", correct:false},
            
        ]
    },
    {
        question:"What is the correct HTML tag for inserting an image?",
        answers:[
            {text: "img src=image.jpg", correct:true},
            {text: "image src=image.jpg", correct:false},
            {text: "img href=image.jpg", correct:false},
            {text: "img source=image.jpg", correct:false},
            
        ]
    },
    {
        question:"Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        answers:[
            {text: "alt", correct:true},
            {text: "src", correct:false},
            {text: "title", correct:false},
            {text: "link", correct:false},
            
        ]
    },
    {
        question:"Which tag is used to create a hyperlink in HTML?",
        answers:[
            {text: "link", correct:false},
            {text: "a", correct:true},
            {text: "div", correct:false},
            {text: "hyperlink", correct:false},
            
        ]
    },
    {
        question:"What does the HTML br tag represent?",
        answers:[
            {text: "bold", correct:false},
            {text: "break", correct:true},
            {text: "bullet", correct:false},
            {text: "broke", correct:false},
            
        ]
    },
    {
        question:"Which tag is used to define a table row in HTML",
        answers:[
            {text: "td", correct:false},
            {text: "th", correct:false},
            {text: "table", correct:false},
            {text: "tr", correct:true},
            
        ]
    },
    {
        question:"Which HTML element is used to specify a title for the document?",
        answers:[
            {text: "title", correct:true},
            {text: "header", correct:false},
            {text: "div", correct:false},
            {text: "meta", correct:false},
            
        ]
    }
    
];




const questionElement= document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex= 0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML ="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo +" ."+ currentQuestion.
    question;

    currentQuestion.answers.forEach(answer=> {
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
        
    }

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn =e.target;
    const isCorrect =selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display ="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML =`you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML ="play Again";
    nextButton.style.display="block";
}




function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

    startQuiz();

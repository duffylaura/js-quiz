var questions = [
    {
    question: "Commonly used data types do NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correct: 2
    },
    {
    question: "The condition in an if/else statement is enclosed with ____________",
    answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correct: 2
    },
    {
    question: "Arrays in JavaScript can be used to store ________________.",
    answers: ["numbers and strings", "other arrays", "booleans", "all of the above"]
    correct: 3
    },
    {
    question: "String values must be enclosed within ______________ when being assigned to variables.",
    answers: ["quotes", "curly brackets", "commas", "parenthesis"],
    correct: 0
    },
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["javascript", "terminal/bash", "for loops", "console.log"],
    correct: 3
    }
];

var quizAreaEl = document.getElementById('quiz-area');

function init = {
    var button2Begin = document.createElement("button"); //create a button that will start the quiz
    button2Begin.textContent = "Click to Begin";
    quizAreaEl.appendChild(button2Begin);
    
    button2Begin.addEventListener('click', doQuiz);
};

function doQuiz = {
    quizAreaEl.textContent = questions.question; 

    for (let i = 0; i < question.answers.length; i++) {
        var selectAnswer = document.createElement('button');
        selectAnswer.textContent = question.answers[i];
        
        if (i == question.correct) {
            selectAnswer.setAttribute("data-correct-answer", true)
        }
        answersEl.appendChild(selectAnswer)
    }


};

init (); 
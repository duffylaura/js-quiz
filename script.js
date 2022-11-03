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
    answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
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

//Global Variables 

var mainEl = document.getElementById('quiz-area');

var headerEl = document.getElementById('header');

var footerEl = document.getElementById('score-area');

var questionNumber = 0; 

var score=0;

var time = 60;

function init() {
    var button2Begin = document.createElement('button'); //create a button that will start the quiz
    button2Begin.textContent = "Click to Begin";
    mainEl.appendChild(button2Begin);
    
    button2Begin.addEventListener('click', startQuiz);
};

function startQuiz() {  
// create timer
    var countdown = document.createElement('timer');

    timerInterval = setInterval (function () {
        time--; 
        countdown.textContent = time + "seconds remaining"; 
        if (time === 0) {endQuiz(); };  // If user times out of quiz, will go to endQuiz 
    }, 1000);

    headerEl.appendChild(countdown);    
// 
    doQuiz(); 
};

function doQuiz() {
    
    if (questionNumber < questions.length) {
        
    var quizAreaP = document.createElement('p');
    
    var quizAreaChoices = document.createElement('div');
   
    mainEl.appendChild(quizAreaP);
    
    mainEl.appendChild(quizAreaChoices);

    quizAreaP.textContent = questions[questionNumber].question; 
    
    for (i = 0; i < (questions[questionNumber].answers.length); i++) { //create buttons dynamically for choices
            
            var selectionButton = document.createElement('button');
            
            selectionButton.textContent = questions[questionNumber].answers[i];

            quizAreaChoices.appendChild(selectionButton);
            
            if (i == questions[questionNumber].correct) {
                selectionButton.setAttribute('class', 'true');      //Use this in check answers function > storing which index is correct? But not working (see below)
            };
    };
    
    quizAreaChoices.addEventListener("click", checkAnswer);
    
    questionNumber++;

    console.log("quest number:" + questionNumber);
    }

    else {
        console.log("Finished!")
        endQuiz(); 
    }
};

function checkAnswer(event) {

    if (event.target.classList.contains('true')) {score++;} //if correct adds to score, else detracts time
    else {time = time - 10};

    console.log("score:"+score);
    
    doQuiz();  
};

function endQuiz () {
    clearInterval(timerInterval); //This stops the timer 
    alert ("You finished the quiz! Your score is " + score + ". Your time was " + (60-time)+ " seconds!");
    var quizTaker = prompt ("Enter your name below: ");
        if (!quizTaker) {
            alert("Please enter something!!!!") 
            quizTaker = prompt ("Enter your name below: ")
        }; 
    
    var save = quizTaker + " scored " + score + " out of 5 in " + (60-time)+ " seconds!" 

    

    if (scores != '') {
        var scores = localStorage.getItem('scores');
            scores = JSON.parse(scores);
            scores.push(save);
        }
        else {
        var scores = save; 
        };

    localStorage.setItem ('scores', scores);

    showScores(); 

function showScores() {
    var displayScores = document.createElement('div');
    var showScores = JSON.parse(scores);
    displayScores.textContent = showScores; 
    footerEl.appendChild(displayScores);
};

};

init();  

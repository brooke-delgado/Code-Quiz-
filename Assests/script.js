//buttons

//Start Button
var startBtn = document.querySelector("#start")

//Answer Buttons 
answerBtn = document.querySelectorAll("button.answBtn")
Answer0Btn = document.querySelector ("#answer0"); 
Answer1Btn = document.querySelector ("#answer1"); 
Answer2Btn = document.querySelector ("#answer2"); 
Answer3Btn = document.querySelector ("#answer3"); 
Answer4Btn = document.querySelector ("#answer4"); 

//Score
submitScoreBtn = document.querySelector ("#score-quiz");
viewscore= document.querySelector ("#View-Scores");


//create questions

 var questions = [

    {

    question : "Which of the following is not JavaScript Data Types?",
    choiceA : "Wrong",
    choiceB : "Wrong",
    choiceC : "Wrong",
    choiceD : "Correct",

    },{

    question : "Which company developed JavaScript?",
    choiceA : "Correct",
    choiceB : "Wrong",
    choiceC : "Wrong",
    choiceD : "Wrong", 

    },{

    question : "Inside which HTML element do we put the JavaScript?",
    choiceA : "Correct",
    choiceB : "Wrong",
    choiceC : "Wrong",
    choiceD : "Wrong",

    },{

    question : "Why so JavaScript and Java have similar name?",
    choiceA : "Wrong",
    choiceB : "Correct",
    choiceC : "Wrong",
    choiceD : "Wrong",

    },{

    question : "What is the original name of JavaScript?",
    choiceA : "Wrong",
    choiceB : "Wrong",
    choiceC : "Correct",
    choiceD : "Wrong",
       
    }
 ];

//quiz begins with timer and question
function beginQuiz(){
    IntroEl.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;
}


//Timer
var timeEL = document.querySelector(".timer");

var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
   var timerInterval = setInterval(funcation() {
     secondsLeft--;
     timeEL.textContent = secondsLeft + "Seconds Left Until Next Question.";

      if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();

    }

  }, 1000);
}

setTime();

//funciton to move to next page



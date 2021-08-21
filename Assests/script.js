//Variables
var showCountdown = document.getElementById("timer");
var questionPrompt = document.getElementById("question.prompt");
var next = document.getElementById("next");
var answerA = document.getElementById("answer-A");
var answerB = document.getElementById("answer-B");
var answerC = document.getElementById("answer-C");
var answerD = document.getElementById("answer-D");
var answerAValue = document.getElementById("pick-A");
var answerBValue = document.getElementById("pick-B");
var answerCValue = document.getElementById("pick-C");
var answerDValue = document.getElementById("pick-D");
var startButtton = document.querySelector("#Start");
var countDown = document.querySelector(".timer");
var score = 0;
var currentQuestion = 0;

startButtton.addEventListener("click", countDown);

//Timer
var counter = 60;
var countDown = setInterval(function () {
  showCountdown.textContent = counter;
  counter--;
  if (counter < 0) {
    timer.textContent = "SORRY TIME'S UP!";
    clearInterval(countDown);
  }
}, 1000);

//// QUIZ ARRAY /////

var listQuestions = [
  "Which of the following is not JavaScript Data Types?",
  "Which company developed JavaScript?",
  "Inside which HTML element do we put the JavaScript?",
  "Why do JavaScript and Java have similar name?",
  "What is the original name of JavaScript?",
];

//Show first question
startButtton.addEventListener("click", nextQuestion);

//show answer choices for first question
if (questionPrompt.textContent === questions[0]) {
  //Show options for first question
  answerA.textContent = "Undefined";
  answerB.textContent = "Number";
  answerC.textContent = "Boolean";
  answerD.textContent = "Float";
  //answer = D
}

//Show options for second question
answerA.textContent = "Netscape";
answerB.textContent = "Bell Labs";
answerC.textContent = "Sun Microsystems";
answerD.textContent = "IBM";
//answer = A

//Show options for third question
answerA.textContent = "<script>";
answerB.textContent = "<head>";
answerC.textContent = "<meta>";
answerD.textContent = "<style>";
//Answer= A

//Show options for fourth question
answerA.textContent = "JavaScript is a stripped-down version of Java";
answerB.textContent = "JavaScript's syntax is loosely based on Java's";
answerC.textContent = "They both originated on the island of Java";
answerD.textContent = "None of the above";
//Answer= B

//Show options for fifth question
answerA.textContent = "LiveScript";
answerB.textContent = "EScript";
answerC.textContent = "Mocha";
answerD.textContent = "JavaScript";
//Answer= C

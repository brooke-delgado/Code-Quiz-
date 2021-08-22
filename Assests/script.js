//Variables
var showCountdown = document.getElementById("timer");
var questionPrompt = document.getElementById("question.prompt");
var next = document.getElementById("next");
var answerA = document.getElementById("answer-A");
var answerB = document.getElementById("answer-B");
var answerC = document.getElementById("answer-C");
var answerD = document.getElementById("answer-D");
var answerAValue = document.getElementById("choice-A");
var answerBValue = document.getElementById("choice-B");
var answerCValue = document.getElementById("choice-C");
var answerDValue = document.getElementById("choice-D");
var startButtton = document.querySelector("#Start");
var countDown = document.querySelector(".timer");
var points = 0;
var pointsArray [];

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
startButtton.addEventListener('click',start);


//show answer choices for first question
if (questionPrompt.textContent === listQuestions[0]) {
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
answerD.textContent = "Sun Microsystems";
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

//show answer choices
if(questionPrompt.textContent ===listQuestions[0]) {
answerA.textContent = "Undefined";
answerB.textContent = "Number";
answerC.textContent = "Boolean";
answerD.textContent = "Float"; //correct


answerA.textContent = "Netscape"; //correct
answerB.textContent = "Bell Labs";
answerC.textContent = "Sun Microsystems";
answerD.textContent = "Sun Microsystems";


answerA.textContent = "<script>"; //correct
answerB.textContent = "<head>";
answerC.textContent = "<meta>";
answerD.textContent = "<style>";


answerA.textContent = "JavaScript is a stripped-down version of Java";
answerB.textContent = "JavaScript's syntax is loosely based on Java's"; //correct
answerC.textContent = "They both originated on the island of Java";
answerD.textContent = "None of the above";


answerA.textContent = "LiveScript";
answerB.textContent = "EScript";
answerC.textContent = "Mocha"; //correct
answerD.textContent = "JavaScript";

}

//display first question
if(startButtton) {
  questionPrompt.textContent = listQuestions[0];
}

// When answer is selected it will be verified right or wrong and awrd points or take away time
if (listQuestions[0] === "Which of the following is not JavaScript Data Types?" && answerD.checked) {
  points += 10
  nextQuestion();
}
//if wrong anwer is chosen
else if (listQuestions[0] === "Which of the following is not JavaScript Data Types?" && !answerD.checked) {
  points = 0;
  counter -= 10;
  nextQuestion();
} 

if (listQuestions[0] === "Which of the following is not JavaScript Data Types?" && answerA.checked) {
  points += 10
  nextQuestion();
}
//if wrong anwer is chosen
else if (listQuestions[0] === "Which of the following is not JavaScript Data Types?" && !answerA.checked) {
  points = 0;
  counter -= 10;
  nextQuestion();
} 


if (listQuestions[0] === "Which of the following is not JavaScript Data Types?" && answerA.checked) {
  points += 10
  nextQuestion();
}
//if wrong anwer is chosen
else if (listQuestions[0] === "Which of the following is not JavaScript Data Types?" && !answerA.checked) {
  points = 0;
  counter -= 10;
  nextQuestion();
} 

if (listQuestions[0] === "Which of the following is not JavaScript Data Types?" && answerB.checked) {
  points += 10
  nextQuestion();
}
//if wrong anwer is chosen
else if (listQuestions[0] === "Which of the following is not JavaScript Data Types?" && !answerB.checked) {
  points = 0;
  counter -= 10;
  nextQuestion();
} 


if (listQuestions[0] === "Which of the following is not JavaScript Data Types?" && answerC.checked) {
  score += 10
  nextQuestion();
}
//if wrong anwer is chosen
else if (listQuestions[0] === "Which of the following is not JavaScript Data Types?" && !answerC.checked) {
  points = 0;
  counter -= 10;
  nextQuestion();

//checking to see if asnwer was right
next.addEventListener('click',validation);
} 
//so page won't refresh
function nextQuestion() {

}

// next question button will remove answered question 
listQuestions.shift;

//next question butting will show next question
questionPrompt.textContent = listQuestions[0];

//Questions and answers matched together
if(questionPrompt.textContent === "Which of the following is not JavaScript Data Types?") {
  answerA.textContent = "Undefined";
  answerB.textContent = "Number";
  answerC.textContent = "Boolean";
  answerD.textContent = "Float";
} else if (questionPrompt.textContent ==="Which company developed JavaScript?") {
answerA.textContent = "Netscape";
answerB.textContent = "Bell Labs";
answerC.textContent = "Sun Microsystems";
answerD.textContent = "Sun Microsystems";
} else if (questionPrompt.textContent ==="Inside which HTML element do we put the JavaScript?") {
answerA.textContent = "LiveScript";
answerB.textContent = "EScript";
answerC.textContent = "Mocha";
answerD.textContent = "JavaScript";
}else if (questionPrompt.textContent ==="Why do JavaScript and Java have similar name?") {
answerA.textContent = "LiveScript";
answerB.textContent = "EScript";
answerC.textContent = "Mocha";
answerD.textContent = "JavaScript";
} else if (questionPrompt.textContent ==="What is the original name of JavaScript?") {
answerA.textContent = "LiveScript";
answerB.textContent = "EScript";
answerC.textContent = "Mocha";
answerD.textContent = "JavaScript";
}

//render score


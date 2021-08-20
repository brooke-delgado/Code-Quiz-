//Variables- get a handle
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

//Start Button
var startBtn = document.querySelector("#Start");

//Timer
var counter = 60;
var countDown = setInterval(function () {
  showCountdown.textContent = counter;
  counter--;
}, 1000);


//Populate first question
if (startBtn) {
  questionPrompt.textContent = listQuestions[0];
}

//// QUIZ ARRAY /////

var listQuestions = [
  "Which of the following is not JavaScript Data Types?",
  //choices: ["A('Undefined')", "B('Number')", "C('Boolean')", "D('Float')"],
  //Answer: "D('Float')",
  "Which company developed JavaScript?",
  //choices: [
  //"A('Netscape')",
  // "B('Bell Labs')",
  // "C('Sun Microsystems')",
  // "D('IBM')",
  //Answer: "A('Netscape'')",
  "Inside which HTML element do we put the JavaScript?",
  //choices: ["A('<script>')", "B('<head>')", "C('<meta>')", "D('<style>')"],
  //Answer: "A('<script>')",
  "Why do JavaScript and Java have similar name?",
  //choices: [
  // "A('JavaScript is a stripped-down version of Java')",
  // "B('JavaScript's syntax is loosely based on Java's')",
  // "C('They both originated on the island of Java')",
  //  "D('None of the above')",
  //Answer: "B('JavaScript's syntax is loosely based on Java's')",
  "What is the original name of JavaScript?",
  //choices: [
  //  "A('LiveScript')",
  // "B('EScript')",
  // "C('Mocha)",
  // "D('JavaScript')",
  //Answer: "C('Mocha')",
];

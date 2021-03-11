var startButton = document.querySelector(".startButton");
var userAnswer = document.querySelector("userAnswer");
var userInitial = document.querySelector("userInitials");
var timer = document.getElementById("timer");
var question = document.getElementById("questionBox");
var answerA = document.getElementById("answerBoxA");
var answerB = document.getElementById("answerBoxB");
var answerC = document.getElementById("answerBoxC");
var answerD = document.getElementById("answerBoxD");
var timeLeft;
var i = 0
var score = 0;



var questionSet = [ {
    question: "question 1 here",
    answers: [
      {text: "answer option a here, true",
      correct: true},
      {text: "answer option b here, false", 
      correct: false},
      {text: "answer option c here, false", 
      correct: false},
      {text: "answer option d here, false", 
      correct: false}
    ]
  }, {
    question: "question 2 here",
    answers: [
      {text: "answer option a here, false",
      correct: false},
      {text: "answer option b here, false", 
      correct: false},
      {text: "answer option c here, false", 
      correct: false},
      {text: "answer option d here, true", 
      correct: true}
    ]
  }, {
    question: "question 3 here",
    answers: [
      {text: "answer option a here, false",
      correct: false},
      {text: "answer option b here, false", 
      correct: false},
      {text: "answer option c here, true", 
      correct: true},
      {text: "answer option d here, false", 
      correct: false}
    ]
  }, {
    question: "question 4 here",
    answers: [
      {text: "answer option a here, true",
      correct: true},
      {text: "answer option b here, false", 
      correct: false},
      {text: "answer option c here, false", 
      correct: false},
      {text: "answer option d here, false", 
      correct: false}
    ]
  }
 
];

document.getElementById("startButton").addEventListener("click", startGame);
document.getElementById("answerBoxMain").addEventListener("click", nextQuestion);
document.getElementById("answerBoxA").addEventListener("click", responseA);
document.getElementById("answerBoxB").addEventListener("click", responseB);
document.getElementById("answerBoxC").addEventListener("click", responseC);
document.getElementById("answerBoxD").addEventListener("click", responseD);

function responseA () {
  if (questionSet[i].answers[0].correct === true) {
    score = score + 10, console.log (score),
    console.log ("True"); 
  } else {console.log("false")}
}

function responseB () {
  if (questionSet[i].answers[1].correct === true) {
    score = score + 10, console.log (score),
    console.log ("True"); 
  } else {console.log("False")}
}

function responseC () {
  if (questionSet[i].answers[2].correct === true) {
    score = score + 10, console.log (score),
    console.log ("True"); 
  } else {console.log("False")}
}

function responseD () {
  if (questionSet[i].answers[3].correct === true) {
    score = score + 10, console.log (score),
    console.log ("True"); 
  } else {console.log("False")}
}

function startGame() {
  countdown();
  showQuestion();
}

function countdown() {
  var timeLeft = 20;
  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timer.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else {
      timer.textContent = "", 
      clearInterval(timeInterval), gameOver();
    }; 
  }, 10000);
}

function showQuestion() {
  questionBox.textContent = questionSet[0].question;
  answerBoxA.textContent = questionSet[0].answers[0].text;
  answerBoxB.textContent = questionSet[0].answers[1].text;
  answerBoxC.textContent = questionSet[0].answers[2].text;
  answerBoxD.textContent = questionSet[0].answers[3].text;
} 
// for loop for above to go through questionSet variable
function nextQuestion() {
    i = i + 1;
    if (i === questionSet.length) {
    gameOver()} else { 
    questionBox.textContent = questionSet[i].question;
    answerBoxA.textContent = questionSet[i].answers[0].text;
    answerBoxB.textContent = questionSet[i].answers[1].text;
    answerBoxC.textContent = questionSet[i].answers[2].text;
    answerBoxD.textContent = questionSet[i].answers[3].text;  
    console.log("Next Question");
    }
  }; 
   
  function gameOver() {
    timer.textContent = "";
    questionBox.textContent = "Game Over";
    answerBoxA.textContent = "";
    answerBoxB.textContent = "";
    answerBoxC.textContent = "";
    answerBoxD.textContent = "";
  }




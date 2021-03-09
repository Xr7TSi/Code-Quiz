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

var questionSet = [ {
    question: "question 1 here",
    answers: [
      {text: "answer option a here",
      correct: true},
      {text: "answer option b here", 
      correct: false},
      {text: "answer option c here", 
      correct: false},
      {text: "answer option d here", 
      correct: false}
    ]
  } {
    question: "question 2 here",
    answers: [
      {text: "answer option a here",
      correct: true},
      {text: "answer option b here", 
      correct: false},
      {text: "answer option c here", 
      correct: false},
      {text: "answer option d here", 
      correct: false},
    ]
  }
 
];

document.getElementById("startButton").addEventListener("click", startGame);
document.getElementById("answerBoxA").addEventListener("click", nextQuestion);
document.getElementById("answerBoxB").addEventListener("click", nextQuestion);
document.getElementById("answerBoxC").addEventListener("click", nextQuestion);
document.getElementById("answerBoxD").addEventListener("click", nextQuestion);

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
      timer.textContent = timeLeft + " seconds remaining";
      clearInterval(timeInterval);
    }
  }, 1000);
}

function showQuestion() {
  questionBox.textContent = questionSet[0].question;
  answerBoxA.textContent = questionSet[0].answerA;
  answerBoxB.textContent = questionSet[0].answerB;
  answerBoxC.textContent = questionSet[0].answerC;
  answerBoxD.textContent = questionSet[0].answerD;
}
// for loop for above to go through questionSet variable

function nextQuestion() {
  console.log("Next Question");
}

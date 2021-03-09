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


var questionSet = [
{
  "question": "question 1 here",
  "answerA": "answer option a here",
  "answerB": "answer option b here",
  "answerC": "answer option c here",
  "answerD": "answer option d here",
  "correctAnswer": "a",
},
{
  "question": "question 2 here",
  "answerA": "answer option a here",
  "answerB": "answer option b here",
  "answerC": "answer option c here",
  "answerD": "answer option d here",
  "correctAnswer": "a",
},
{
  "question": "question 3 here",
  "answerA": "answer option a here",
  "answerB": "answer option b here",
  "answerC": "answer option c here",
  "answerD": "answer option d here",
  "correctAnswer": "a",
},
]

document.getElementById("startButton").addEventListener("click", startGame);

function startGame() {
countdown();
showQuestion();
showAnswerA();
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
    }, 100);
  }

  function showQuestion()  {
       questionBox.textContent = questionSet[0].question;
  }

  function showAnswerA()  {
    questionBox.textContent = questionSet[0].answerA;
}
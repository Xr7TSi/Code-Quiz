var startButton = document.querySelector(".startButton");
var userAnswer = document.querySelector("userAnswer");
var userInitials = document.querySelector("userInitials");
var timer = document.getElementById("timer");
var question = document.getElementById("questionBox");
var timeLeft;

document.getElementById("startButton").addEventListener("click", startGame);

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
    }, 100);
  }

  function showQuestion()  {
       question.textContent = "First Question";
  }
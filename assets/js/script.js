// variables
var startButton = document.querySelector(".startButton");
// var question = 
// var answer =
var userAnswer = document.querySelector("userAnswer");
var userInitials = document.querySelector("userInitials");
// var userScore =
var timer = document.getElementById("timer")
var timeLeft;









// event listeners
document.getElementById("startButton").addEventListener("click", countdown);




function countdown() {
    var timeLeft = 20;
    var timeInterval = setInterval(function () {
      if (timeLeft > 0) {
        timer.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else {
        timer.textContent = timeLeft + ' seconds remaining';
        clearInterval(timeInterval);  
      }
    }, 100);
  }
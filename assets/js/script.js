// variables
var startButton = document.querySelector(".start-button");
// var question = 
// var answer =
var userAnswer = document.querySelector("userAnswer");
var userInitials = document.querySelector("userInitials");
// var userScore =
var timer = document.getElementById("timer");










// event listeners
startButton.addEventListener("click", startGame);




// functions


// function startGame() {
//     // isWin = false;
//     // timerCount = 10;
//     // // Prevents start button from being clicked when round is in progress
//     // startButton.disabled = true;
//     // renderBlanks()
//     // startTimer()
// }

function timer(){
    var timeLeft = 60;
    var timeInterval = setInterval(function(){
        if (timeLeft >= 60) {
            timer.textContent = "Time Left " + timeLeft;
            timeLeft--;
        } else if (timeLeft === 0) {
            timer.textContent = "Time Left " + timeLeft;
        }
    }, 1000);
}

// function askQuestion(){

// }

// function takeTen(){

// }

// function setScore() {
//     // win.textContent = winCounter;
//     // localStorage.setItem("winCount", winCounter);
// }

// function resetGame() {
    
//     // startButton.disabled = false;

//   }
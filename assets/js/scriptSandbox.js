
// variables
var startButton = document.querySelector(".startButton");
var userAnswer = document.querySelector("userAnswer");
var timer = document.getElementById("timer");
var question = document.getElementById("questionBox");
var answerA = document.getElementById("answerBoxA");
var answerB = document.getElementById("answerBoxB");
var answerC = document.getElementById("answerBoxC");
var answerD = document.getElementById("answerBoxD");
var timeLeft = 30
var i = 0
var score = 0;
var topScores = []
var userInitials = []
var userStats = []
var userScores = []



// question arrays
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

// event listeners
document.getElementById("startButton").addEventListener("click", startGame);
document.getElementById("answerBoxMain").addEventListener("click", nextQuestion);
document.getElementById("answerBoxA").addEventListener("click", responseA);
document.getElementById("answerBoxB").addEventListener("click", responseB);
document.getElementById("answerBoxC").addEventListener("click", responseC);
document.getElementById("answerBoxD").addEventListener("click", responseD);
document.getElementById("submitBtn").addEventListener("click", pushStats);

// game start/stop functions



function showTimer() {
  timer.textContent = timeLeft + " seconds remaining";
} showTimer();

function showScore() {
  scoreBox.textContent = score;
} showScore();

function startGame() {
  countdown();
  showQuestion();
  i = 0;
}

function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timer.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else {
      clearInterval(timeInterval);
    }; 
  }, 1000);
}

function gameOver() {
  questionBox.textContent = "Game Over";
  answerBoxA.textContent = "";
  answerBoxB.textContent = "";
  answerBoxC.textContent = "";
  answerBoxD.textContent = "";
  topScores.push(score);
  score = 0;
  timeLeft = 0;
  timer.textContent = timeLeft + " seconds remaining";
  // localStorage.setItem('topScores', topScores);
}

function getInitials() {
  document.getElementById("initialsInput.value"),
  userInitials.push(initialsInput.value), console.log(userInitials),
  localStorage.setItem('userInitials', userInitials);
}

function getUserScore() {
  userScores.push(score);
  localStorage.setItem('userScores', userScores);
}



function pushStats() {
  getInitials(),
  getUserScore();

  // modify to add initials and scores as objects into an array. 
}


// question display functions
function showQuestion() {
  questionBox.textContent = questionSet[0].question;
  answerBoxA.textContent = questionSet[0].answers[0].text;
  answerBoxB.textContent = questionSet[0].answers[1].text;
  answerBoxC.textContent = questionSet[0].answers[2].text;
  answerBoxD.textContent = questionSet[0].answers[3].text;
  scoreBox.textContent = score;
} 

function nextQuestion() {
    i = i + 1;
    if (i === questionSet.length) {
    gameOver()} else { 
    questionBox.textContent = questionSet[i].question;
    answerBoxA.textContent = questionSet[i].answers[0].text;
    answerBoxB.textContent = questionSet[i].answers[1].text;
    answerBoxC.textContent = questionSet[i].answers[2].text;
    answerBoxD.textContent = questionSet[i].answers[3].text;
    // scoreBox.textContent = score;  
    }
  }; 

  // score addition/response validation and time penalty
  function responseA () {
    if (questionSet[i].answers[0].correct === true) {
      score = score + 10, showScore(); 
    } else {timeLeft = timeLeft - 10};
  }
  
  function responseB () {
    if (questionSet[i].answers[1].correct === true) {
      score = score + 10, showScore(); 
    } else {timeLeft = timeLeft - 10};
  }
  
  function responseC () {
    if (questionSet[i].answers[2].correct === true) {
      score = score + 10, showScore(); 
    } else {timeLeft = timeLeft - 10};
  }
  
  function responseD () {
    if (questionSet[i].answers[3].correct === true) {
      score = score + 10, showScore(); 
    } else {timeLeft = timeLeft - 10};
  }

// Score/username storage




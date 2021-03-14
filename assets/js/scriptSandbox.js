
// variables
var startButton = document.querySelector("startButton");
var userAnswer = document.querySelector("userAnswer");
var timer = document.getElementById("timer");
var question = document.getElementById("questionBox");
var answerA = document.getElementById("answerBoxA");
var answerB = document.getElementById("answerBoxB");
var answerC = document.getElementById("answerBoxC");
var answerD = document.getElementById("answerBoxD");
var InitialsBox = document.getElementById("initialsBox");
var showButton = document.getElementById("showButton");
var timeLeft = 30
var i = 0
var score = 0;
var initials;
var usersStats = []
var displayInitials;
var displayScore;

// question arrays
var questionSet = [ {
    question: "JavaScript is:",
    answers: [
      {text: "a programming language.",
      correct: true},
      {text: "a markup language.", 
      correct: false},
      {text: "exactly the same thing as Java.", 
      correct: false},
      {text: "a prescription for coffee.", 
      correct: false}
    ]
  }, {
    question: "DOM stands for:",
    answers: [
      {text: "Document Oriented Model",
      correct: false},
      {text: "Different Order Markup", 
      correct: false},
      {text: "Don't Overlook Marmalade", 
      correct: false},
      {text: "Document Object Model", 
      correct: true}
    ]
  }, {
    question: "CSS stands for:",
    answers: [
      {text: "Cascading Style Separator",
      correct: false},
      {text: "Capstone Serial Selector", 
      correct: false},
      {text: "Cascading Style Sheets", 
      correct: true},
      {text: "Callback Semantic System", 
      correct: false}
    ]
  }, {
    question: "HTML is:",
    answers: [
      {text: "an acronym for Hypertext Markup Language",
      correct: true},
      {text: "optional when creating a web application", 
      correct: false},
      {text: "a programming language", 
      correct: false},
      {text: "a trendy bistro in Midtown", 
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
document.getElementById("submitBtn").addEventListener("click", submit);

// pre-game appearance
initialsBox.style.visibility = "hidden"

// game start/stop functions
function showTimer() {
  timer.textContent = timeLeft + " seconds remaining";
} showTimer();

function showScore() {
  scoreBox.textContent = "SCORE " + score;
} showScore();

function startGame() {
  countdown();
  showQuestion();
  showButton.style.visibility = "hidden",
  i = 0;
}

function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      timer.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else {
      clearInterval(timeInterval),
      timer.textContent = timeLeft + " seconds remaining";
    }; 
  }, 1000);
}

function gameOver() {
  questionBox.textContent = "Game Over";
  answerBoxA.textContent = "";
  answerBoxB.textContent = "";
  answerBoxC.textContent = "";
  answerBoxD.textContent = "";
  timeLeft = 0;
  timer.textContent = timeLeft + " seconds remaining";
  InitialsBox.style.visibility = ""
}

// user stats storage and display
function getInitials() {
  document.getElementById("initialsInput.value");
  initials = initialsInput.value
  return initialsInput.value
}

function makeArray() {
  playerData = {initials, score}
}

function submit() {
  getInitials();
  makeArray();
  usersStats.push(playerData);
  localStorage.setItem("usersStats", JSON.stringify(usersStats));
  gameReset();
  getUsersStats()
}

function gameReset () {
  initialsBox.style.visibility = "hidden";
  showButton.style.visibility = ""; 
}

function getUsersStats () {
  var displayUsersStats = JSON.parse(localStorage.getItem("usersStats"));
  console.log(displayUsersStats);
  if (displayUsersStats !== null) {
    for (let index = 0; index < displayUsersStats.length; index++) {
      var displayUsersStats = displayUsersStats[index];

      var li = document.createElement("li");
      li.textContent = displayUsersStats;
      li.setAttribute("data-index", index);
      scoresBox.appendChild(li);
    }
  }
} getUsersStats()


// question display functions
function showQuestion() {
  questionBox.textContent = questionSet[0].question;
  answerBoxA.textContent = questionSet[0].answers[0].text;
  answerBoxB.textContent = questionSet[0].answers[1].text;
  answerBoxC.textContent = questionSet[0].answers[2].text;
  answerBoxD.textContent = questionSet[0].answers[3].text;
  scoreBox.textContent = "SCORE " + score;
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


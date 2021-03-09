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
  "answerA": "answer option b here",
  "answerB": "answer option b here",
  "answerC": "answer option b here",
  "answerD": "answer option b here",
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
document.getElementById("answerBoxA").addEventListener("click", nextQuestion);
document.getElementById("answerBoxB").addEventListener("click", nextQuestion);
document.getElementById("answerBoxC").addEventListener("click", nextQuestion);
document.getElementById("answerBoxD").addEventListener("click", nextQuestion);

function startGame() {

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
  } countdown();
  
  function showQuestion()  {
    questionBox.textContent = questionSet[0].question;
    } showQuestion();
  
  function showAnswerA()  {
    answerBoxA.textContent = questionSet[0].answerA;
  } showAnswerA();  

  function showAnswerB()  {
    answerBoxB.textContent = questionSet[0].answerB;
  } showAnswerB();  

  function showAnswerC()  {
    answerBoxC.textContent = questionSet[0].answerC;
  } showAnswerC(); 

  function showAnswerD()  {
    answerBoxD.textContent = questionSet[0].answerD;
  } showAnswerD();  

  

}

function nextQuestion() {
  console.log("Next Question");
 
}


  



// var timeEl = document.querySelector(".time");
// var secondsLeft = 60;

// // set time interval
// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft --;
//     timeEl.textContent = secondsLeft;
//   }, 1000);
// }

var quizMe = document.querySelector(".quiz-button");
var header = document.querySelector(".page-header")
var questionData = document.querySelector("#question-container")
var questionEl = document.querySelector("#question")
var answerOptions = document.querySelector(".answer")

var currentQuestion = {}
var acceptinAnswers = true
var score = 0
var questionCounter = 0


quizMe.addEventListener("click", startQuiz);


function startQuiz() {
  quizMe.classList.add("hide")
  header.classList.add("hide")
  questionData.classList.remove("hide")
  availableQuestions = [...quizData]
  getNewQuestion()

}

function getNewQuestion() {
  for (var i=0; i < availableQuestions.length; i++) {
    var questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    questionEl.innerText = currentQuestion.question;
  }

  answer.forEach(answer); {
    var number = answer.dataset["number"]
    answerOptions.innerText = currentQuestion['answer' + number]
  }

 

} 



var quizData = [
  {
    question: "Commonly used data types DO NOT include:", 
    a: "strings",
    b: "booleans",
    c: "alerts",
    d: "numbers",
    correctAnswer: "c",
  },

  {
    question: "The condition in an if / else statement is enclosed within _____.", 
    a: "quotes",
    b: "curly brackets",
    c: "parantheses",
    d: "square brackets",
    correct: "c",
  },

  {
    question: "Arrays in JavaScript can be used to store _____.",
    a: "numbers and strings",
    b: "other arrays",
    c: "booleans",
    d: "all of the above",
    correctAnswer: "d",
  },

  {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    a: "commas",
    b: "curly brackets",
    c: "quotes",
    d: "parantheses",
    correctAnswer: "c",
  },

  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    a: "JavaScript",
    b: "terminal/bash",
    c: "for loops",
    d: "console log",
    correctAnswer: "d", 
  }
]




quizMe.addEventListener("click", startQuiz);
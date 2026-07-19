const welcomeScreen = document.querySelector(".welcome_screen");
const quizScreen = document.querySelector(".test_screen");
const resultScreen = document.querySelector(".result");
const btn = document.querySelector("#start_btn");
const questionh2 = document.querySelector("h2");
// queryselectorall gives node list by index value,so buttons also start from index 1
const optionsbtn = document.querySelectorAll(".options button");
const nextbutton = document.querySelector(".nextbtn");
const resultheading = document.querySelector(".result h1");
const timercount = document.querySelector(".timer");
const backbtn=document.querySelector("#backbtn")

btn.addEventListener("click", () => {
  welcomeScreen.style.display = "none";
  quizScreen.style.display = "flex";
  resultScreen.style.display = "none";

   displayQuestion();
  //  StartTimer()
});

// arryas

const questions = [
  {
    question: "what is the full form of css?",
    options: ["Cascading Style Sheets", "Computer Styling System", "Creative Style Syntax ", "Colorful Sheet Structure"],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What is the full form of DOM in web development?",
    options: ["Data Object Model", "Document Object Model", "Digital Object Management", "Dynamic Output Method"],
    answer: "Document Object Model",
  },
  {
    question: "Why is JavaScript (JS) used in web development?",
    options: [
      "To make web pages interactive and dynamic",
      "To physically assemble computer hardware",
      "To permanently store files on a computer",
      "To design electrical circuits",
    ],
    answer: "To make web pages interactive and dynamic",
  },
];

// variables
let selectedAnswers=[];
let selectedAnswer;
let score = 0;
let currentQuestionIndex = 0;
let remainingTime = 11;
let stoptimer;

// functions

//timer  
function StartTimer() {
  console.log("hello");
  stoptimer = setInterval(() => {
    remainingTime--;
    timercount.innerText = remainingTime;
    if (remainingTime === 0) {
      clearInterval(stoptimer);
      quizScreen.style.display = "none";
      resultScreen.style.display = "flex";
    }
  }, 1000);
}

// to display question


// console.log(previous_selected)
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionh2.innerText = currentQuestion.question;
  // inner text is used for both reading and writing the text
  let previous_selected=selectedAnswers[currentQuestionIndex];
  for (let i = 0; i < 4; i++) {
    optionsbtn[i].innerText = currentQuestion.options[i];
    optionsbtn[i].classList.remove("selected");
    if(previous_selected==optionsbtn[i].innerText){
      optionsbtn[i].classList.add("selected");

    }
  }
}

// click next button
nextbutton.addEventListener("click", () => {
  if (selectedAnswer === questions[currentQuestionIndex].answer) {
    score++;
  } else {
  }
  currentQuestionIndex = currentQuestionIndex + 1;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    // welcomeScreen.style.display = "none";
    quizScreen.style.display = "none";
    resultScreen.style.display = "flex";

    resultheading.innerText = `Your Score:${score}/${questions.length}`;
  }

  // return displayQuestion();
});
for (let i = 0; i < 4; i++) {
  optionsbtn[i].addEventListener("click", () => {
    for (let j = 0; j < 4; j++) {
      optionsbtn[j].classList.remove("selected");
    }
    optionsbtn[i].classList.add("selected");
    selectedAnswer = optionsbtn[i].innerText;
    selectedAnswers[currentQuestionIndex]= selectedAnswer;
    // console.log(selectedAnswers)
  });
}

backbtn.addEventListener("click",()=>{
  if(currentQuestionIndex>0){
  currentQuestionIndex--;
  
}
displayQuestion();
})

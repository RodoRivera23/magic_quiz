//time remaining element
var timeRemainingEl = document.getElementById("time_remaining");

var time = 10;
var timerInterval;

var score = 0;
var scoreTotal = document.getElementById("total_score");

var questionIndex = 0;
//greeting section element
var greetingEl = document.getElementById("greeting_section");

//start button element
var btnStart = document.getElementById("btn_start");

var btnAgain = document.getElementById("btn_again");

//check answer button
var btnCheckAnswer = document.getElementById("btn_check");

//questions section
var qestionsEl = document.getElementById("questions_section");
qestionsEl.style.display = "none";
var optionsEl = document.getElementById("options");

var scoreEl = document.getElementById("score_section");
scoreEl.style.display = "none";

var questions = [
    {
        question: "What is the total of 2 + 2?",
        options: ["6", "3", "4"],
        answer: "4"
    },
    {
        question: "Which is the largest city in Mexico?",
        options: ["Guadalajara", "Ciudad de México", "Monterrey"],
        answer: "Ciudad de México"
    },
    {
        question: "What is the total of 3 x 2?",
        options: ["3", "12", "6"],
        answer: "6"
    },
    {
        question: "What's the national animal of Australia?",
        options: ["Kangaroo", "Panda", "Eagle"],
        answer: "Kangaroo"
    },
    {
        question: "Name Pixar first feature-length movie?",
        options: ["Frozen", "Toy Story", "Shrek"],
        answer: "Toy Story"
    },
    {
        question: "Who is Luke's father?",
        options: ["Obi Wan", "Darth Vader", "Han Solo"],
        answer: "Darth Vader"
    },
    {
        question: "What does “HTTP” stand for?",
        options: ["HyperText Transfer Person", "HyperText Transfer Port", "HyperText Transfer Protocol"],
        answer: "HyperText Transfer Protocol"
    },
    {
        question: "Who was the first woman to win a Nobel Prize in 1903?",
        options: ["Marie Curie", "Princess Diana", "Leia Organa"],
        answer: "Marie Curie"
    },
    {
        question: "What is the symbol for potassium?",
        options: ["Fe", "K", "Na"],
        answer: "K"
    },
    {
        question: "What was Superman birth name?",
        options: ["Kal-El", "Jor-El", "John"],
        answer: "Kal-El"
    }
]

btnStart.addEventListener("click", function () {
    setTime();
    startQuiz();
})

function setTime() {
    hideElements();
    // Sets interval in variable
    timerInterval = setInterval(function () {
        time--;
        timeRemainingEl.textContent = " " + time + " seconds left.";

        if (time === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

function hideElements() {
    if (greetingEl.style.display === "none") {
        greetingEl.style.display = "block";
    } else {
        greetingEl.style.display = "none";
    }

    if (qestionsEl.style.display === "none") {
        qestionsEl.style.display = "block";
    } else {
        qestionsEl.style.display = "none";
    }
}

function sendMessage() {
    hideElements()
    if (time == 0) {
        timeRemainingEl.textContent = "";
        alert("Time's up!");
    }
}

//Questions Section
function startQuiz() {
    optionsEl.innerHTML = "";
    var currQuestion = questions[questionIndex];

    var questionName = document.getElementById('question_name');
    questionName.textContent = currQuestion.question;

    for (var i = 0; i < currQuestion.options.length; i++) {

        var option = currQuestion.options[i];
        var button = document.createElement("button");
        button.setAttribute("class", "option");
        button.value = option;
        button.textContent = option;

        optionsEl.appendChild(button)
    }
}

optionsEl.addEventListener("click", function (event) {
    var optionEl = event.target
    if (optionEl.matches('.option')) {
        if (optionEl.value == questions[questionIndex].answer) {
            alert("Correct!");
            time += 5;
            score += 100;
        } else {
            alert("Wrong!")
            time -= 2;
        }

        questionIndex++;
        if (time <= 0 || questionIndex === questions.length) {
            endQuiz();
            saveScore();
        } else {
            startQuiz();
        }
    }
})

function endQuiz() {
    clearInterval(timerInterval);
    timeRemainingEl.textContent = " 0";
    qestionsEl.style.display = "none"
}

function saveScore() {
    scoreEl.style.display = "block";
    scoreTotal.textContent = "Your score is: " + score;
}

btnAgain.addEventListener("click", function () {
    setTime();
    startQuiz();
})


//time remaining element
var timeRemainingEl = document.getElementById("time_remaining");

var questionIndex = 0;

//greeting section element
var greetingEl = document.getElementById("greeting_section");

//start button element
var btnStart = document.getElementById("btn_start");

//check answer button
var btnCheckAnswer = document.getElementById("btn_check");

//questions section
var qestionsEl = document.getElementById("questions_section");
qestionsEl.style.display = "none";

var optionsEl = document.getElementById("options");

var questions = [
    {
        question: "cuanto es 2 + 2",
        options: ["6", "3", "4"],
        answer: "4"
    },
    {
        question: "cual es la capital de México",
        options: ["Guadalajara","Monterrey","Ciudad de México"],
        answer: "Ciudad de México"
    }
]

btnStart.addEventListener("click", function () {
    setTime(10);
    startQuiz();
})

function setTime(secondsLeft) {
    hideElements();
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeRemainingEl.textContent = " " + secondsLeft + " seconds left.";

        if (secondsLeft === 0) {
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
    timeRemainingEl.textContent = " Time's up!";
    //setTime(5);
}

//Questions Section
function startQuiz() {

    var currQuestion = questions[questionIndex];

    var questionName = document.getElementById('question_name');
    questionName.textContent = currQuestion.question;

    for (var i = 0; i < currQuestion.options.length; i++) {
        
        var option = currQuestion.options[i];
        var button = document.createElement("button");
        button.value = option;
        button.textContent =  option;

        optionsEl.appendChild(button)
    }
}

function checkAnswers() {


}


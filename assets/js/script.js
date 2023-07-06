//time remaining element
var timeRemainingEl = document.getElementById("time_remaining");

//greeting section element
var greetingEl = document.getElementById("greeting_section");

//start button element
var btnStart = document.getElementById("btn_start");

//questions section
var qestionsEl = document.getElementById("questions_section");
qestionsEl.style.display = "none";

btnStart.addEventListener("click", function () {
    setTime(10);
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


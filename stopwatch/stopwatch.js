
const second = document.getElementById('sec')
const minute = document.getElementById('min')
const hours = document.getElementById('hour')

let sec = 0;
let min = 0;
let hour = 0;
let interval;
let pause = false;



function timer() {
    if (!pause) {
        sec++
        second.innerHTML = sec;
        if (sec > 59) {
            min++;
            minute.innerHTML = min;
            sec = 0;
        }
        if (min > 59) {
            hour++;
            hours.innerHTML = hour;
            min = 0
        }
    }
}

const startButton = document.getElementById('startButton')

function handleTimer() {
    if (startButton.innerHTML === 'start') {
        if (pause) {
            pause = false;
        } else {
            interval = setInterval(timer, 1000)
        }
        startButton.innerHTML = 'pause'
    }
    else if (startButton.innerHTML === 'pause') {
        pause = true;
        startButton.innerHTML = 'start'
    }
}

function reset() {
    sec = 0;
    min = 0;
    hour = 0;
    second.innerHTML = sec;
    minute.innerHTML = min;
    hours.innerHTML = hour;
    pause = false;
    clearInterval(interval);
    startButton.innerHTML='start'
}






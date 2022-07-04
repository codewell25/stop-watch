const minDisplay = document.getElementById('min');
const secDisplay = document.getElementById('sec');
const milSecDisplay = document.getElementById('milisecond');


const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

//declearing and initializing variable
let milisecond = 0;
let seconds = 0;
let minutes = 0;

let myInterval;

//at start
minDisplay.innerText = '00';
secDisplay.innerText = '00';
milSecDisplay.innerText = '00';

//loads all the events
function eventLoader() {
    startBtn.addEventListener('click', watchStart)
    stopBtn.addEventListener('click', watchStop)
    resetBtn.addEventListener('click', watchReset)
}

eventLoader();


//setting the interval of 10 millisecond
//watchData function will be called after every 10 millisecons
function watchStart() {
    myInterval = setInterval(watchData, 10)
}

//incremeting as per conditions
function watchData() {
    //increamenting the value of millisecond
    milisecond++;

    //for output: 00
    if (milisecond <= 9) {
        milSecDisplay.innerText = '0' + milisecond
    }
    else {
        milSecDisplay.innerText = milisecond;
    }

    //incrementing the value of second and minuets
    if (milisecond > 99) {
        milSecDisplay.innerHTML = '00';
        seconds++;
        milisecond = 0;

        if (seconds <= 9) {
            secDisplay.innerText = '0' + seconds;
        }
        else {
            secDisplay.innerText = seconds
        }

    }

    if (seconds > 60) {
        secDisplay.innerText = '00';
        minutes++;

        seconds = 0;

        if (minutes <= 9) {
            minDisplay.innerText = '0' + minutes;
        }
        else {
            minDisplay.innerText = minutes;
        }

    }


}


//stoping the stopwatch by clearing the interval
function watchStop() {
    clearInterval(myInterval);
}

//reseting all the fields
function watchReset() {
    minDisplay.innerText = '00';
    secDisplay.innerText = '00';
    milSecDisplay.innerText = '00';

    watchStop();
}













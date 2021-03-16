'use strict';

let x;
let startstop = 0;
const startBtn = document.getElementById("start");

function startStop() {
  startstop = startstop + 1;

  if (startstop === 1) {
    start();
    startBtn.innerHTML = "Stop";
    startBtn.style.backgroundColor = "#E35F43"
  } else if (startstop === 2) {
    startBtn.innerHTML = "Start";
    startBtn.style.backgroundColor = "#42F24B";
    startstop = 0;
    stop();
  }
}

function start() {
  x = setInterval(timer, 10);
}

function stop() {
  clearInterval(x);
}

let ms = 0;
let sec = 0;
let min = 0;
let hour = 0;

let msOut = 0;
let secOut = 0;
let minOut = 0;
let hourOut = 0;

function timer() {
  msOut = checkTime(ms);
  secOut = checkTime(sec);
  minOut = checkTime(min);
  hourOut = checkTime(hour);

  ms = ++ms;
  
  if (ms === 100) {
    ms = 0;
    sec = ++sec;
  }
  
  if (sec === 60) {
    sec = 0;
    min = ++min;
  }
  
  if (min === 60) {
    min = 0;
    hour = ++hour;
  }
  
  document.getElementById("milisec").innerHTML = msOut;
  document.getElementById("second").innerHTML = secOut;
  document.getElementById("minute").innerHTML = minOut;
  document.getElementById("hour").innerHTML = hourOut;
}

function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

function reset() {
  ms = 0;
  sec = 0;
  min = 0;
  hour = 0;

  document.getElementById("milisec").innerHTML = '00';
  document.getElementById("second").innerHTML = '00';
  document.getElementById("minute").innerHTML = '00';
  document.getElementById("hour").innerHTML = '00';
}
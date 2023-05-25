const playButton = document.querySelector(".play");
const resetButton = document.querySelector(".reset");
const lapButton = document.querySelector(".lap");
const background = document.querySelector(".outer-circle");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const milliseconds = document.querySelector(".milliseconds");
const laps = document.querySelector(".laps");
const clearAllButton = document.querySelector(".lap-clear-button");

let isPlay = false;
let min;
let minCounter = 0;
let sec;
let secCounter = 0;
let msec;
let msecCounter = 0;
let lapId = 0;

const play = () => {
  if (!isPlay) {
    playButton.innerHTML = "Pause";
    background.classList.add("animation-background");
    msec = setInterval(() => {
      msecCounter++;
      if (msecCounter <= 9) {
        milliseconds.innerHTML = `:0${msecCounter}`;
      }
      if (msecCounter > 9) {
        milliseconds.innerHTML = `:${msecCounter}`;
      }
      if (msecCounter > 99) {
        msecCounter = 0;
        milliseconds.innerHTML = ":00";
      }
    }, 10);
    sec = setInterval(() => {
      secCounter++;
      if (secCounter <= 9) {
        seconds.innerHTML = `:0${secCounter}`;
      }
      if (secCounter > 9) {
        seconds.innerHTML = `:${secCounter}`;
      }
      if (secCounter === 60) {
        secCounter = 0;
        seconds.innerHTML = ":00";
      }
    }, 1000);
    min = setInterval(() => {
      minCounter++;
      if (minCounter <= 9) {
        minutes.innerHTML = `0${minCounter}`;
      }
      if (minCounter > 9) {
        minutes.innerHTML = minCounter;
      }
    }, 60000);
    isPlay = true;
  } else {
    playButton.innerHTML = "Play";
    background.classList.remove("animation-background");
    clearInterval(msec);
    clearInterval(sec);
    clearInterval(min);
    isPlay = false;
  }
  lapButton.classList.remove("hidden");
  resetButton.classList.remove("hidden");
};

const lap = () => {
  const li = document.createElement("li");
  const number = document.createElement("span");
  const timeStamp = document.createElement("span");
  li.setAttribute("class", "lap-item");
  number.setAttribute("class", "number");
  timeStamp.setAttribute("class", "time-stamp");
  number.innerHTML = `#${++lapId}`;
  timeStamp.innerHTML = `${minCounter}:${secCounter}:${msecCounter}`;
  li.append(number, timeStamp);
  laps.prepend(li);
  clearAllButton.classList.remove("hidden");
};

const clearAll = () => {
  laps.innerHTML = "";
  laps.append(clearAllButton);
  lapId = 0;
  clearAllButton.classList.add("hidden");
};

const reset = () => {
  isPlay = true;
  play();
  msecCounter = 0;
  secCounter = 0;
  minCounter = 0;
  milliseconds.innerHTML = ":00";
  seconds.innerHTML = ":00";
  minutes.innerHTML = "00";
  resetButton.classList.add("hidden");
  lapButton.classList.add("hidden");
  clearAll();
};

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
lapButton.addEventListener("click", lap);
clearAllButton.addEventListener("click", clearAll);

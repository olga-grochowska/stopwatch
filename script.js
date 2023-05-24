const playButton = document.querySelector(".play");
const resetButton = document.querySelector(".reset");
const lapButton = document.querySelector(".lap");
const background = document.querySelector(".outer-circle");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const milliseconds = document.querySelector(".milliseconds");

let isPlay = false;
let min;
let minCounter = 0;
let sec;
let secCounter = 0;
let msec;
let msecCounter = 0;

const toggleButton = () => {
  lapButton.classList.remove("hidden");
  resetButton.classList.remove("hidden");
};

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
  toggleButton();
};

playButton.addEventListener("click", play);

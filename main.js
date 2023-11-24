let [millisecond, seconds, minutes, hours] = [0, 0, 0, 0];

const timeRef = document.querySelector(".timer-display");

let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
  if (int !== null) {
    clearInterval();
  }

  int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", ()=>{
clearInterval(int)
})
document.getElementById("reset-timer").addEventListener("click", () => {

  clearInterval(int);
  [millisecond, seconds, minutes, hours] = [0, 0, 0, 0];
  timeRef.innerHTML = "00 : 00 : 00 : 000";

});

const displayTimer = () => {
  millisecond += 10;
  if (millisecond === 1000) {
    millisecond = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  // let h = hours < 10 ? "0" + hours : hours;
  let h;
  if (hours<10) {
    h="0" + hours
  }else{
    h=hours
  }
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  let ms =
    millisecond < 10
      ? "00" + millisecond
      : millisecond < 100
      ? "0" + millisecond
      : millisecond;

  timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms} `;
};

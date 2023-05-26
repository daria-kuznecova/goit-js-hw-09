function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let intervalId = null;

startBtn.addEventListener('click', () => {
  intervalId = setInterval(() => {
    let hexColor = getRandomHexColor();
    document.body.style.backgroundColor = hexColor;
  }, 1000);
  startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
});

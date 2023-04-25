const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.stopBtn.addEventListener('click', stopChangeColor);
refs.startBtn.addEventListener('click', startChangeColor);
let timerId = null;

function startChangeColor(event) {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  if (startChangeColor) {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
  }
}

function stopChangeColor() {
  clearInterval(timerId);
  if (stopChangeColor) {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

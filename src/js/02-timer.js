import flatpickr from 'flatpickr';
// import '/flatpickr/dist/flatpickr.min.css';
// import { Notify } from '/notiflix/build/notiflix-notify-aio';

const btnStart = document.querySelector('button[data-start]');
const input = document.querySelector('#datetime-picker');
const outputDays = document.querySelector('span[data-days]');
const outputHours = document.querySelector('span[data-hours]');
const outputMinutes = document.querySelector('span[data-minutes]');
const outputSeconds = document.querySelector('span[data-seconds]');

let intervalId = null;

btnStart.addEventListener('click', onClickBtn);
btnStart.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let selectedDate = selectedDates[0];
    btnStart.removeAttribute('disabled');
    if (selectedDate < new Date()) {
      btnStart.setAttribute('disabled', true);
      alert('Please choose a date in the future');
    }
  },
};

const setDate = flatpickr(input, options);

function onClickBtn() {
  input.setAttribute('disabled', true);
  btnStart.setAttribute('disabled', true);
  intervalId = setInterval(timeUpdate, 1000);
}

function timeUpdate() {
  let selectedDate = input._flatpickr.selectedDates[0];
  let timeDiffMs = selectedDate - new Date();
  let timeDiff = convertMs(timeDiffMs);

  if (timeDiffMs <= 0) {
    clearInterval(intervalId);
    return;
  }

  outputDays.textContent = timeDiff.days;
  outputHours.textContent = timeDiff.hours;
  outputMinutes.textContent = timeDiff.minutes;
  outputSeconds.textContent = timeDiff.seconds;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000));
console.log(convertMs(140000));
console.log(convertMs(24140000));

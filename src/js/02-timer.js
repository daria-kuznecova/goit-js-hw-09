import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
btnStart.disabled = true;
const timerValue = {
  days: document.querySelector('[data-days'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    console.log(new Date());

    if (selectedDates[0] <= Date.now()) {
      window.alert('Please choose a date in the future');
    } else {
      btnStart.disabled = false;
    }
  },
};

flatpickr(input, options);

btnStart.addEventListener('click', changeTimerValue);

function changeTimerValue() {
  timerId = setInterval(() => {
    const targetTime = new Date(input.value);
    const currentTime = Date.now();
    const ms = targetTime - currentTime;
    const convertTime = convertMs(ms);
    console.log(convertTime);
    updateClock(convertTime);

    if (ms <= 1000) {
      clearInterval(timerId);
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateClock({ days, hours, minutes, seconds }) {
  timerValue.days.textContent = addLeadingZero(days);
  timerValue.hours.textContent = addLeadingZero(hours);
  timerValue.minutes.textContent = addLeadingZero(minutes);
  timerValue.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(updateClock) {
  return String(updateClock).padStart(2, '0');
}

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

let timerId = null;
// const targetDate = new Date(input.value);
// const currentDataInMs = Date.now();
// const targetDateInMs = targetDate.getTime();
// const distanceToTargetDate = targetDateInMs - currentDataInMs;

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
      btnStart.addEventListener('click', () => {
        changeTimerValue(selectedDates[0]);
      });
    }
  },
};

flatpickr(input, options);

function changeTimerValue(selectedTime) {
  const timer = {
    start() {
      input.disabled = true;
      btnStart.disabled = true;

      const targetTime = selectedTime;
      timerId = setInterval(() => {
        const currentTime = Date.now();
        const ms = targetTime - currentTime;
        const convertTime = convertMs(ms);

        days = timerValue.days.value;
        hours = timerValue.hours.value;
        minutes = timerValue.minutes.valeu;
        seconds = timerValue.seconds.value;

        if (ms >= 0) {
          clearInterval(timerId);
        }

        return { days, hours, minutes, seconds };
      }, 1000);
    },
  };
  timer.start();
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

  document.getElementById('timer').innerHTML =
    '${days} days ${hours} hours ${minutes} minutes ${seconds} seconds';
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
// btnStart.addEventListener(
//   'click',
//   () => {
//     timerId = setInterval(() => {
//       input.innerText =
//         '${days} days ${hours} hours ${minutes} minutes ${seconds} seconds';
//     });
//   },
//   1000
// );

// setInterval(() => {
//   const targetDate = new Date('Jan 1, 2024 00:00:00');
//   const currentDataInMs = Date.now();
//   const targetDateInMs = targetDate.getTime();
//   const distanceToTargetDate = targetDateInMs - currentDataInMs;

//   function convertMs(distanceToTargetDate) {
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     // Remaining days
//     const days = Math.floor(distanceToTargetDate / day);
//     // Remaining hours
//     const hours = Math.floor((distanceToTargetDate % day) / hour);
//     // Remaining minutes
//     const minutes = Math.floor(((distanceToTargetDate % day) % hour) / minute);
//     // Remaining seconds
//     const seconds = Math.floor(
//       (((distanceToTargetDate % day) % hour) % minute) / second
//     );

//     return { days, hours, minutes, seconds };
//     input.innerText =
//       '${days} days ${hours} hours ${minutes} minutes ${seconds} seconds';
//   }
// }, 1000);

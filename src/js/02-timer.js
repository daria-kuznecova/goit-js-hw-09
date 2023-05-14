import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      window.alert('Please choose a date in the future');
      btnStart.disabled = true;
    } else {
      console.log(selectedDates[0]);
      btnStart.disabled = false;
    }
  },
};

flatpickr(input, options);

setInterval(() => {
  const targetDate = new Date('Jan 1, 2024 00:00:00');
  const currentDataInMs = Date.now();
  const targetDateInMs = targetDate.getTime();
  const distanceToTargetDate = targetDateInMs - currentDataInMs;

  function convertMs(distanceToTargetDate) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(distanceToTargetDate / day);
    // Remaining hours
    const hours = Math.floor((distanceToTargetDate % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((distanceToTargetDate % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor(
      (((distanceToTargetDate % day) % hour) % minute) / second
    );

    return { days, hours, minutes, seconds };
    input.innerText =
      '${days} days ${hours} hours ${minutes} minutes ${seconds} seconds';
  }
}, 1000);

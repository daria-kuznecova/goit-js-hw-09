// const inputDelay = document.querySelector('input[delay]');
// const inputStep = document.querySelector('input[step]');
// const inputAmount = document.querySelector('input[amount]');
// const submitBtn = document.querySelector('button');

const form = document.querySelector('.form');
const position = document.querySelector('input[amount]');

form.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSubmit(evt) {
  evt.preventDefault();
  form.disabled = true;
  for (i = 1; i <= position; i++) {
    const delay = input.delay.value + input.step.value * i;
    console.log(delay);
  }
}

promise
  .then(({ position, delay }) => {
    Notify.success(`Fulfilled promise ${position} in ${delay} ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`Rejected promise ${position} in ${delay} ms`);
  });

// const createPromise = (position, delay) => {
//   const promise = new Promise((resolve, reject) => {
//     const amount = 0;
//     const shouldResolve = Math.random() > 0.3;
//     for (i = 0; i <= amount; i++) {
//       amount++;
//       setInterval(() => {
//         if (shouldResolve) {
//           // Fulfill
//           resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
//         } else {
//           // Reject
//           reject(`❌ Rejected promise ${position} in ${delay}ms`);
//         }
//         console.log(promise);
//       }, 1000);
//     }
//   });
// };

// createPromise
//   .then((position, delay) => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   });

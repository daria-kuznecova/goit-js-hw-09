const form = document.querySelector('.form');
const inputDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const position = document.querySelector('input[name="amount"]');

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
  for (let i = 1; i <= position.value; i++) {
    const delay = Number(inputDelay.value) + Number(inputStep.value) * (i - 1);
    const promise = createPromise(i, delay);
    promise
      .then(({ position, delay }) => {
        console.log(`Fulfilled promise ${position} in ${delay} ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`Rejected promise ${position} in ${delay} ms`);
      });
    console.log(delay);
  }
}

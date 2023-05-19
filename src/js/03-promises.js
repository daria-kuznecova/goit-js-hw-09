// const inputDelay = document.querySelector('input[delay]');
// const inputStep = document.querySelector('input[step]');
// const inputAmount = document.querySelector('input[amount]');
// const submitBtn = document.querySelector('button');

const form = document.querySelector('.form');

const createPromise = (position, delay) => {
  const promise = new Promise((resolve, reject) => {
    const amount = 0;
    const shouldResolve = Math.random() > 0.3;
    for (i = 0; i <= amount; i++) {
      amount++;
      setInterval(() => {
        if (shouldResolve) {
          // Fulfill
          resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
        } else {
          // Reject
          reject(`❌ Rejected promise ${position} in ${delay}ms`);
        }
        console.log(promise);
      }, 1000);
    }
  });
};
form.addEventListener('submit', createPromise(position, delay));

createPromise
  .then((position, delay) => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  });

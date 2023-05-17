const inputDelay = document.querySelector('input[delay]');
const inputStep = document.querySelector('input[step]');
const inputAmount = document.querySelector('input[amount]');
const submitBtn = document.querySelector('button');

// const everyStep = inputDelay + inputStep * inputAmount;

// console.log(everyStep);

const createPromise = (position, delay) => {
  //   // const delay = everyStep;
  //   // const amount = 0;
  //   // if (let i = 0, i <= amount, i++) {

  //   // }
  //
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

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
  });
};
// submitBtn.addEventListener('click', createPromise);

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

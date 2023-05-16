const inputDelay = document.querySelector('input[delay]');
const inputStep = document.querySelector('input[step]');
const inputAmount = document.querySelector('input[amount]');
const submitBtn = document.querySelector('button');

const everyStep = inputDelay + inputStep * inputAmount;

console.log(everyStep);

submitBtn.addEventListener('click', createPromise);

const createPromise = (position, delay) => {
  const delay = everyStep;
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setInterval(() => {
      if (shouldResolve) {
        // Fulfill
      } else {
        // Reject
      }
    }, delay);
  });
};

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

const inputDelay = document.querySelector('input[delay]');
const inputStep = document.querySelector('input[step]');
const inputAmount = document.querySelector('input[amount]');
const submitBtn = document.querySelector('button');

const onClick = () => {
  const delay = inputAmount,
  
    
    setInterval(() => { },
      delay);
};

submitBtn.addEventListener('click', createPromise);

const createPromise = (position, delay) => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formSelector = document.querySelector('.form');

formSelector.addEventListener('submit', onSubmitForm);

function createPromise(position, delay) {
  const obj = { position, delay };
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(obj);
      } else {
        // Reject
        reject(obj);
      }
    }, delay);
  });
}

function onSubmitForm(event) {
  event.preventDefault();

  let delay = Number(formSelector.delay.value);

  for (let i = 1; i <= formSelector.amount.value; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delay += Number(formSelector.step.value);
  }
}

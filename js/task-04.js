const value = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

const incrementValue = () => value.textContent = `${Number(value.textContent) + 1}`;
const decrementValue = () => value.textContent -= 1;

decrement.addEventListener('click', decrementValue);
increment.addEventListener('click', incrementValue);
const input = document.querySelector('#name-input');
const nameLabel = document.querySelector('#name-output');

const onInputChange = (e) => {
 nameLabel.textContent = e.currentTarget.value;

 if (nameLabel.textContent === '') {
   return nameLabel.textContent = 'незнакомец';
 }
}

input.addEventListener('input', onInputChange);

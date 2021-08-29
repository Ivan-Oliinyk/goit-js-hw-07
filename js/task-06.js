const input = document.querySelector('#validation-input');

const changeColorBorderInput = () => {
  let valueLength = input.value.length;
  const valueDataAtribute = Number(input.getAttribute("data-length"));

  valueDataAtribute === valueLength ? addValideBorderColor() : addInavalidBorderColor();
}

function addValideBorderColor () {
  input.classList.remove('invalid');
  input.classList.add('valid');
}

function addInavalidBorderColor () {
  input.classList.remove('valid');
  input.classList.add('invalid');
}

input.addEventListener('change', changeColorBorderInput);



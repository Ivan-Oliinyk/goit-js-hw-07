const inputRange = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const changeFontSizeText = () => {
  let valueInput = inputRange.value;
  inputRange.min = 10;
  inputRange.max = 56;
  
  text.style.fontSize = `${valueInput}px`;
}

inputRange.addEventListener('input', changeFontSizeText);
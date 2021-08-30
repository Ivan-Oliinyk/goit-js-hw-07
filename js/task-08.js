const controls = {
  inputNumber: document.querySelector('#controls > input'),
  btnCreate: document.querySelector('#controls > [data-action="render"]'),
  btnRemove: document.querySelector('#controls > [data-action="destroy"]'),
};

const boxesWrapper = document.querySelector('#boxes');
boxesWrapper.style.display = 'flex';
boxesWrapper.style.flexWrap = 'wrap';
boxesWrapper.style.alignItems = 'center';

function createBoxes() {
  let amount =  Number(controls.inputNumber.value);
  let arrOfDiv = [];
  
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.style.width = `${i*10 + 10}px`;
    newDiv.style.height = `${i*10 + 10}px`;
    newDiv.style.backgroundColor = randomColorRGB();
    newDiv.style.margin = '5px';
   
    arrOfDiv.push(newDiv);
  }

  boxesWrapper.prepend(...arrOfDiv);
}

function destroyBoxes() {
  boxesWrapper.innerHTML = '';
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomColorRGB () {
  return `rgb(${getRandomNumber(0, 256)}, ${getRandomNumber(0, 256)}, ${getRandomNumber(0, 256)})`;
}

controls.btnRemove.addEventListener('click', destroyBoxes);
controls.btnCreate.addEventListener('click', createBoxes);











  







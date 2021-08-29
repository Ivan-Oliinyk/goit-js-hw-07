const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const elements = [];

ingredients.map(element => {
  const elementLi = document.createElement('li');
  elementLi.textContent = element;
  
  elements.push(elementLi);
})

const listIngredients = document.querySelector('#ingredients');
listIngredients.prepend(...elements);





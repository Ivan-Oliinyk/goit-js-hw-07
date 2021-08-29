const items = document.querySelectorAll('#categories > li.item');

items.forEach(item => {
  const itemHeader = item.querySelector("h2").textContent;
  const categoryLength = item.querySelector("ul").children.length;

  console.log(`Категория: ${itemHeader}`);
  console.log(`Количество элементов: ${categoryLength}`);
})
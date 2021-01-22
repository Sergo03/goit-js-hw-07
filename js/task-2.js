const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const listRef = ingredients.map(text => {
    const list = document.createElement('li');
    list.textContent = text;
    return list;
});


const elemRef = document.querySelector('#ingredients');
elemRef.append(...listRef);

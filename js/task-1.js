const elemRef = document.querySelector('#categories');
console.log(`В списке ${elemRef.children.length} категории.`);

const itemRef = document.querySelectorAll('.item');

itemRef.forEach(item => console.log(`Категория:${item.firstElementChild.textContent}
Количество элементов:${item.lastElementChild.children.length}`));




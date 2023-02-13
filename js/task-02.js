// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const list = document.querySelector("#ingredients");

// const firstItem = document.createElement("li");
// firstItem.textContent = 'Potatoes';
// firstItem.classList.add("item");


// const secondItem = document.createElement("li");
// secondItem.textContent = 'Mushrooms';
// secondItem.classList.add("item");

// const thirdItem = document.createElement("li");
// thirdItem.textContent = 'Garlic';
// thirdItem.classList.add("item");

// const fourthItem = document.createElement("li");
// fourthItem.textContent = 'Tomatos';
// fourthItem.classList.add("item");

// const fifthItem = document.createElement("li");
// fifthItem.textContent = 'Herbs';
// fifthItem.classList.add("item");

// const lastItem = document.createElement("li");
// lastItem.textContent = 'Condiments';
// lastItem.classList.add("item");


// list.append(firstItem, secondItem, thirdItem, fourthItem, fifthItem, lastItem)


const listElements = [];
const itemElem = document.querySelector("#ingredients");
for (const ingredient of ingredients) {
  const listElem = document.createElement("li");
  listElem.textContent = ingredient;
  listElem.classList.add("item");
  listElements.push(listElem);
}
itemElem.append(...listElements);

// Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
// проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// const validationInput{
//   static border 3px solid #bdbdbd,
// }

// const validationInputValid {
//   borderColor = "#4caf50"
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }



const inputElem = document.querySelector('input');

const borderRemove = (event) => {
 let inputText = event.currentTarget.value;

 inputText.length !== Number(inputElem.dataset.length)
   ? inputElem.classList.add("invalid")
   : inputElem.classList.remove("invalid") || inputElem.classList.add('valid');
}
inputElem.addEventListener("blur", borderRemove);
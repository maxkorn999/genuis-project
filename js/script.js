import { changeColour } from './helper.js';

document.querySelector('#one').onclick = changeColour;


// input field
const numRef = document.querySelector('input[type="number"]');
// console.log(numRef);


const btnRef = document.querySelector('button');
btnRef.addEventListener('click', () => console.log(numRef.value));


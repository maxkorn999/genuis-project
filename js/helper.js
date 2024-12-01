import { words } from './words.js';

// coloring func
let changed = true;
const initialBackgroundColor = window.getComputedStyle(document.body).backgroundColor;

export function changeColour() { 
    if (changed) {
        this.style.background = "red";
    } else { 
        this.style.background = initialBackgroundColor;
    }

    changed = !changed; // <== important
}

// random words func

export function getRandomWords() { 
  // Отримуємо введене користувачем число
  const count = parseInt(document.querySelector("[placeholder='enter number']").value, 10);

  // Перевіряємо, чи це валідне число
  if (isNaN(count) || count <= 0) {
    return document.getElementById("output").innerHTML = "<h4>result:</h4><li>please enter a valid positive number</li>";
  }

  // Перетворюємо об'єкт на масив пар [ключ, значення]
    const wordPairs = Object.entries(words);
    console.log(wordPairs);

  // Генеруємо випадкові унікальні пари
  const randomPairs = [];
  const usedIndices = new Set();

  while (randomPairs.length < count && randomPairs.length < wordPairs.length) {
    const randomIndex = Math.floor(Math.random() * wordPairs.length);

    // Перевіряємо, чи цей індекс вже використаний
    if (!usedIndices.has(randomIndex)) {
      randomPairs.push(wordPairs[randomIndex]);
      usedIndices.add(randomIndex);
    }
  }

  // Формуємо список результатів
  const output = document.getElementById("output");
  output.innerHTML = "<h4>result:</h4>";
  output.innerHTML += randomPairs
    .map(([english, ukrainian]) => `<li>${english} - ${ukrainian}</li>`)
    .join("");
}
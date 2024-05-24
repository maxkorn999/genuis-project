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
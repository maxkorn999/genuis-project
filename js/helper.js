// coloring func
let isGreen = true;

export function changeColour() { 
    if (isGreen) {
        this.style.background = "red";
    }
    else { 
        this.style.background = "white";
    }
    isGreen = !isGreen; // <== important
}
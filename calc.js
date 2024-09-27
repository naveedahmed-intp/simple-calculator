let container = document.querySelector("#buttons");
let btnArray = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "x", "=", "AC", "0", "/"];
let classArray = ["n", "n", "n", "add", "n", "n", "n", "minus", "n", "n", "n", "multiply", "eq", "ac", "n", "dvd"];
let display = document.querySelector("#display");

window.addEventListener('load', () => {
    let defaultGridSize = 4;
    makeGrid(defaultGridSize);
});
function makeGrid(size) {
    if (size > 0 && size <= 100) {
        for(let i = 0; i < Math.pow(size, 2); i++) {
            let btn = document.createElement("button");
            btn.setAttribute("class", `button ${classArray[i]}`);
            btn.id = btnArray[i];
            btn.style.padding = 20 + "px";
            btn.style.backgroundColor = "white";
            btn.textContent = btnArray[i];
            container.appendChild(btn);
        }
    }
}
let number = "", res = 0, temp = 0;

container.addEventListener('click', (e) => {
    if(e.target.classList.contains("n")) {
        number += e.target.id;
        display.textContent = number;
    }

    if(e.target.classList.contains("ac")) {
        display.textContent = "";
        number = "";
        res = 0;
        temp = 0;
    }

    if(e.target.classList.contains("add")) {
        temp = parseInt(number);
        res += temp;
        number = "";
        display.textContent = res;
    }
})
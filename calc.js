let container = document.querySelector("#buttons");
let idArray = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "x", "=", "AC", "0", "/"];
let classArray = ["n", "n", "n", "add", "n", "n", "n", "minus", "n", "n", "n", "multiply", "eq", "ac", "n", "dvd"];
let display = document.querySelector("#display");
const audio = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3");

function playSound() {
    audio.play();
}

window.addEventListener('load', () => {
    let defaultGridSize = 4;
    makeGrid(defaultGridSize);
});
function makeGrid(size) {
    if (size > 0 && size <= 100) {
        for(let i = 0; i < Math.pow(size, 2); i++) {
            let btn = document.createElement("button");
            btn.setAttribute("class", `button ${classArray[i]}`);
            btn.id = idArray[i];
            btn.style.padding = 20 + "px";
            btn.style.backgroundColor = "white";
            btn.textContent = idArray[i];
            container.appendChild(btn);
        }
    }
}
let firstNumber = "", secondNumber = "", res = 0, operator = "";

container.addEventListener('click', (e) => {
        playSound();
        if (operator == "") {
            if(e.target.classList.contains("n")) {
                firstNumber += e.target.id;
                display.textContent = firstNumber;
            }
        }
        if((e.target.classList.contains("add") || e.target.classList.contains("minus") || e.target.classList.contains("multiply") || e.target.classList.contains("dvd")) && (secondNumber == "" || firstNumber == res)) {
            operator = e.target.id;
            display.textContent = firstNumber + " " + operator;
        }
        if((operator == "+" || operator == "-" || operator == "x" || operator == "/") && e.target.classList.contains("n")) {
                secondNumber += e.target.id;
                display.textContent = firstNumber + " " + operator + " " + secondNumber;
            }

        if(e.target.classList.contains("eq")) {
            switch(operator) {
                case '+':
                res = parseInt(firstNumber) + parseInt(secondNumber);
                display.textContent = firstNumber + " " + operator + " " + secondNumber + " = " + res;
                firstNumber = res;
                secondNumber = "";
                break;
                case '-':
                res = parseInt(firstNumber) - parseInt(secondNumber);
                display.textContent = firstNumber + " " + operator + " " + secondNumber + " = " + res;
                firstNumber = res;
                secondNumber = "";
                break;
                case 'x':
                res = parseInt(firstNumber) * parseInt(secondNumber);
                display.textContent = firstNumber + " " + operator + " " + secondNumber + " = " + res;
                firstNumber = res;
                secondNumber = "";
                break;
                case '/':
                res = Math.round(parseInt(firstNumber) / parseInt(secondNumber)*100)/100;
                display.textContent = firstNumber + " " + operator + " " + secondNumber + " = " + res;
                firstNumber = res;
                secondNumber = "";
                break;
            }
        }

        if(e.target.classList.contains("ac")) {
            display.textContent = "";
            reset();
        }
        
    });

    function reset() {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        res = 0;
    }

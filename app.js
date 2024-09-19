//1.CREATE FUNCTIONS for items; add, subtract, multiply, divide. Test in console.

//GLOBAL VARIABLES
let operator = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){
    //STORE all components on HTML in JS
    let clear = document.querySelector(".clear");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let currentDisplay = document.querySelector(".display");
    
    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentDisplay.textContent = currentValue;
    }))

})

function handleNumber(num) {
    currentValue += number;

}
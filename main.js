const digit = document.querySelectorAll('.digit')
const operator = document.querySelectorAll('.operator')
const display = document.querySelector('#display')
const clear = document.querySelectorAll('#clear')
const del = document.querySelectorAll('#delete')
const equals = document.querySelectorAll('#equals')
const dot = document.querySelectorAll('#dot')

let firstNum = '';
let secondNum = '';
let operation = null;
let resetScreen = false;

// sets up the second number and clears screen if there is a 0 or if reset screen is true
//whatever is in the html for the corresponding button will become the display text
digit.forEach(digit => {
     digit.addEventListener('click', function(){
        if(display.textContent === '0' || resetScreen) reset();
        display.textContent += digit.innerHTML;
        secondNum = Number(display.textContent)
        secondNum = Number(secondNum)
        // console.log(secondNum)
        
    })
})

//inputs the operator for the math problem. a number followed by the operator becomes the first number
//will reset screen if the operator or a number is clicked on
operator.forEach(operator => {
    operator.addEventListener('click', function(){
        firstNum += Number(display.textContent)
        firstNum = Number(firstNum)
        display.textContent = operator.innerHTML;
        operation = display.textContent
        resetScreen = true
        
        
        // console.log(operation)
        // console.log(typeof firstNum)
        // console.log(typeof secondNum)
    })
})

// clears the display and gets rid of the memory for the values
clear.forEach(clear => {
    clear.addEventListener('click', function(){
        display.textContent = '0'
        firstNum = ''
        secondNum = ''
        operation = null;
    }) 
    
})

//will convert the values in the display to a string and delete the lead number
//value after slicing will become the new value for second number and turned into a number data type
del.forEach(del => {
    del.addEventListener('click', function(){
        display.textContent = display.textContent.toString().slice(0,-1);
        secondNum = Number(display.textContent)
    }) 
    
    
})

//if there is an operator after the second number value, the current operation will be solved and become 
//the first number value replacing the old first num value
//the display will update and show the answer when equal is pressed on and will be rounded to avoid 
//long string numbers
equals.forEach(equals => {
    equals.addEventListener('click', function(){
        if(operation !== null) operate(operation, firstNum, secondNum);
        display.textContent = roundNum(operate(operation, firstNum, secondNum))
        console.log(secondNum)
        console.log(operation, firstNum, secondNum)
    }) 
    
})

//will reset screen if needed
//if the display is empty and dot is clicked, 0 will show on the display to add a dot somewhere
//if there is a number then '.' will be added to the number to make a decimal
dot.forEach(dot => {
    dot.addEventListener('click', function(){
        if(resetScreen) reset();
        if(display.textContent === '') display.textContent = '0'
        if(display.textContent.includes('.')) return;
        display.textContent += '.'
    })
})

//resets the display
function reset(){
    display.textContent = '';
    resetScreen = false;
}

//round the number to the nearest hundredth
function roundNum(number){
    return Math.round(number * 1000) / 1000;
}


// math functions to solve problems
//divide has an if statement to make sure user cannot divide by 0
function add(a, b){
    return parseFloat(a) + parseFloat(b)
}

function subtract(a, b){
    return parseFloat(a) - parseFloat(b)
}

function multiply(a, b){
    return parseFloat(a) * parseFloat(b)
}

function divide(a, b){
    if(parseFloat(b) === 0){
        return 'Not divisible'
    } return parseFloat(a) / parseFloat(b)
}


//operate function that will solve using the math functions and values from event listeners
function operate(operator,a,b){
    a = Number(a)
    b = Number(b)
    if(operator === '+'){
        return add(a,b)
    } else if(operator === '-'){
        return subtract(a,b)
    } else if(operator === 'x'){
        return multiply(a,b)
    }else if(operator === '/'){
        return divide(a,b)
    };
    
    
    
}



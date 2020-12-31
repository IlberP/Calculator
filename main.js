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


digit.forEach(digit => {
     digit.addEventListener('click', function(){
        if(display.textContent === '0' || resetScreen) reset();
        display.textContent += digit.innerHTML;
        secondNum = Number(display.textContent)
        secondNum = Number(secondNum)
        console.log(secondNum)
        
    })
})

operator.forEach(operator => {
    operator.addEventListener('click', function(){
        firstNum += Number(display.textContent)
        firstNum = Number(firstNum)
        display.textContent = operator.innerHTML;
        operation = display.textContent
        resetScreen = true
        
        
        console.log(operation)
        console.log(typeof firstNum)
        console.log(typeof secondNum)
    })
})

clear.forEach(clear => {
    clear.addEventListener('click', function(){
        display.textContent = '0'
        firstNum = ''
        secondNum = ''
        operation = null;
    }) 
    
})

del.forEach(del => {
    del.addEventListener('click', function(){
        display.textContent = display.textContent.toString().slice(0,-1);
        secondNum = Number(display.textContent)
    }) 
    
    
})

equals.forEach(equals => {
    equals.addEventListener('click', function(){
        if(operation !== null) operate(operation, firstNum, secondNum);
        display.textContent = roundNum(operate(operation, firstNum, secondNum))
        console.log(secondNum)
        console.log(operation, firstNum, secondNum)
    }) 
    
})

dot.forEach(dot => {
    dot.addEventListener('click', function(){
        if(resetScreen) reset();
        if(display.textContent === '') display.textContent = '0'
        if(display.textContent.includes('.')) return;
        display.textContent += '.'
    })
})


function reset(){
    display.textContent = '';
    resetScreen = false;
}

function roundNum(number){
    return Math.round(number * 1000) / 1000;
}



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



document.querySelector('#add').addEventListener('click', add);
document.querySelector('#subtract').addEventListener('click', subtract);
document.querySelector('#multiply').addEventListener('click', multiply);
document.querySelector('#divide').addEventListener('click', divide);
document.querySelector('#equals').addEventListener('click', equals);
document.querySelector('#balance').addEventListener('click', balance);
document.querySelector('#deposit').addEventListener('click', deposit);
document.querySelector('#withdraw').addEventListener('click', withdraw);
document.querySelector('#clear').addEventListener('click', clear);

// need to handle register overflow
// need to shorten long decimals to 2 places
// need to handle divide by zero, other errors

let inputMode = false;
let operator = '';
let register = '0';
let memory = 0;
let drawer = 0;

function calculator() {
    if (operator === ''){
        memory = parseInt(register);
    } else if (operator === 'add'){
        memory = memory + parseInt(register);
    } else if (operator === 'subtract'){
        memory = memory - parseInt(register);
    } else if (operator === 'multiply'){
        memory = memory * parseInt(register);
    } else if (operator === 'divide'){
        memory = memory / parseInt(register);
    };
    display.innerHTML = memory;
    return;
};

function clear(){
    inputMode = false;
    operator = '';
    register = '0';
    memory = 0;
    display.innerHTML = register;
};


function add() {
    inputMode = false;
    operator = 'add';
    calculator();
    console.log(operator);
    return;
};

function subtract() {
    inputMode = false;
    operator = 'subtract';
    calculator();
    console.log(operator);
    return;
};

function multiply() {
    inputMode = false;
    operator = 'multiply';
    calculator();
    console.log(operator);
    return;
};

function divide() {
    inputMode = false;
    operator = 'divide';
    calculator();
    console.log(operator);
    return;
};

function equals() {
    inputMode = false;
    calculator();
    console.log(operator);
    return;
}

/* Balance
    - Displays the balance in the drawer
*/

function balance(){
    inputMode = false;
    operator = '';
    register = drawer;
    display.innerHTML = register;
    return;
};

/* Deposit
    - Adds the displayed value to the drawer and clears the display
*/

function deposit(){
    inputMode = false;
    operator = '';
    drawer = drawer + parseInt(register);
    register = '0';
    display.innerHTML = register;
    return;
};

/* Withdraw
    - Subtracts the displayed value from the drawer and clears the display
*/

function withdraw(){
    inputMode = false;
    operator = '';
    if (parseInt(register) > drawer) {
        register = 'NO CAN DO';
    } else {
        drawer = drawer - parseInt(register);
        register = '0';
    }
    display.innerHTML = register;
    return;
};

// return {
//     add: add,
//     subtract: subtract,
//     multiply: multiply,
//     divide: divide,
//     equals: equals,
//     clear: clear,
//     balance: balance,
//     deposit: deposit,
//     withdraw: withdraw
//     };
// })();

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
// need to handle floating point errors

// 3 . 3 + + + should produce '9.9', instead it produces '9.899999999999999'
// two problems:


let inputMode = false;
let operator = '';
let register = '0';
let memory = undefined;
let drawer = 0;

function calculator() {
    inputMode = false;

    // NO OPERATOR OR NO MEMORY
    if (operator === '' || memory === undefined) {
        memory = parseFloat(register);

    // ADD
    } else if (operator === 'add') {
        memory = memory + parseFloat(register);
        display.innerHTML = Math.round(memory * 100) / 100;

    // SUBTRACT
    } else if (operator === 'subtract') {
        memory = memory - parseFloat(register);
        display.innerHTML = Math.round(memory * 100) / 100;

    // MULTIPLY
    } else if (operator === 'multiply') {
        memory = memory * parseFloat(register);
        display.innerHTML = Math.round(memory * 100) / 100;

    // DIVIDE
    } else if (operator === 'divide') {

        // DIVIDE BY ZERO
        if (parseFloat(register) == 0) {
            register = 'ERR DIV 0';
            display.innerHTML = register;
            return;
        }

        memory = memory / parseFloat(register);
        display.innerHTML = Math.round(memory * 100) / 100;
    };
    return;
};

function clear(){
    key = 'clear';
    inputMode = false;
    register = '0';
    memory = undefined;
    display.innerHTML = register;
    operator = '';
    return;
};

function add() {

    // AFTER EQUALS
    if (key === 'equals') {
        key = 'add';
        operator = key;
        return;
    }

    key = 'add';
    calculator();
    operator = key;
    return;
};

function subtract() {

    // AFTER EQUALS
    if (key === 'equals') {
        key = 'subtract';
        operator = key;
        return;
    }
    
    key = 'subtract';
    calculator();
    operator = key;
    return;
};

function multiply() {

    // AFTER EQUALS
    if (key === 'equals') {
        key = 'multiply';
        operator = key;
        return;
    }

    key = 'multiply';
    calculator();
    operator = key;
    return;
};

function divide() {

    // AFTER EQUALS
    if (key === 'equals') {
        key = 'divide';
        operator = key;
        return;
    }

    key = 'divide';
    calculator();
    operator = key;
    return;
};

function equals() {
    key = 'equals';
    calculator();
    return;
}

/* Balance
    - Displays the balance in the drawer
*/

function balance(){
    key = 'balance';
    inputMode = false;
    operator = '';
    memory = drawer;
    display.innerHTML = Math.round(memory * 100) / 100;
    return;
};

/* Deposit
    - Adds the displayed value to the drawer and clears the display
*/

function deposit(){
    key = 'deposit';
    inputMode = false;
    operator = 'add';
    drawer = drawer + parseFloat(register);
    register = '0';
    display.innerHTML = register;
    return;
};

/* Withdraw
    - Subtracts the displayed value from the drawer and clears the display
*/

function withdraw(){
    key = 'withdraw';
    inputMode = false;
    operator = 'subtract';
    if (parseFloat(register) > drawer) {
        register = 'NO CAN DO';
    } else {
        drawer = drawer - parseFloat(register);
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

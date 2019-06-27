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
let memory = undefined;
let drawer = 0;

/*
1   |   1   <-  Displays input (1)
2   |  12   <-  Displays input (12)
-   |  12   <-  Sets operator to subtract,
                does not operate (because nothing in memory),
                still displays input (12), 
                copies input into memory
7   |   7   <-  Displays input (7)
-   |   5   <-  Sets operator to subtract,
                operates on memory and input (12 - 7 = 5),
                displays result (5),
                copies result to memory
3   |   3   <-  Displays input (3),
-   |   2   <-  Sets operator to subtract,
                operates on memory and input (5 - 3 = 2),
                displays result (2),
                copies result to memory

2   <-  register = 2
        memory = undefined
        operator = ''
        inputMode = true
=   <-  register = 2
        memory = 2
        operator = ''
        inputMode = false
/   <-  register = 2 -> 1
        memory = 2 -> 1
        operator = divide
        inputMode = false

2 / 3 
2 = /

Should: 
2   |   2   <-  Displays input (2)
=   |   2   <-  Does not set operator (because equals),
                does not operate (because no operator),
                still displays input (2),
                copies input into memory
/   |   2   <-  Sets operator to divide,
                does not operate (because why?),
                displays input (2),
                copy input to memory
3   |   3   <-  Displays input (3)
/   |   0.66666667 <-  Sets operator to divide,
                operates on memory and input (2 / 3 = 0.66666667),
                displays result (0.66666667),
                copies result to memory

Instead I get:
2   |   2   <-  Displays input (2)
=   |   2   <-  Does not set operator (because equals),
                does not operate (because no operator),
                still displays input (2),
                copies input into memory
/   |   1   <-  Sets operator to divide,
                operates on memory and input (2 / 2 = 1), <- how do I prevent operation?
                displays result (1),
                copies result to memory



*/

function calculator() {

    // NO OPERATOR OR NO MEMORY
    if (operator === '' || memory === undefined) {
        memory = parseInt(register);

    // ADD
    } else if (operator === 'add') {
        memory = memory + parseInt(register);
        display.innerHTML = memory;

    // SUBTRACT
    } else if (operator === 'subtract') {
        memory = memory - parseInt(register);
        display.innerHTML = memory;

    // MULTIPLY
    } else if (operator === 'multiply') {
        memory = memory * parseInt(register);
        display.innerHTML = memory;

    // DIVIDE
    } else if (operator === 'divide') {

        // DIVIDE BY ZERO
        if (parseInt(register) == 0) {
            register = 'ERR DIV 0';
            display.innerHTML = register;
            return;
        }

        memory = memory / parseInt(register);
        display.innerHTML = memory;
    };
    return;
};

function clear(){
    inputMode = false;
    operator = '';
    register = '0';
    memory = undefined;
    display.innerHTML = register;
    return;
};

function add() {
    inputMode = false;
    calculator();
    operator = 'add';
    return;
};

function subtract() {
    inputMode = false;
    calculator();
    operator = 'subtract';
    return;
};

function multiply() {
    inputMode = false;
    calculator();
    operator = 'multiply';
    return;
};

function divide() {
    inputMode = false;
    calculator();
    operator = 'divide';
    return;
};

function equals() {
    inputMode = false;
    calculator();
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

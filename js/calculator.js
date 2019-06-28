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

/* When selecting an operator AFTER equals, it should change the operator but not operate with the previous operator

1   |   1   <-  Displays input (1)
+   |   1   <-  Does not operate (no operator)
                Sets operator to add
                Copies input into memory
                Displays memory (1)
2   |   2   <-  Displays input (2)
+   |   3   <-  Operates on memory and input due to preexisting add operator (1 + 2 = 3)
                Sets operator to add
                Copies result into memory
                Displays memory (3)
3   |   3   <-  Displays input (3)
=   |   6   <-  Operates on memory and input due to preexisting add operator (3 + 3 = 6)
                Preserves operator (add)
                Copies result into memory
                Displays memory (6)
=   |   9   <-  Operates on memory and input due to preexisting add operator (6 + 3 = 9)
                Preserves operator (add)
                Copies result into memory
                Displays memory (9)
/   |   9   <-  Operates on memory and input due to preexisting add operator (9 + 3 = 12)
                Sets operator to divide
                Copies result into memory
                Displays memory (12)
                
                Should not operate
                Should set operator to divide
                Should preserve memory
                Should preserve display (9)

Expecteds:
1 + 2 + 3 = = / -> 9   (should not get 12 but continue to display 9, with the operator set to divide)    
1 + 2 + 3 + +   -> 9
1 + 2 + 3 = +   -> 6   (primed with plus)    
1 + 2 + 3 / 2 = -> 3
2 = /           -> 2
2 + 2 + 2 +     -> 6

When I hit plus plus plus, the last inputted value should be added to the memory repeatedly
When I hit plus equals equals, the last inputted value should be added to the memory repeatedly
When I hit plus plus divide, the divide key should add and set the operator to divide
When I hit plus equals divide, divide should not repeat the last inputted value but wait for a new value

*/

function calculator() {
    inputMode = false;

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
    register = drawer;
    display.innerHTML = register;
    return;
};

/* Deposit
    - Adds the displayed value to the drawer and clears the display
*/

function deposit(){
    key = 'deposit';
    inputMode = false;
    operator = 'add';
    drawer = drawer + parseInt(register);
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

let register = (function(){
    let stored = 0;
    let drawer = 0;

/* Add
    - Clears the display but not the stored value, adds the displayed and stored values when the next operator is pressed
*/

function add(){
    // need to handle register overflow
    operator = 'add';
    register = stored + register;
    stored = register;
    return register;
};

/* Subtract
    - Clears the display but not the stored value, subtracts the displayed value from the stored value and displays the result when the next operator is pressed
*/

function subtract(){
    // need to handle register overflow
    operator = 'subtract';
    register = stored - register;
    stored = register;
    return register;
};

/* Multiply
    - Clears the display but not the stored value, multiplies the displayed value by the stored value and displays the result when the next operator is pressed
*/

function multiply(){
    // need to handle register overflow
    // need to handle long decimals
    operator = 'multiply';
    register = stored * register;
    stored = register;
    return register;
};

/* Divide
    - Clears the display but not the stored value, divides the stored value by the displayed value and displays the result when the next operator is pressed
*/

function divide(){
    // need to handle register overflow
    // need to handle long decimals
    operator = 'divide';
    register = stored / register;
    stored = register;
    return register;
};

/* Equals
    - Performs the stored operation from when the last operator was pressed
*/

function equals(){
    if (operator === 'add'){
        // call add()
    }
    if (operator === 'subtract'){
        // call subtract()
    }
    if (operator === 'multiply'){
        // call multiply()
    }
    if (operator === 'divide'){
        // call divide()
    }
    return register;
};

/* Clear
    - Clears the display
*/

function clear(){
    operator = 'clear';
    register = 0;
    return register;
};

/* Balance
    - Displays the balance in the drawer
*/

function balance(){
    operator = 'balance';
    register = drawer;
    return register;
};

/* Deposit
    - Adds the displayed value to the drawer and clears the display
*/

function deposit(){
    operator = 'deposit';
    drawer = drawer + register;
    register = 0;
    return register;
};

/* Withdraw
    - Subtracts the displayed value from the drawer and clears the display
*/

function withdraw(){
    operator = 'withdraw';
    drawer = stored - register;
    register = 0;
    return register;
};

return {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    equals: equals,
    clear: clear,
    balance: balance,
    deposit: deposit,
    withdraw: withdraw
    };
})();

document.querySelector('#one').addEventListener('click', one);
document.querySelector('#two').addEventListener('click', two);
document.querySelector('#three').addEventListener('click', three);
document.querySelector('#four').addEventListener('click', four);
document.querySelector('#five').addEventListener('click', five);
document.querySelector('#six').addEventListener('click', six);
document.querySelector('#seven').addEventListener('click', seven);
document.querySelector('#eight').addEventListener('click', eight);
document.querySelector('#nine').addEventListener('click', nine);
document.querySelector('#zero').addEventListener('click', zero);
document.querySelector('#doubleZero').addEventListener('click', doubleZero);
document.querySelector('#decimal').addEventListener('click', decimal);

// need to limit decimal places to 2

//let display = (function(){

    // if mode is not input (default state, +, -, *, /, =, Clear, Balance, Deposit, Withdraw was just pressed)
    // OR if register is '0'
    //    clear register
    //    set mode to input
    //    assign key value
    //    update display
    //
    // if register is full
    //    ignore key press
    //
    // otherwise
    //    append key value to register
    //    update display

    function one(){
        if (inputMode === false || register === '0') {
            inputMode = true;
            register = '1';
            display.innerHTML = register;
            return;
        } else if (register.length > 9) {
            return;
        } else {
            register += '1';
            display.innerHTML = register;
            return;
        }
    };

    function two(){
        if (inputMode === false || register === '0') {
            inputMode = true;
            register = '2';
            display.innerHTML = register;
            return;
        } else if (register.length > 9) {
            return;
        } else {
            register += '2';
            display.innerHTML = register;
            return;
        }
    };

    function three(){
        if (inputMode === false || register === '0') {
            inputMode = true;
            register = '3';
            display.innerHTML = register;
            return;
        } else if (register.length > 9) {
            return;
        } else {
            register += '3';
            display.innerHTML = register;
            return;
        }
    };

    function four(){
        if (inputMode === false || register === '0') {
            inputMode = true;
            register = '4';
            display.innerHTML = register;
            return;
        } else if (register.length > 9) {
            return;
        } else {
            register += '4';
            display.innerHTML = register;
            return;
        }
    };

    function five(){
        if (inputMode === false || register === '0') {
            inputMode = true;
            register = '5';
            display.innerHTML = register;
            return;
        } else if (register.length > 9) {
            return;
        } else {
            register += '5';
            display.innerHTML = register;
            return;
        }
    };

    function six(){
        if (inputMode === false || register === '0') {
            inputMode = true;
            register = '6';
            display.innerHTML = register;
            return;
        } else if (register.length > 9) {
            return;
        } else {
            register += '6';
            display.innerHTML = register;
            return;
        }
    };

    function seven(){
        if (inputMode === false || register === '0') {
            inputMode = true;
            register = '7';
            display.innerHTML = register;
            return;
        } else if (register.length > 9) {
            return;
        } else {
            register += '7';
            display.innerHTML = register;
            return;
        }
    };

    function eight(){
        if (inputMode === false || register === '0') {
            inputMode = true;
            register = '8';
            display.innerHTML = register;
            return;
        } else if (register.length > 9) {
            return;
        } else {
            register += '8';
            display.innerHTML = register;
            return;
        }
    };

    function nine(){
        if (inputMode === false || register === '0') {
            inputMode = true;
            register = '9';
            display.innerHTML = register;
            return;
        } else if (register.length > 9) {
            return;
        } else {
            register += '9';
            display.innerHTML = register;
            return;
        }
    };

    function zero(){
        if (inputMode === false || register === '0') {
            inputMode = true;
            register = '0';
            display.innerHTML = register;
            return;
        } else if (register.length > 9) {
            return;
        } else {
            register += '0';
            display.innerHTML = register;
            return;
        }
    };

    // if register is '0', do nothing
    // if register is almost full, do nothing

    function doubleZero(){
        if (inputMode === false || register === '0') {
            inputMode = true;
            register = '0';
            display.innerHTML = register;
            return;
        } else if (register.length > 8) {
            return;
        } else {
            register += '00';
            display.innerHTML = register;
            return;
        }
    };

    // if decimal exists in register, do nothing

    function decimal(){
        if (inputMode === false || register === '0') {
            inputMode = true;
            register = '0.';
            display.innerHTML = register;
            return;
        } else if (register.length > 9 || register.includes('.')) {
            return;
        } else {
            register += '.';
            display.innerHTML = register;
            return;
        }
    };

//     return {
//         one: one,
//         two: two,
//         three: three,
//         four: four,
//         five: five,
//         six: six,
//         seven: seven,
//         eight: eight,
//         nine: nine,
//         zero: zero,
//         doubleZero: doubleZero,
//         decimal: decimal,
//         add: add,
//         subtract: subtract,
//         multiply: multiply,
//         divide: divide,
//         equals: equals,
//         clear: clear,
//         balance: balance,
//         deposit: deposit,
//         withdraw: withdraw
//     }

// })();
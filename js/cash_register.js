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
document.querySelector('#add').addEventListener('click', add);
document.querySelector('#subtract').addEventListener('click', subtract);
document.querySelector('#multiply').addEventListener('click', multiply);
document.querySelector('#divide').addEventListener('click', divide);
document.querySelector('#equals').addEventListener('click', equals);
document.querySelector('#clear').addEventListener('click', clear);
document.querySelector('#balance').addEventListener('click', balance);
document.querySelector('#deposit').addEventListener('click', deposit);
document.querySelector('#withdraw').addEventListener('click', withdraw);

//let display = (function(){
    let register = '0';
    let mode = '';

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
        if (mode !== 'input' || register === '0') {
            mode = 'input';
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
        if (mode !== 'input' || register === '0') {
            mode = 'input';
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
        if (mode !== 'input' || register === '0') {
            mode = 'input';
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
        if (mode !== 'input' || register === '0') {
            mode = 'input';
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
        if (mode !== 'input' || register === '0') {
            mode = 'input';
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
        if (mode !== 'input' || register === '0') {
            mode = 'input';
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
        if (mode !== 'input' || register === '0') {
            mode = 'input';
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
        if (mode !== 'input' || register === '0') {
            mode = 'input';
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
        if (mode !== 'input' || register === '0') {
            mode = 'input';
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
        if (mode !== 'input' || register === '0') {
            mode = 'input';
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
        if (mode !== 'input' || register === '0') {
            mode = 'input';
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
        if (mode !== 'input' || register === '0') {
            mode = 'input';
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

    function clear(){
        mode = '';
        register = '0';
        display.innerHTML = register;
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
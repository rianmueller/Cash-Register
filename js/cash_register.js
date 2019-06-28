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
let key = '';

    function numPad(){
        if (inputMode === false || register === '0') {
            inputMode = true;
            register = key;
            display.innerHTML = register;
            return;
        } else if (register.length > 9) {
            return;
        } else {
            register += key;
            display.innerHTML = register;
            return;
        }
    };

    function one(){
        key = '1';
        numPad();
        return;
    };

    function two(){
        key = '2';
        numPad();
        return;
    };

    function three(){
        key = '3';
        numPad();
        return;
    };

    function four(){
        key = '4';
        numPad();
        return;
    };

    function five(){
        key = '5';
        numPad();
        return;
    };

    function six(){
        key = '6';
        numPad();
        return;
    };

    function seven(){
        key = '7';
        numPad();
        return;
    };

    function eight(){
        key = '8';
        numPad();
        return;
    };

    function nine(){
        key = '9';
        numPad();
        return;
    };

    // '0'
    // if register is '0', do nothing

    function zero(){
        if (register === '0') {
            return;
        } else {
            key = '0';
        };
        numPad();
        return;
    };

    // '00'
    // if register is '0', do nothing
    // if register is almost full, do nothing

    function doubleZero(){
        if (register === '0' || register.length > 8) {
            return;
        } else {
            key = '00';
        };
        numPad();
        return;
    };

    // '.'
    // if decimal exists in register, do nothing
    // if register is '0', assign '0.'

    function decimal(){
        if (inputMode === false) {
            key = '0.';
        } else if (register.includes('.')){
            return;
        } else {
            key = '.';
        }
        numPad();
        return;
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
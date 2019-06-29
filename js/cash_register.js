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
document.querySelector('#balance').addEventListener('click', balance);
document.querySelector('#deposit').addEventListener('click', deposit);
document.querySelector('#withdraw').addEventListener('click', withdraw);
document.querySelector('#add').addEventListener('click', add);
document.querySelector('#subtract').addEventListener('click', subtract);
document.querySelector('#multiply').addEventListener('click', multiply);
document.querySelector('#divide').addEventListener('click', divide);
document.querySelector('#equals').addEventListener('click', equals);
document.querySelector('#clear').addEventListener('click', clear);

//let display = (function(){

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

    function balance(){
        key = 'balance';
        inputMode = false;
        operator = '';
        memory = drawer;
        display.innerHTML = Math.round(memory * 100) / 100;
        return;
    };

    function deposit(){
        key = 'deposit';
        inputMode = false;
        operator = '';
        drawer = drawer + parseFloat(register);
        register = '0';
        display.innerHTML = register;
        return;
    };

    function withdraw(){
        key = 'withdraw';
        inputMode = false;
        operator = '';
        if (parseFloat(register) > drawer) {
            register = 'NO CAN DO';
        } else {
            drawer = drawer - parseFloat(register);
            register = '0';
        }
        display.innerHTML = register;
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
//         balance: balance,
//         deposit: deposit,
//         withdraw: withdraw,
//         add: add,
//         subtract: subtract,
//         multiply: multiply,
//         divide: divide,
//         equals: equals,
//         clear: clear
//     }

// })();
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

function numPad(){
    if (foo.inputMode === false || foo.register === '0') {
        foo.inputMode = true;
        foo.register = foo.key;
        display.innerHTML = foo.register;
        return;
    } else if (foo.register.length > 9) {
        return;
    } else {
        foo.register += foo.key;
        display.innerHTML = foo.register;
        return;
    }
};

    function one(){
        foo.key = '1';
        numPad();
        return;
    };

    function two(){
        foo.key = '2';
        numPad();
        return;
    };

    function three(){
        foo.key = '3';
        numPad();
        return;
    };

    function four(){
        foo.key = '4';
        numPad();
        return;
    };

    function five(){
        foo.key = '5';
        numPad();
        return;
    };

    function six(){
        foo.key = '6';
        numPad();
        return;
    };

    function seven(){
        foo.key = '7';
        numPad();
        return;
    };

    function eight(){
        foo.key = '8';
        numPad();
        return;
    };

    function nine(){
        foo.key = '9';
        numPad();
        return;
    };

    // '0'
    // if register is '0', do nothing

    function zero(){
        if (foo.register === '0') {
            return;
        } else {
            foo.key = '0';
        };
        numPad();
        return;
    };

    // '00'
    // if register is '0', do nothing
    // if register is almost full, do nothing

    function doubleZero(){
        if (foo.register === '0' || foo.register.length > 8) {
            return;
        } else {
            foo.key = '00';
        };
        numPad();
        return;
    };

    // '.'
    // if decimal exists in register, do nothing
    // if register is '0', assign '0.'

    function decimal(){
        if (foo.inputMode === false) {
            foo.key = '0.';
        } else if (foo.register.includes('.')){
            return;
        } else {
            foo.key = '.';
        }
        numPad();
        return;
    };

    function balance(){
        foo.key = 'balance';
        foo.inputMode = false;
        foo.operator = '';
        foo.memory = foo.drawer;
        display.innerHTML = Math.round(foo.memory * 100) / 100;
        return;
    };

    function deposit(){
        foo.key = 'deposit';
        foo.operator = 'add';
        foo.memory = foo.drawer;
        foo.calculator();
        foo.drawer = foo.memory;
        clear();
        return;
    };

    function withdraw(){
        foo.key = 'withdraw';
        foo.operator = 'subtract';
        if (parseFloat(foo.register) > foo.drawer) {
            foo.register = 'NO CAN DO';
            display.innerHTML = foo.register;
        } else {
            foo.memory = foo.drawer;
            foo.calculator();
            foo.drawer = foo.memory;
            clear();
        }
        return;
    };
    
    function add() {
        // AFTER EQUALS CONDITION
        if (foo.key === 'equals') {
            foo.key = 'add';
        } else {
            foo.key = 'add';
            foo.calculator();
        }
        return;
    };

    function subtract() {
        // AFTER EQUALS CONDITION
        if (foo.key === 'equals') {
            foo.key = 'subtract';
        } else {
            foo.key = 'subtract';
            foo.calculator();
        }
        return;
    };
    
    function multiply() {
        // AFTER EQUALS CONDITION
        if (foo.key === 'equals') {
            foo.key = 'multiply';
        } else {
            foo.key = 'multiply';
            foo.calculator();
        }
        return;
    };

    function divide() {
        // AFTER EQUALS CONDITION
        if (foo.key === 'equals') {
            foo.key = 'divide';
        } else {
            foo.key = 'divide';
            foo.calculator();
        }
        return;
    };
    
    function equals() {
        foo.key = 'equals';
        foo.calculator();
        return;
    };

    function clear(){
        foo.key = 'clear';
        foo.inputMode = false;
        foo.register = '0';
        foo.memory = undefined;
        display.innerHTML = foo.register;
        foo.operator = '';
        return;
    };
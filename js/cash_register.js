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

    function one(){
        foo.key = '1';
        foo.numPad();
        return;
    };

    function two(){
        foo.key = '2';
        foo.numPad();
        return;
    };

    function three(){
        foo.key = '3';
        foo.numPad();
        return;
    };

    function four(){
        foo.key = '4';
        foo.numPad();
        return;
    };

    function five(){
        foo.key = '5';
        foo.numPad();
        return;
    };

    function six(){
        foo.key = '6';
        foo.numPad();
        return;
    };

    function seven(){
        foo.key = '7';
        foo.numPad();
        return;
    };

    function eight(){
        foo.key = '8';
        foo.numPad();
        return;
    };

    function nine(){
        foo.key = '9';
        foo.numPad();
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
        foo.numPad();
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
        foo.numPad();
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
        foo.numPad();
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
    
        // AFTER EQUALS
        if (foo.key === 'equals') {
            foo.key = 'add';
            foo.operator = foo.key;
            return;
        }
    
        foo.key = 'add';
        foo.calculator();
        foo.operator = foo.key;
        return;
    };

    function subtract() {

        // AFTER EQUALS
        if (foo.key === 'equals') {
            foo.key = 'subtract';
            foo.operator = foo.key;
            return;
        }
        
        foo.key = 'subtract';
        foo.calculator();
        foo.operator = foo.key;
        return;
    };
    
    function multiply() {
    
        // AFTER EQUALS
        if (foo.key === 'equals') {
            foo.key = 'multiply';
            foo.operator = foo.key;
            return;
        }
    
        foo.key = 'multiply';
        foo.calculator();
        foo.operator = foo.key;
        return;
    };

    function divide() {

        // AFTER EQUALS
        if (foo.key === 'equals') {
            foo.key = 'divide';
            foo.operator = foo.key;
            return;
        }
    
        foo.key = 'divide';
        foo.calculator();
        foo.operator = foo.key;
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
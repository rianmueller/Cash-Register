document.querySelector('#one').addEventListener('click', function(){numPad('1')});
document.querySelector('#two').addEventListener('click', function(){numPad('2')});
document.querySelector('#three').addEventListener('click', function(){numPad('3')});
document.querySelector('#four').addEventListener('click', function(){numPad('4')});
document.querySelector('#five').addEventListener('click', function(){numPad('5')});
document.querySelector('#six').addEventListener('click', function(){numPad('6')});
document.querySelector('#seven').addEventListener('click', function(){numPad('7')});
document.querySelector('#eight').addEventListener('click', function(){numPad('8')});
document.querySelector('#nine').addEventListener('click', function(){numPad('9')});
document.querySelector('#zero').addEventListener('click', function(){numPad('0')});
document.querySelector('#doubleZero').addEventListener('click', function(){numPad('00')});
document.querySelector('#decimal').addEventListener('click', function(){numPad('.')});
document.querySelector('#balance').addEventListener('click', balance);
document.querySelector('#deposit').addEventListener('click', deposit);
document.querySelector('#withdraw').addEventListener('click', withdraw);
document.querySelector('#add').addEventListener('click', add);
document.querySelector('#subtract').addEventListener('click', subtract);
document.querySelector('#multiply').addEventListener('click', multiply);
document.querySelector('#divide').addEventListener('click', divide);
document.querySelector('#equals').addEventListener('click', equals);
document.querySelector('#clear').addEventListener('click', clear);

function numPad(button){
    // if register is full, do nothing
    if (foo.register.length > 9) { 
        return;
    }
    // if key is 0 and register is '0', do nothing
    if (button === '0' && foo.register === '0') {
        return;
    }
    // if key is 00 and register is '0', do nothing
    if (button === '00' && foo.register === '0') {
        return;
    }
    // if key is 00 and register is almost full, do nothing
    if (button === '00' && foo.register.length > 8) {
        return;
    }
    // if key is . and . exists in register, do nothing
    if (button === '.' && foo.register.includes('.')){
        return;
    }
    // if key is . and register is '0', assign '0.'
    if (button === '.' && foo.register === '0') {
        button = '0.';
    }
    // if inputMode is false or register is '0', copy key to register
    if (foo.register === '0' || foo.inputMode === false) {
        foo.register = button;
    } else {
        foo.register += button;
    }
    display.innerHTML = foo.register;
    foo.inputMode = true;
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
let key = '';
let inputMode = false;
let operator = '';
let register = '0';
let memory = undefined;
let drawer = 0;

function calculator() {
    inputMode = false;
    if (operator === '' || memory === undefined) {
        memory = parseFloat(register);
    } else if (operator === 'add') {
        memory = memory + parseFloat(register);
    } else if (operator === 'subtract') {
        memory = memory - parseFloat(register);
    } else if (operator === 'multiply') {
        memory = memory * parseFloat(register);
    } else if (operator === 'divide') {
        if (parseFloat(register) == 0) {
            register = 'ERR DIV 0';
            display.innerHTML = register;
            return;
        }
        memory = memory / parseFloat(register);
    }
    display.innerHTML = Math.round(memory * 100) / 100;
    return;
};
let foo = (function () {

    let key = '';
    let inputMode = false;
    let operator = '';
    let register = '0';
    let memory = undefined;
    let drawer = 0;

    function calculator() {
        foo.inputMode = false;
        if (foo.operator === '' || foo.memory === undefined) {
            foo.memory = parseFloat(foo.register);
        } else if (foo.operator === 'add') {
            foo.memory = foo.memory + parseFloat(foo.register);
        } else if (foo.operator === 'subtract') {
            foo.memory = foo.memory - parseFloat(foo.register);
        } else if (foo.operator === 'multiply') {
            foo.memory = foo.memory * parseFloat(foo.register);
        } else if (foo.operator === 'divide') {
            if (parseFloat(foo.register) == 0) {
                foo.register = 'ERR DIV 0';
                display.innerHTML = foo.register;
                return;
            }
            foo.memory = foo.memory / parseFloat(foo.register);
        }
        if (foo.key !== 'equals') {
            foo.operator = foo.key;
        }
        display.innerHTML = Math.round(foo.memory * 100) / 100;
        return;
    };

    return {
        key: key,
        inputMode: inputMode,
        operator: operator,
        register: register,
        memory: memory,
        drawer: drawer,
        calculator: calculator,
    };
})();
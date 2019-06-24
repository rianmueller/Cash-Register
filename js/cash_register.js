document.querySelector('.one').addEventListener('click', one);
document.querySelector('.two').addEventListener('click', two);
document.querySelector('.three').addEventListener('click', three);
document.querySelector('.four').addEventListener('click', four);
document.querySelector('.five').addEventListener('click', five);
document.querySelector('.six').addEventListener('click', six);
document.querySelector('.seven').addEventListener('click', seven);
document.querySelector('.eight').addEventListener('click', eight);
document.querySelector('.nine').addEventListener('click', nine);
document.querySelector('.zero').addEventListener('click', zero);
document.querySelector('.doubleZero').addEventListener('click', doubleZero);
document.querySelector('.decimal').addEventListener('click', decimal);
document.querySelector('.add').addEventListener('click', add);
document.querySelector('.subtract').addEventListener('click', subtract);
document.querySelector('.multiply').addEventListener('click', multiply);
document.querySelector('.divide').addEventListener('click', divide);
document.querySelector('.equals').addEventListener('click', equals);
document.querySelector('.clear').addEventListener('click', clear);
document.querySelector('.balance').addEventListener('click', balance);
document.querySelector('.deposit').addEventListener('click', deposit);
document.querySelector('.withdraw').addEventListener('click', withdraw);

let display = (function(){
    let register = 0;
    let stored = 0;
    let drawer = 0;
    let operator = 'input'

    // if the last event was an operator, clear the register and assign value,
    // if the last event was a numpad and register is full, ignore event
    // if the last event was a numpad and register is not full, append value to the end of the register,
    function one(){
        if (operator !== 'input') {
            register = 1;
        } else if (register.length > 9) {
            return null;
        } else {
            register += 1;
        }
        return register;
    }

    function two(){
        if (operator !== 'input') {
            register = 2;
        } else if (register.length > 9) {
            return null;
        } else {
            register += 2;
        }
        return register;
    }

    function three(){
        if (operator !== 'input') {
            register = 3;
        } else if (register.length > 9) {
            return null;
        } else {
            register += 3;
        }
        return register;
    }

    function four(){
        if (operator !== 'input') {
            register = 4;
        } else if (register.length > 9) {
            return null;
        } else {
            register += 4;
        }
        return register;
    }

    function five(){
        return ;
    }

    function six(){
        return ;
    }

    function seven(){
        return ;
    }

    function eight(){
        return ;
    }

    function nine(){
        return ;
    }

    function zero(){
        return ;
    }

    function doubleZero(){
        return ;
    }

    function decimal(){
        return ;
    }


    return {
        one: one,
        two: two,
        three: three,
        four: four,
        five: five,
        six: six,
        seven: seven,
        eight: eight,
        nine: nine,
        zero: zero,
        doubleZero: doubleZero,
        decimal: decimal,
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide,
        equals: equals,
        clear: clear,
        balance: balance,
        deposit: deposit,
        withdraw: withdraw
    }

})();
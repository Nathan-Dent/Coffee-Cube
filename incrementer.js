let itemQuantities = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(`item quantities set to ${itemQuantities}`);

// espresso

const espressoQuantity = document.getElementById("espresso-quant");
const espressoIncrement = document.getElementById("espresso-plus");
const espressoDecrement = document.getElementById("espresso-minus");

espressoIncrement.addEventListener('click', function (event) {
    itemQuantities[0] += 1;
    espressoQuantity.innerHTML = itemQuantities[0];
});

espressoDecrement.addEventListener('click', function (event) {
    if (itemQuantities[0] == 0) {
        return;
    }
    itemQuantities[0] -= 1;
    espressoQuantity.innerHTML = itemQuantities[0];
});

// double espresso

const doubleEspressoQuantity = document.getElementById("double-espresso-quant");
const doubleEspressoIncrement = document.getElementById("double-espresso-plus");
const doubleEspressoDecrement = document.getElementById("double-espresso-minus");

doubleEspressoIncrement.addEventListener('click', function (event) {
    itemQuantities[1] += 1;
    doubleEspressoQuantity.innerHTML = itemQuantities[1];
});

doubleEspressoDecrement.addEventListener('click', function (event) {
    if (itemQuantities[1] == 0) {
        return;
    }
    itemQuantities[1] -= 1;
    doubleEspressoQuantity.innerHTML = itemQuantities[1];
});

// americano

const americanoQuantity = document.getElementById("americano-quant");
const americanoIncrement = document.getElementById("americano-plus");
const americanoDecrement = document.getElementById("americano-minus");

americanoIncrement.addEventListener('click', function (event) {
    itemQuantities[2] += 1;
    americanoQuantity.innerHTML = itemQuantities[2];
});

americanoDecrement.addEventListener('click', function (event) {
    if (itemQuantities[2] == 0) {
        return;
    }
    itemQuantities[2] -= 1;
    americanoQuantity.innerHTML = itemQuantities[2];
});

// batch brew

const batchBrewQuantity = document.getElementById("batch-brew-quant");
const batchBrewIncrement = document.getElementById("batch-brew-plus");
const batchBrewDecrement = document.getElementById("batch-brew-minus");

batchBrewIncrement.addEventListener('click', function (event) {
    itemQuantities[3] += 1;
    batchBrewQuantity.innerHTML = itemQuantities[3];
});

batchBrewDecrement.addEventListener('click', function (event) {
    if (itemQuantities[3] == 0) {
        return;
    }
    itemQuantities[3] -= 1;
    batchBrewQuantity.innerHTML = itemQuantities[3];
});

// V60

const v60Quantity = document.getElementById("v60-quant");
const v60Increment = document.getElementById("v60-plus");
const v60Decrement = document.getElementById("v60-minus");

v60Increment.addEventListener('click', function (event) {
    itemQuantities[4] += 1;
    v60Quantity.innerHTML = itemQuantities[4];
});

v60Decrement.addEventListener('click', function (event) {
    if (itemQuantities[4] == 0) {
        return;
    }
    itemQuantities[4] -= 1;
    v60Quantity.innerHTML = itemQuantities[4];
});

// macchiato

const macchiatoQuantity = document.getElementById("macchiato-quant");
const macchiatoIncrement = document.getElementById("macchiato-plus");
const macchiatoDecrement = document.getElementById("macchiato-minus");

macchiatoIncrement.addEventListener('click', function (event) {
    itemQuantities[5] += 1;
    macchiatoQuantity.innerHTML = itemQuantities[5];
});

macchiatoDecrement.addEventListener('click', function (event) {
    if (itemQuantities[5] == 0) {
        return;
    }
    itemQuantities[5] -=1;
    macchiatoQuantity.innerHTML = itemQuantities[5];
});

// cappuccino

const cappuccinoQuantity = document.getElementById("cappuccino-quant");
const cappuccinoIncrement = document.getElementById("cappuccino-plus");
const cappuccinoDecrement = document.getElementById("cappuccino-minus");

cappuccinoIncrement.addEventListener('click', function (event) {
    itemQuantities[6] += 1;
    cappuccinoQuantity.innerHTML = itemQuantities[6];
});

cappuccinoDecrement.addEventListener('click', function (event) {
    if (itemQuantities[6] == 0) {
        return;
    }
    itemQuantities[6] -= 1;
    cappuccinoQuantity.innerHTML = itemQuantities[6];
});

// latte

const latteQuantity = document.getElementById("latte-quant");
const latteIncrement = document.getElementById("latte-plus");
const latteDecrement = document.getElementById("latte-minus");

latteIncrement.addEventListener('click', function (event) {
    itemQuantities[7] += 1;
    latteQuantity.innerHTML = itemQuantities[7];
});

latteDecrement.addEventListener('click', function (event) {
    if (itemQuantities[7] == 0) {
        return;
    }
    itemQuantities[7] -= 1;
    latteQuantity.innerHTML = itemQuantities[7];
});

// flat white

const flatWhiteQuantity = document.getElementById("flat-white-quant");
const flatWhiteIncrement = document.getElementById("flat-white-plus");
const flatWhiteDecrement = document.getElementById("flat-white-minus");

flatWhiteIncrement.addEventListener('click', function (event) {
    itemQuantities[8] += 1;
    flatWhiteQuantity.innerHTML = itemQuantities[8];
});

flatWhiteDecrement.addEventListener('click', function (event) {
    if (itemQuantities[8] == 0) {
        return;
    }
    itemQuantities[8] -= 1;
    flatWhiteQuantity.innerHTML = itemQuantities[8];
});

// mocha

const mochaQuantity = document.getElementById("mocha-quant");
const mochaIncrement = document.getElementById("mocha-plus");
const mochaDecrement = document.getElementById("mocha-minus");


mochaIncrement.addEventListener('click', function (event) {
    itemQuantities[9] += 1;
    mochaQuantity.innerHTML = itemQuantities[9];
});

mochaDecrement.addEventListener('click', function (event) {
    if (itemQuantities[9] == 0) {
        return;
    }
    itemQuantities[9] -= 1;
    mochaQuantity.innerHTML = itemQuantities[9];
});

// dirty chai

const dirtyChaiQuantity = document.getElementById("dirty-chai-quant");
const dirtyChaiIncrement = document.getElementById("dirty-chai-plus");
const dirtyChaiDecrement = document.getElementById("dirty-chai-minus");

dirtyChaiIncrement.addEventListener('click', function (event) {
    itemQuantities[10] += 1;
    dirtyChaiQuantity.innerHTML = itemQuantities[10];
});

dirtyChaiDecrement.addEventListener('click', function (event) {
    if (itemQuantities[10] == 0) {
        return;
    }    
    itemQuantities[10] -= 1;
    dirtyChaiQuantity.innerHTML = itemQuantities[10];
    
});

// irish coffee

const irishCoffeeQuantity = document.getElementById("irish-coffee-quant");
const irishCoffeeIncrement = document.getElementById("irish-coffee-plus");
const irishCoffeeDecrement = document.getElementById("irish-coffee-minus");

irishCoffeeIncrement.addEventListener('click', function (event) {
    itemQuantities[11] += 1;
    irishCoffeeQuantity.innerHTML = itemQuantities[11];
});

irishCoffeeDecrement.addEventListener('click', function (event) {
    if (itemQuantities[11] == 0) {
        return;
    }
    itemQuantities[11] -= 1;
    irishCoffeeQuantity.innerHTML = itemQuantities[11];
});
const drinkData = {
    iceBlack: {
        quantity: 0,
        size: null,
        add: null,
    },
    iceBatch: {
        quantity: 0,
        size: null,
        add: null,
    },
    iceLatte: {
        quantity: 0,
        size: null,
        add: null,
    },
    iceFlatWhite: {
        quantity: 0,
        size: null,
        add: null,
    },
    iceMatcha: {
        quantity: 0,
        size: null,
        add: null,
    },
    iceChaiLatte: {
        quantity: 0,
        size: null,
        add: null,
    },
    iceDirtyChai: {
        quantity: 0,
        size: null,
        add: null,
    },
    iceChocolate: {
        quantity: 0,
        size: null,
        add: null,
    },
    espressoTonic: {
        quantity: 0,
        size: null,
        add: null,
    },
};

// ice black

const iceBlackQuantity = document.getElementById("ice-black-quant");
const iceBlackIncrement = document.getElementById("ice-black-plus");
const iceBlackDecrement = document.getElementById("ice-black-minus");

iceBlackIncrement.addEventListener('click', function (event) {
    drinkData.iceBlack.quantity += 1;
    iceBlackQuantity.innerHTML = drinkData.iceBlack.quantity;
});

iceBlackDecrement.addEventListener('click', function (event) {
    if (drinkData.iceBlack.quantity == 0) {
        return;
    };
    drinkData.iceBlack.quantity -= 1;
    iceBlackQuantity.innerHTML = drinkData.iceBlack.quantity;
});

// ice batch

const iceBatchQuantity = document.getElementById("ice-batch-quant");
const iceBatchIncrement = document.getElementById("ice-batch-plus");
const iceBatchDecrement = document.getElementById("ice-batch-minus");

iceBatchIncrement.addEventListener('click', function (event) {
    drinkData.iceBatch.quantity += 1;
    iceBatchQuantity.innerHTML = drinkData.iceBatch.quantity;
});

iceBatchDecrement.addEventListener('click', function (event) {
    if (drinkData.iceBatch.quantity == 0) {
        return;
    };
    drinkData.iceBatch.quantity -= 1;
    iceBatchQuantity.innerHTML = drinkData.iceBatch.quantity;
});

// ice latte

const iceLatteQuantity = document.getElementById("ice-latte-quant");
const iceLatteIncrement = document.getElementById("ice-latte-plus");
const iceLatteDecrement = document.getElementById("ice-latte-minus");

iceLatteIncrement.addEventListener('click', function (event) {
    drinkData.iceLatte.quantity += 1;
    iceLatteQuantity.innerHTML = drinkData.iceLatte.quantity;
});

iceLatteDecrement.addEventListener('click', function (event) {
    if (drinkData.iceLatte.quantity == 0) {
        return;
    };
    drinkData.iceLatte.quantity -= 1;
    iceLatteQuantity.innerHTML = drinkData.iceLatte.quantity;
});

// ice flat white

const iceFlatWhiteQuantity = document.getElementById("ice-flat-white-quant");
const iceFlatWhiteIncrement = document.getElementById("ice-flat-white-plus");
const iceFlatWhiteDecrement = document.getElementById("ice-flat-white-minus");

iceFlatWhiteIncrement.addEventListener('click', function (event) {
    drinkData.iceFlatWhite.quantity += 1;
    iceFlatWhiteQuantity.innerHTML = drinkData.iceFlatWhite.quantity;
})

iceFlatWhiteDecrement.addEventListener('click', function (event) {
    if (drinkData.iceFlatWhite.quantity == 0) {
        return;
    };
    drinkData.iceFlatWhite.quantity -= 1;
    iceFlatWhiteQuantity.innerHTML = drinkData.iceFlatWhite.quantity;
});

// ice matcha

const iceMatchaQuantity = document.getElementById("ice-matcha-quant");
const iceMatchaIncrement = document.getElementById("ice-matcha-plus");
const iceMatchaDecrement = document.getElementById("ice-matcha-minus");

iceMatchaIncrement.addEventListener('click', function (event) {
    drinkData.iceMatcha.quantity += 1;
    iceMatchaQuantity.innerHTML = drinkData.iceMatcha.quantity;
});

iceMatchaDecrement.addEventListener('click', function (event) {
    if (drinkData.iceMatcha.quantity == 0) {
        return;
    };
    drinkData.iceMatcha.quantity -= 1;
    iceMatchaQuantity.innerHTML = drinkData.iceMatcha.quantity;
});

// ice chai latte

const iceChaiLatteQuantity = document.getElementById("ice-chai-latte-quant");
const iceChaiLatteIncrement = document.getElementById("ice-chai-latte-plus");
const iceChaiLatteDecrement = document.getElementById("ice-chai-latte-minus");

iceChaiLatteIncrement.addEventListener('click', function (event) {
    drinkData.iceChaiLatte.quantity += 1;
    iceChaiLatteQuantity.innerHTML = drinkData.iceChaiLatte.quantity;
});

iceChaiLatteDecrement.addEventListener('click', function (event) {
    if (drinkData.iceChaiLatte.quantity == 0) {
        return;
    };
    drinkData.iceChaiLatte.quantity -= 1;
    iceChaiLatteQuantity.innerHTML = drinkData.iceChaiLatte.quantity;
});

// ice dirty chai

const iceDirtyChaiQuantity = document.getElementById("ice-dirty-chai-quant");
const iceDirtyChaiIncrement = document.getElementById("ice-dirty-chai-plus");
const iceDirtyChaiDecrement = document.getElementById("ice-dirty-chai-minus");

iceDirtyChaiIncrement.addEventListener('click', function (event) {
    drinkData.iceDirtyChai.quantity += 1;
    iceDirtyChaiQuantity.innerHTML = drinkData.iceDirtyChai.quantity;
});

iceDirtyChaiDecrement.addEventListener('click', function (event) {
    if (drinkData.iceDirtyChai.quantity == 0) {
        return;
    };
    drinkData.iceDirtyChai.quantity -= 1;
    iceDirtyChaiQuantity.innerHTML = drinkData.iceDirtyChai.quantity;
});

// ice chocolate

const iceChocolateQuantity = document.getElementById("ice-chocolate-quant");
const iceChocolateIncrement = document.getElementById("ice-chocolate-plus");
const iceChocolateDecrement = document.getElementById("ice-chocolate-minus");

iceChocolateIncrement.addEventListener('click', function (event) {
    drinkData.iceChocolate.quantity += 1;
    iceChocolateQuantity.innerHTML = drinkData.iceChocolate.quantity;
});

iceChocolateDecrement.addEventListener('click', function (event) {
    if (drinkData.iceChocolate.quantity == 0) {
        return;
    };
    drinkData.iceChocolate.quantity -= 1;
    iceChocolateQuantity.innerHTML = drinkData.iceChocolate.quantity;
});

// espresso tonic

const espressoTonicQuantity = document.getElementById("espresso-tonic-quant");
const espressoTonicIncrement = document.getElementById("espresso-tonic-plus");
const espressoTonicDecrement = document.getElementById("espresso-tonic-minus");

espressoTonicIncrement.addEventListener('click', function (event) {
    drinkData.espressoTonic.quantity += 1;
    espressoTonicQuantity.innerHTML = drinkData.espressoTonic.quantity;
});

espressoTonicDecrement.addEventListener('click', function (event) {
    if (drinkData.espressoTonic.quantity == 0) {
        return;
    };
    drinkData.espressoTonic.quantity -= 1;
    espressoTonicQuantity.innerHTML = drinkData.espressoTonic.quantity;
});
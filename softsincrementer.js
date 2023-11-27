const drinksData = {
    gingerLemonade: {
        quantity: 0,
        size: null,
        add: null,
    },
    pineappleLemonade: {
        quantity: 0,
        size: null,
        add: null,
    },
    seaSaltLemonade: {
        quantity: 0,
        size: null,
        add: null,
    },
    cascara: {
        quantity: 0,
        size: null,
        add: null,
    },
};

// ginger lemonade

const gingerLemonadeQuantity = document.getElementById('ginger-lemonade-quant');
const gingerLemonadeIncrement = document.getElementById('ginger-lemonade-plus');
const gingerLemonadeDecrement = document.getElementById('ginger-lemonade-minus');

gingerLemonadeIncrement.addEventListener('click', function (event) {
    drinksData.gingerLemonade.quantity += 1;
    gingerLemonadeQuantity.innerHTML = drinksData.gingerLemonade.quantity;
});

gingerLemonadeDecrement.addEventListener('click', function (event) {
    if (drinksData.gingerLemonade.quantity == 0) {
        return;
    };
    drinksData.gingerLemonade.quantity -= 1;
    gingerLemonadeQuantity.innerHTML = drinksData.gingerLemonade.quantity;
});

// pineapple lemonade

const pineappleLemonadeQuantity = document.getElementById("pineapple-lemonade-quant");
const pineappleLemonadeIncrement = document.getElementById("pineapple-lemonade-plus");
const pineappleLemonadeDecrement = document.getElementById("pineapple-lemonade-minus");

pineappleLemonadeIncrement.addEventListener('click', function (event) {
    drinksData.pineappleLemonade.quantity += 1;
    pineappleLemonadeQuantity.innerHTML = drinksData.pineappleLemonade.quantity;
});

pineappleLemonadeDecrement.addEventListener('click', function (event) {
    if (drinksData.pineappleLemonade.quantity == 0) {
        return;
    };
    drinksData.pineappleLemonade.quantity -= 1;
    pineappleLemonadeQuantity.innerHTML = drinksData.pineappleLemonade.quantity;
});

// sea salt lemonade

const seaSaltLemonadeQuantity = document.getElementById('sea-salt-lemonade-quant');
const seaSaltLemonadeIncrement = document.getElementById('sea-salt-lemonade-plus');
const seaSaltLemonadeDecrement = document.getElementById('sea-salt-lemonade-minus');

seaSaltLemonadeIncrement.addEventListener('click', function (event) {
    drinksData.seaSaltLemonade.quantity += 1;
    seaSaltLemonadeQuantity.innerHTML = drinksData.seaSaltLemonade.quantity;
});

seaSaltLemonadeDecrement.addEventListener('click', function (event) {
    if (drinksData.seaSaltLemonade.quantity == 0) {
        return;
    };
    drinksData.seaSaltLemonade.quantity -= 1;
    seaSaltLemonadeQuantity.innerHTML = drinksData.seaSaltLemonade.quantity;
});

// cascara

const cascaraQuantity = document.getElementById('cascara-quant');
const cascaraIncrement = document.getElementById('cascara-plus');
const cascaraDecrement = document.getElementById('cascara-minus')

cascaraIncrement.addEventListener('click', function (event) {
    drinksData.cascara.quantity += 1;
    cascaraQuantity.innerHTML = drinksData.cascara.quantity;
});

cascaraDecrement.addEventListener('click', function (event) {
    if (drinksData.cascara.quantity == 0) {
        return;
    };
    drinksData.cascara.quantity -= 1;
    cascaraQuantity.innerHTML = drinksData.cascara.quantity;
});
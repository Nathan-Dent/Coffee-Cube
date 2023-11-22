const drinkData = {
    chaiLatte: {
        quantity: 0,
        size: null,
        add: null,
    },
    matchaLatte: {
        quantity: 0,
        size: null,
        add: null,
    },
    goldenMilk: {
        quantity: 0,
        size: null,
        add: null,
    },
    hotChocolate: {
        quantity: 0,
        size: null,
        add: null,
    },
    freshGingerTea: {
        quantity: 0,
        size: null,
        add: null,
    },
    premiumTea: {
        quantity: 0,
        size: null,
        add: null,
    }
};

// chai latte

const chaiLatteQuantity = document.getElementById("chai-latte-quant");
const chaiLatteIncrement = document.getElementById("chai-latte-plus");
const chaiLatteDecrement = document.getElementById("chai-latte-minus");

chaiLatteIncrement.addEventListener('click', function (event) {
    drinkData.chaiLatte.quantity += 1;
    chaiLatteQuantity.innerHTML = drinkData.chaiLatte.quantity;
});

chaiLatteDecrement.addEventListener('click', function (event) {
    if (drinkData.chaiLatte.quantity == 0) {
        return;
    };
    drinkData.chaiLatte.quantity -= 1;
    chaiLatteQuantity.innerHTML = drinkData.chaiLatte.quantity;
});

// matcha latte

const matchaLatteQuantity = document.getElementById("matcha-latte-quant");
const matchaLatteIncrement = document.getElementById("matcha-latte-plus");
const matchaLatteDecrement = document.getElementById("matcha-latte-minus");

matchaLatteIncrement.addEventListener('click', function (event) {
    drinkData.matchaLatte.quantity += 1;
    matchaLatteQuantity.innerHTML = drinkData.matchaLatte.quantity;
});

matchaLatteDecrement.addEventListener('click', function (event) {
    if (drinkData.matchaLatte.quantity == 0) {
        return;
    };
    drinkData.matchaLatte.quantity -= 1;
    matchaLatteQuantity.innerHTML = drinkData.matchaLatte.quantity;
});

// golden milk

const goldenMilkQuantity = document.getElementById("golden-milk-quant");
const goldenMilkIncrement = document.getElementById("golden-milk-plus");
const goldenMilkDecrement = document.getElementById("golden-milk-minus");

goldenMilkIncrement.addEventListener('click', function (event) {
    drinkData.goldenMilk.quantity += 1;
    goldenMilkQuantity.innerHTML = drinkData.goldenMilk.quantity;
});

goldenMilkDecrement.addEventListener('click', function (event) {
    if (drinkData.goldenMilk.quantity == 0) {
        return;
    };
    drinkData.goldenMilk.quantity -= 1;
    goldenMilkQuantity.innerHTML = drinkData.goldenMilk.quantity;
});

// hot chocolate

const hotChocolateQuantity = document.getElementById("hot-chocolate-quant");
const hotChocolateIncrement = document.getElementById("hot-chocolate-plus");
const hotChocolateDecrement = document.getElementById("hot-chocolate-minus");

hotChocolateIncrement.addEventListener('click', function (event) {
    drinkData.hotChocolate.quantity += 1;
    hotChocolateQuantity.innerHTML = drinkData.hotChocolate.quantity;
});

hotChocolateDecrement.addEventListener('click', function (event) {
    if (drinkData.hotChocolate.quantity == 0) {
        return;
    };
    drinkData.hotChocolate.quantity -= 1;
    hotChocolateQuantity.innerHTML = drinkData.hotChocolate.quantity;
});

// fresh ginger tea

const freshGingerTeaQuantity = document.getElementById("fresh-ginger-tea-quant");
const freshGingerTeaIncrement = document.getElementById("fresh-ginger-tea-plus");
const freshGingerTeaDecrement = document.getElementById("fresh-ginger-tea-minus");

freshGingerTeaIncrement.addEventListener('click', function (event) {
    drinkData.freshGingerTea.quantity += 1;
    freshGingerTeaQuantity.innerHTML = drinkData.freshGingerTea.quantity;
});

freshGingerTeaDecrement.addEventListener('click', function (event) {
    if (drinkData.freshGingerTea.quantity == 0) {
        return;
    };
    drinkData.freshGingerTea.quantity -= 1;
    freshGingerTeaQuantity.innerHTML = drinkData.freshGingerTea.quantity;
});

// premium tea

const premiumTeaQuantity = document.getElementById("premium-tea-quant");
const premiumTeaIncrement = document.getElementById("premium-tea-plus");
const premiumTeaDecrement = document.getElementById("premium-tea-minus");

premiumTeaIncrement.addEventListener('click', function (event) {
    drinkData.premiumTea.quantity += 1;
    premiumTeaQuantity.innerHTML = drinkData.premiumTea.quantity;
});

premiumTeaDecrement.addEventListener('click', function (event) {
    if (drinkData.premiumTea.quantity == 0) {
        return;
    };
    drinkData.premiumTea.quantity -= 1;
    premiumTeaQuantity.innerHTML = drinkData.premiumTea.quantity;
});
const exit = document.getElementsByClassName('exit');

const allPopUps = document.getElementsByClassName("popup");

const addToCarts = document.getElementsByClassName('add-to-cart');

function closeWindows() {
    for (var i = 0; i < allPopUps.length; i++) {
        allPopUps[i].style.display = 'none';
    };
};

function createTrigger(item) {
    var itemTrigger = document.getElementById(item);
    var itemPopUp = document.getElementById(item + `-popup`);
    itemTrigger.addEventListener('click', function (event) {
        itemPopUp.style.display = 'grid';
    });
};

for (var i = 0; i < exit.length; i++) {
    exit[i].addEventListener('click', closeWindows);
};

for (var i = 0; i < addToCarts.length; i++) {
    addToCarts[i].addEventListener('click', closeWindows);
};

createTrigger('chai-latte');
createTrigger('matcha-latte');
createTrigger('golden-milk');
createTrigger('hot-chocolate');
createTrigger('fresh-ginger-tea');
createTrigger('premium-tea');
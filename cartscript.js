const editCappuccino = document.getElementById('edit-cappuccino');
const editAmericano = document.getElementById('edit-americano');
const editAmericano2 = document.getElementById('edit-americano-2');
const editLemonade = document.getElementById('edit-lemonade');
const editLemonade2 = document.getElementById('edit-lemonade-2');

const cappuccinoPopUp = document.getElementById('cappuccino-popup');
const AmericanoPopUp = document.getElementById('americano-popup');
const lemonadePopUp = document.getElementById('ginger-lemonade-popup');

editCappuccino.addEventListener('click', function (event) {
    cappuccinoPopUp.style.display = 'grid';
})

editAmericano.addEventListener('click', function (event) {
    AmericanoPopUp.style.display = 'grid';
})

editAmericano2.addEventListener('click', function (event) {
    AmericanoPopUp.style.display = 'grid';
})

editLemonade.addEventListener('click', function (event) {
    lemonadePopUp.style.display = 'grid';
})

editLemonade2.addEventListener('click', function (event) {
    lemonadePopUp.style.display = 'grid';
})

const exit = document.getElementsByClassName('exit');

const allPopUps = document.getElementsByClassName("popup");

function closeWindows() {
    for (var i = 0; i < allPopUps.length; i++) {
        allPopUps[i].style.display = 'none';
    };
};

for (var i = 0; i < exit.length; i++) {
    exit[i].addEventListener('click', closeWindows);
};

const addToCarts = document.getElementsByClassName("add-to-cart");

for (var i = 0; i < addToCarts.length; i++) {
    addToCarts[i].addEventListener('click', closeWindows);
};
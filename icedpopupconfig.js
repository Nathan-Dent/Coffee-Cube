const exit = document.getElementsByClassName('exit');

const allPopUps = document.getElementsByClassName("popup");

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

createTrigger('ice-black');
createTrigger('ice-batch');
createTrigger('ice-latte');
createTrigger('ice-flat-white');
createTrigger('ice-matcha');
createTrigger('ice-chai-latte');
createTrigger('ice-dirty-chai');
createTrigger('ice-chocolate');
createTrigger('espresso-tonic');
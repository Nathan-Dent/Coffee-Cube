const exit = document.getElementsByClassName('exit');

const allPopUps = document.getElementsByClassName("popup");

const addToCartButtons = document.getElementsByClassName("add-to-cart");

const quickAdds = document.getElementsByClassName("quick-add");

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

for (var i =0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', closeWindows);
}

const items = ['espresso',
'double-espresso',
'americano',
'batch-brew',
'v60',
'macchiato',
'cappuccino',
'latte',
'flat-white',
'mocha',
'dirty-chai',
'irish-coffee'];

for (var i = 0; i < quickAdds.length; i++) {
    console.log('THE VALUE OF i IS ' + i);
    console.log(items[i]);
    console.log(quickAdds[i]);
    quickAdds[i].addEventListener('click', function (event) {
        let itemPopUp = document.getElementById(items[i - 1] + `-popup`);
        itemPopUp.style.display = 'grid';
    });
};

createTrigger('espresso');
createTrigger('double-espresso');
createTrigger('americano');
createTrigger('batch-brew');
createTrigger('v60');
createTrigger('macchiato');
createTrigger('cappuccino');
createTrigger('latte');
createTrigger('flat-white');
createTrigger('mocha');
createTrigger('dirty-chai');
createTrigger('irish-coffee');
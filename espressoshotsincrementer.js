const shotsMinus = document.getElementById('espresso-shots-minus');
const shotsQuant = document.getElementById('espresso-shots-quant');
const shotsPlus = document.getElementById('espresso-shots-plus');

let shotsChangeable = 1;

shotsPlus.addEventListener('click', function (event) {
    console.log('plus clicked!');
    shotsChangeable += 1;
    shotsQuant.innerHTML = shotsChangeable;
});

shotsMinus.addEventListener('click', function (event) {
    if (shotsChangeable == 1) {
        console.log('returning');
        return;
    }
    console.log('minus clicked!');
    shotsChangeable -= 1;
    shotsQuant.innerHTML = shotsChangeable;
});
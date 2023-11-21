document.addEventListener('DOMContentLoaded', function () {
    
    const decrementButton = document.getElementById('decrement');
    console.log(decrementButton)
    const incrementButton = document.getElementById('increment');
    console.log(incrementButton)
    const quantElement = document.querySelector('.quant p');
    console.log(quantElement)

    
    let value = 0;

    
    function updateValue(newValue) {
        value = newValue;
        quantElement.textContent = value;
    }

    
    decrementButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        updateValue(value - 1);
    });

    
    incrementButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        updateValue(value + 1);
    });
});
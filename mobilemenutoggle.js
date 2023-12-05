const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-nav-links');

const activeClasses = document.getElementsByClassName('is-active-flex');
console.log(activeClasses);

hamburger.addEventListener('click', function (event) {
    if (mobileMenu.classList.contains('is-active-flex')) {
        mobileMenu.classList.remove('is-active-flex');
        console.log(activeClasses);
    } else {
    mobileMenu.classList.add('is-active-flex');
    console.log(activeClasses);
    }
});


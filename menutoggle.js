const toggleMenu = () => {
    document.getElementById('hamburger').classList.toggle("is-active");
    document.getElementById('the-menu').classList.toggle("is-active");
    document.body.classList.toggle("is-active");
};

document.getElementById('hamburger').addEventListener("click", toggleMenu);

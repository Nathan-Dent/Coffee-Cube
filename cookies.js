document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('cookiesAccepted') !== 'true')
    {showCookiePopup();
}
    document.getElementById('accept-btn').addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'true');
        hideCookiePopup();
});
  document.getElementById('cancel-btn').addEventListener('click', function () {
    hideCookiePopup();
     });
 });
 function showCookiePopup() {
    document.getElementById('cookie-popup').style.display = 'block';
}
function hideCookiePopup() {
    document.getElementById('cookie-popup').style.display = 'none';
}
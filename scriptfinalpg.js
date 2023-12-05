document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([50.088542797779034, 14.426695468126846], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([50.088542797779034, 14.426695468126846]).addTo(map)
        .bindPopup('Coffee Cube - Old Town')
        .openPopup();
});
document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map
    console.log('hello')
    var map = L.map('map').setView([50.088542797779034, 14.426695468126846], 13);

    // Add OpenStreetMap as the base layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add a marker to the map
    L.marker([50.088542797779034, 14.426695468126846]).addTo(map)
        .bindPopup('Coffee Cube - Your Location')
        .openPopup();
});
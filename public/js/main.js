var map;
let socket = io.connect('http://localhost:8080');
 
(function init() {
  initMap();
 
	socket.on('coords', (data) => {
		drawMarker(data.lat, data.lng)
	});
})();

function drawMarker(lat, lng) {
	L.circle([lat, lng], {
		color: 'steelblue',
		fillColor: 'steelblue',
		fillOpacity: 1,
		radius: 50000
	}).addTo(map);
}
 
function initMap() {
  console.log('Initializing map');
  map = L.map('map').setView([37, -96], 4);
 
  // Set up map source
  L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Open Street Map',
      maxZoom: 18
    }).addTo(map);
}


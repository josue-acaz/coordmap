const locations = [
  { 
      id: 1,
      label: "Santo Antônio",
      lat: 0.93, 
      lng: -55.75 
  },
  {
      id: 2,
      label: "Matawaré",
      lat: 1.93,
      lng: -55.12,
  },
  {
      id: 3,
      label: "Maretepu",
      lat: 1.09,
      lng: -56.19
  },
  {
      id: 4,
      label: "Marari",
      lat: 1.20,
      lng: -64.15
  },
  {
      id: 5,
      label: "Cuxaré",
      lat: 1.72,
      lng: -56.07
  },
  {
      id: 6,
      label: "Bona",
      lat: 1.22,
      lng: -54.65
  },
  {
      id: 7,
      label: "Urunai",
      lat: 1.52,
      lng: -56.08
  },
  {
      id: 8,
      label: "Yawa",
      lat: 1.35,
      lng: -56.13
  },
  {
      id: 9,
      label: "Pedra da Onça",
      lat: 1.44,
      lng: -55.66
  }
];

var markers = [];
var map;

function initMap() {
    
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: { lat: 1.09, lng: -56.19 },
    mapTypeId: "satellite"
  });
  drop();
}

function drop() {
  clearMarkers();
  for (var i = 0; i < locations.length; i++) {
    addMarkerWithTimeout(map, { lat: locations[i].lat, lng: locations[i].lng }, i * 300, i);
  }
}

function addMarkerWithTimeout(map, position, timeout, index) {

  window.setTimeout(function() {
    markers.push(new google.maps.Marker({
      position: position,
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
    }));

  }, timeout);
}

function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}
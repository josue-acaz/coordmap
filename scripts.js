const locations = [
  { 
    id: 1,
    label: "Santo Antônio",
    lat: 0.93,
    lng: -55.75,
    dsei: "Macapá"
  },
  {
    id: 2,
    label: "Matawaré",
    lat: 1.93,
    lng: -55.12,
    dsei: "Macapá"
  },
  {
    id: 3,
    label: "Maretepu",
    lat: 1.09,
    lng: -56.19,
    dsei: "Macapá"
  },
  {
    id: 4,
    label: "Marari",
    lat: 1.20,
    lng: -64.15,
    dsei: "Macapá"
  },
  {
    id: 5,
    label: "Cuxaré",
    lat: 1.72,
    lng: -56.07,
    dsei: "Macapá"
  },
  {
    id: 6,
    label: "Bona",
    lat: 1.22,
    lng: -54.65,
    dsei: "Macapá"
  },
  {
    id: 7,
    label: "Urunai",
    lat: 1.52,
    lng: -56.08,
    dsei: "Macapá"
  },
  {
    id: 8,
    label: "Yawa",
    lat: 1.35,
    lng: -56.13,
    dsei: "Macapá"
  },
  {
    id: 9,
    label: "Pedra da Onça",
    lat: 1.44,
    lng: -55.66,
    dsei: "Macapá"
  },
  {
    id: 10,
    label: "Missão Cururu",
    lat: -7.55,
    lng: -57.73,
    dsei: "Tapajós"
  },
  {
    id: 11,
    label: "Teles Pires",
    lat: -8.39,
    lng: -57.67,
    dsei: "Tapajós"
  },
  {
    id: 12,
    label: "B. de São Miguel",
    lat: -7.34,
    lng: -58.15,
    dsei: "Tapajós"
  },
  {
    id: 13,
    label: "KBK",
    lat: -8.72,
    lng: -53.39,
    dsei: "Tapajós"
  },
  {
    id: 14,
    label: "Pykany",
    lat: -8.45,
    lng: -53.72,
    dsei: "Tapajós"
  },
  {
    id: 15,
    label: "Mekranotire",
    lat: -8.66,
    lng: -54.22,
    dsei: "Tapajós"
  },
  {
    id: 16,
    label: "Kamaú",
    lat: -7.35,
    lng: -54.82,
    dsei: "Tapajós"
  },
  {
    id: 17,
    label: "Baú",
    lat: -7.34,
    lng: -54.82,
    dsei: "Tapajós"
  },
  {
    id: 18,
    label: "Mapuera",
    lat: -0.70,
    lng: -57.97,
    dsei: "Guatoc"
  },
  {
    id: 19,
    label: "Cachoeira Porteira",
    lat: -1.07,
    lng: -57.05,
    dsei: "Guatoc"
  },
  {
    id: 20,
    label: "Ayaramã",
    lat: 0.64,
    lng: -56.87,
    dsei: "Guatoc"
  },
  {
    id: 21,
    label: "Cuminapanema",
    lat: -0.33,
    lng: -55.83,
    dsei: "Guatoc"
  },
  {
    id: 22,
    label: "Oriximiná",
    lat: -1.71,
    lng: -55.84,
    dsei: "Guatoc"
  },
  {
    id: 23,
    label: "Pista do Limão",
    lat: -5.75,
    lng: -56.39,
    dsei: "Pista do Limão"
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
    addMarkerWithTimeout(map, locations[i], i * 300, i);
  }
}

function addMarkerWithTimeout(map, location, timeout, index) {

  const image = {
    url: 'assets/smb.png',
    // This marker is 20 pixels wide by 32 pixels high.
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(20.5, 68)
  };

  window.setTimeout(function() {
    markers.push(new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      icon: image,
      label: {
        text: location.label,
        fontSize: '10px',
        color: '#f4f4f4',
        fontWeight: 'bold'
      }
    }));

  }, timeout);
}

function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 0.93, lng: -55.75  },
      mapTypeId: "satellite"
    });
    
    const markers = locations.map(location => {
      return new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        label: {
            text: location.label,
            color: "#ffff",
            fontSize: "18px",
            fontWeight: "normal"
        },
      });
    });

    new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
  }
  
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
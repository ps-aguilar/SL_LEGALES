import "https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js";

// Coordinates for the provided address
const addressLocation = [-92.9576, 17.9996];

function init() {
  const map = new maplibregl.Map({
    style: "/styles/dark.json",
    center: addressLocation,
    zoom: 16,
    container: "map",
  });

  // Add a popup
  new maplibregl.Popup({
    closeOnClick: false,
  })
    .setLngLat(addressLocation)
    .setHTML("<h3>📍 ¡Aquí!</h3>")
    .addTo(map);
}

init();

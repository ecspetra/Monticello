window.onload = () => {
  $(document).ready(function () {
    const position = [40.6737287, -73.9184335];
    var mymap = L.map("map").setView(position, 13);

    var token =
      "pk.eyJ1IjoiZWNzcGV0cmEiLCJhIjoiY2tuajUxdGdhM2ZlczJubXE4N3VsbXAzMiJ9.63uR5z23i3OFgyKpzxEJmA";

    var marker = L.marker(position).addTo(mymap);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/light-v10",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoiZWNzcGV0cmEiLCJhIjoiY2tuajUxdGdhM2ZlczJubXE4N3VsbXAzMiJ9.63uR5z23i3OFgyKpzxEJmA",
      }
    ).addTo(mymap);

    var circle = L.circle(position, {
      color: "#7e5aff",
      fillColor: "#7e5aff",
      fillOpacity: 0.2,
      radius: 500,
    }).addTo(mymap);

    mymap.scrollWheelZoom.disable();
  });
};

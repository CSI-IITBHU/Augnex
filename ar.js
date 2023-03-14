var centre = new L.LatLng(25.260644, 82.986878);
var map = null;

var data = [

  {
    placeArea: "limdicorner",
    color: "#d09f5f",
    name: "lc",
    objects: [
      {
        name: "Welcomelc",
        center: { lat: 25.2606867544037,  long: 82.98686136907517 },
        model: "./models/Welcome.gltf",
        scale: "10 10 10",
        render: false,
        rotation: "0 0 0",
        animation: true
      }
    ],
    points: [
      new L.LatLng(25.26061426290426, 82.98664975620035),
      new L.LatLng(25.260802740712787, 82.98654715601863),
      new L.LatLng(25.260910027950047, 82.98682930651839),
      new L.LatLng(25.260941924137423, 82.98706015692726),
      new L.LatLng(25.2607447475721, 82.98716596336467),
      new L.LatLng(25.260573667645687, 82.98721726345555),
      new L.LatLng(25.26045478145317, 82.98693511295579),
      new L.LatLng(25.260431584133755, 82.98668181875715)
    ]
  },
  {
      placeArea: "dgcorner",
      color: "#4A5899",
      area: "dgcorner",
      objects: [
        {
          name: "dg",
          center: { lat: 25.263173204198132,  long: 82.98645562474377 },
          model: "./models/dg.gltf",
          scale: "10 10 10",
          render: false,
          rotation: "0 180 0"
        }
      ],
      points: [
        new L.LatLng(25.26344990496827, 82.98606855465376),
        new L.LatLng(25.263157859082927, 82.98606855465376),
        new L.LatLng(25.262766893330284, 82.98617272640523),
        new L.LatLng(25.262828129013265, 82.98650086742234),
        new L.LatLng(25.26287052292953, 82.9867352538631),
        new L.LatLng(25.26318612161867, 82.9867352538631),
        new L.LatLng(25.26343577373194, 82.98690192866546),
        new L.LatLng(25.263501719487454, 82.98636544414543)
      ]
    },
];

var options = {
  enableHighAccuracy: true
};

window.onload = () => {


  const scene = document.querySelector("a-scene");
  // map = new MapmyIndia.Map("map", {
  //   center: centre,
  //   zoomControl: true,
  //   hybrid: true
  // });

  function createPolygon(area) {
    area.name = new L.polygon(area.points, { color: area.color });
    // map.addLayer(area.name);
  }


  /*

  two parameters: userL and layer. 
  The function checks whether a given point (userL) lies within a polygon represented by the layer.

  */
  function isPointInLayer(user, layer) {

    var within = false;
    var x = user.latitude;
    var y = user.longitude;
    for (var ii = 0; ii < layer.getLatLngs().length; ii++) {
      var polyPoints = layer.getLatLngs()[ii];
      for ( var i = 0, j = polyPoints.length - 1; i < polyPoints.length;  j = i++ ) {

        var xi = polyPoints[i].lat,
          yi = polyPoints[i].lng;
        var xj = polyPoints[j].lat,
          yj = polyPoints[j].lng;

        var intersect =
         (  ( yi > y ) != ( yj > y ) ) && ( x < ( (xj - xi) * (y - yi) ) / (yj - yi) + xi ) ;
        if (intersect) within = !within;
      }
    }
    return within;
  }

  function renderplace() {

    navigator.geolocation.getCurrentPosition(postion => {
      data.forEach(area => {

        // check wether the user is in current area 
        if (isPointInLayer(postion.coords, area.name)) {
          if (area.objects.length > 0) {
            area.objects.forEach(object => {
              if (!object.render) {
                const icon = document.createElement("a-entity");
                icon.setAttribute(
                  "gps-entity-place",
                  `latitude: ${object.center.lat}; longitude: ${object.center.long};`
                );
                icon.setAttribute("name", object.name);
                icon.setAttribute("gltf-model", object.model);
                icon.setAttribute("scale", object.scale);
                icon.setAttribute("rotation", object.rotation);
                icon.setAttribute("id", object.name);
                if (object.animation) {
                  icon.setAttribute("animation-mixer", "");
                  icon.setAttribute(
                    "animation",
                    "property: rotation; to: 0 360 0;loop:true; dur: 8000"
                  );
                }

                // icon.setAttribute("position", "0 200 0");
                // icon.setAttribute(
                //   ("animation",
                //   "property: rotation; dur: 10000; to: 0 360 0; loop: true")
                // );
                scene.appendChild(icon);
                object.render = !object.render;
              }
            });
          }
        } else {
          if (area.objects.length > 0) {
            area.objects.forEach(object => {
              if (object.render) {
                object.render = !object.render;
                var element = document.getElementById(object.name);
                element.parentNode.removeChild(element);
              }
            });
          }
        }
      });
    });
  }

  data.forEach(area => {
    createPolygon(area);
  });

  renderplace();

  setInterval(() => {
    renderplace();
  }, 5000);
};

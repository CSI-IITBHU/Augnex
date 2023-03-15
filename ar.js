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
        model: "./models/welcome.gltf",
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
          model: "./models/sntc.gltf",
          scale: "10 10 10",
          render: false,
          rotation: "0 180 0",
          // animation: true
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
    {
      placeArea: "iitgate",
      color: "#4A5899",
      area: "iitgate",
      objects: [
        {
          name: "iitgate",
          center: { lat: 25.26332959106015, long: 82.9896579683655 },
          model: "./models/sntc.gltf",
          scale: "10 10 10",
          render: false,
          rotation: "0 180 0",
          // animation: true
        }
      ],
      points: [
        new L.LatLng(25.263023057332525, 82.98949549543961),
        new L.LatLng(25.26305599074533, 82.98967757716694),
        new L.LatLng(25.26301799065284, 82.98983724883554),
        new L.LatLng(25.263352391058564, 82.98989607523976),
        new L.LatLng(25.26356012418014, 82.98988206895305),
        new L.LatLng(25.263570257494067, 82.98965796836555),
        new L.LatLng(25.26356012418014, 82.98939465017524),
        new L.LatLng(25.26331945772617, 82.9893918489179)
      ]
    },
    {
      placeArea: "sb",
      color: "#4A5899",
      area: "sb",
      objects: [
        {
          name: "sb",
          center: { lat: 25.260542013023645,  long: 82.99395346061661 },
          model: "./models/dg.gltf",
          scale: "10 10 10",
          render: false,
          rotation: "0 180 0",
          // animation: true
        }
      ],
      points: [
        new L.LatLng(25.260664779055713, 82.99372953283307),
        new L.LatLng(25.260824240634363, 82.99388426472956),
        new L.LatLng(25.260801460421668, 82.99403179979363),
        new L.LatLng(25.260586675348915, 82.99422971268447),
        new L.LatLng(25.260381652879623, 82.99422971268447),
        new L.LatLng(25.260235208046744, 82.99405698870702),
        new L.LatLng(25.260355618255566, 82.9938338869028),
        new L.LatLng(25.26052484321211, 82.99369354867109)
      ]
    },
    {
      placeArea: "ncc",
      color: "#4A5899",
      area: "ncc",
      objects: [
        {
          name: "ncc",
          center: { lat: 25.261432365840623, long: 82.99002617994616 },
          model: "./models/dg.gltf",
          scale: "10 10 10",
          render: false,
          rotation: "0 180 0",
          // animation: true
        }
      ],
      points: [
        new L.LatLng(25.26154423446655, 82.98982399359967),
        new L.LatLng(25.26139130452512, 82.9898404339878),
        new L.LatLng(25.261234126328983, 82.98988505789846),
        new L.LatLng(25.261270234851512, 82.9900893884367),
        new L.LatLng(25.26133183171808, 82.99019977389989),
        new L.LatLng(25.261459273411752, 82.990145755481732),
        new L.LatLng(25.261588838996563, 82.99010348019796),
        new L.LatLng(25.261565474720978, 82.98999074610789)
      ]
    },
    {
      placeArea: "rajputana",
      color: "#4A5899",
      area: "rajputana",
      objects: [
        {
          name: "rajputana",
          center: { lat: 25.261590266955793,  long: 82.98725137760731 },
          model: "./models/dg.gltf",
          scale: "10 10 10",
          render: false,
          rotation: "0 180 0",
          // animation: true
        }
      ],
      points: [
        new L.LatLng(25.261816924512374, 82.98690188166596),
        new L.LatLng(25.261573631522126, 82.98691107892756),
        new L.LatLng(25.2612866699327, 82.98698235770509),
        new L.LatLng(25.261317861442674, 82.98733645227723),
        new L.LatLng(25.261376085573158, 82.9876422612259),
        new L.LatLng(25.261611061244672, 82.98761696875646),
        new L.LatLng(25.26187722782771, 82.98756868313298),
        new L.LatLng(25.261898022067427, 82.98723758171487)
      ]
    },
    {
      placeArea: "hostel",
      color: "#d09f5f",
      name: "hostel",
      objects: [
        {
          name: "WelcomeHostel",
          center: { lat: 25.262288647629248, long:  82.98402143668886 },
          model: "./models/sntc.gltf",
          scale: "5 5 5",
          render: false,
          rotation: "0 0 0",
          animation: true
        }
      ],
      points: [
        new L.LatLng(25.262723994466715, 82.9834539405192),
        new L.LatLng(25.262769650851013, 82.98395878788068),
        new L.LatLng(25.262778782125825, 82.98437612836616),
        new L.LatLng(25.26231613000505, 82.98443671004954),
        new L.LatLng(25.261877826369734, 82.9844434413477),
        new L.LatLng(25.26186260746507, 82.98406312300204),
        new L.LatLng(25.261838257213665, 82.9835515443424),
        new L.LatLng(25.262264385908253, 82.98348759700995)
      ]
    },
    {
      placeArea: "hostelout",
      color: "#d09f5f",
      name: "hostelout",
      objects: [
        {
          name: "WelcomeHostelout",
          center: { lat: 25.262896018343923,  long:  82.98392252212467 },
          model: "./models/augnex.gltf",
          scale: "5 5 5",
          render: false,
          rotation: "0 0 0",
          animation: true
        }
      ],
      points: [
        new L.LatLng(25.26298372980717, 82.98363718218208),
        new L.LatLng(25.26286805235681, 82.98365686079882),
        new L.LatLng(25.262746018883103, 82.98370746295612),
        new L.LatLng(25.26277144253357, 82.98393376704851),
        new L.LatLng(25.262762544256503, 82.98414742060159),
        new L.LatLng(25.262871865900884, 82.98414039252417),
        new L.LatLng(25.26300025514823, 82.98412914760033),
        new L.LatLng(25.262995170428134, 82.98389722104602)
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

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
        center: { lat: 25.260675656207564,  long:82.9868691026328 },
        model: "./models/Welcome.gltf",
        scale: "10 10 10",
        render: false,
        rotation: "0 0 0",
        animation: true ,
        height : false 
      }
    ],
    points: [
      new L.LatLng(25.261066216109096, 82.98619438243271),
      new L.LatLng(25.260514378151235, 82.98619771678942),
      new L.LatLng(25.259886437528948, 82.98659551133285),
      new L.LatLng(25.259961172833457, 82.98712513906656),
      new L.LatLng(25.260144613840453, 82.98766979170054),
      new L.LatLng(25.260874978064585, 82.98775618487697),
      new L.LatLng(25.26119429871726, 82.98720401979288),
      new L.LatLng(25.261252048107334, 82.98674576033531)
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
          model: "./models/cube_dg.gltf",
          scale: "1 1 1",
          render: false,
          rotation: "0 0 0",
          animation: true ,
          height : true 
        }
      ],
      points: [
        new L.LatLng(25.263919670315392, 82.98577210602198),
        new L.LatLng(25.263150649683528, 82.9856805295158),
        new L.LatLng(25.262352046179462, 82.985778647201),
        new L.LatLng(25.262352046179462, 82.98657012986159),
        new L.LatLng(25.26251176730051, 82.98741394195427),
        new L.LatLng(25.263203889730377, 82.98745973020736),
        new L.LatLng(25.263943332411426, 82.9873354478061),
        new L.LatLng(25.263978825546847, 82.98643930628131)
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
          model: "./models/cube_iitgate.gltf",
          scale: "1 1 1",
          render: false,
          rotation: "0 0 0",
          animation: true ,
          height : true 
        }
      ],
      points: [
        new L.LatLng(25.26393790504465, 82.98880605899099),
        new L.LatLng(25.26328635789667, 82.9887075793811),
        new L.LatLng(25.262419185405605, 82.98878532644153),
        new L.LatLng(25.262517621513524, 82.98980640450198),
        new L.LatLng(25.262653556959897, 82.99048539549649),
        new L.LatLng(25.263366043706757, 82.99048539549649),
        new L.LatLng(25.26401290305308, 82.99052167745803),
        new L.LatLng(25.263947279798217, 82.98965609351846)
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
          model: "./models/Welcome.gltf",
          scale: "10 10 10",
          render: false,
          rotation: "0 0 0",
          animation: true ,
          height : false 
        }
      ],
      points: [
        new L.LatLng(25.261049868271662, 82.9934202994373),
        new L.LatLng(25.26050507895721, 82.9938061461079),
        new L.LatLng(25.259953165721427, 82.99423923930958),
        new L.LatLng(25.260391135785007, 82.99512511176758),
        new L.LatLng(25.260854029257032, 82.99502668149445),
        new L.LatLng(25.26153412338808, 82.99456209060537),
        new L.LatLng(25.261395256309555, 82.99417624393479),
        new L.LatLng(25.26119585714982, 82.993695904202)
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
          model: "./models/augnex.gltf",
          scale: "4 4 4",
          render: false,
          rotation: "0 0 0",
          animation: true ,
          height : true 
        }
      ],
      points: [
        new L.LatLng(25.261616019300124, 82.98889250701649),
        new L.LatLng(25.261195857166914, 82.98897912565681),
        new L.LatLng(25.260419621605177, 82.98934134906186),
        new L.LatLng(25.260505078974308, 82.99040439601146),
        new L.LatLng(25.260900318524286, 82.99109734513414),
        new L.LatLng(25.26166942963662, 82.99098710322825),
        new L.LatLng(25.26201481591215, 82.99057763329212),
        new L.LatLng(25.26194004164717, 82.98988074695849)
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
          model: "./models/sntc.gltf",
          scale: "4 4 4",
          render: false,
          rotation: "0 0 0",
          animation: true,
          height : false 
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
    // {
    //   placeArea: "hostel",
    //   color: "#d09f5f",
    //   name: "hostel",
    //   objects: [
    //     {
    //       name: "WelcomeHostel",
    //       center: { lat: 25.262290041181625,  long:  82.98402019672666 },
    //       model: "./models/Welcome.gltf",
    //       scale: "10 10 10",
    //       render: false,
    //       rotation: "0 0 0",
    //       animation: true
    //     }
    //   ],
    //   points: [
    //     new L.LatLng(25.262723994466715, 82.9834539405192),
    //     new L.LatLng(25.262769650851013, 82.98395878788068),
    //     new L.LatLng(25.262778782125825, 82.98437612836616),
    //     new L.LatLng(25.26231613000505, 82.98443671004954),
    //     new L.LatLng(25.261877826369734, 82.9844434413477),
    //     new L.LatLng(25.26186260746507, 82.98406312300204),
    //     new L.LatLng(25.261838257213665, 82.9835515443424),
    //     new L.LatLng(25.262264385908253, 82.98348759700995)
    //   ]
    // },
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
                if(object.height){
                  icon.setAttribute("position" , "0 100 0");
                }
                if (object.animation) {
                  icon.setAttribute("animation-mixer", "");
                  icon.setAttribute(
                    "animation",
                    "property: rotation; to: 0 360 0;loop:true; dur: 13000"
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

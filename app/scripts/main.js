console.log('\'Allo \'Allo!');

/*
var map = new Datamap({
  element: document.getElementById('container'),
  scope: 'usa'
  setProjection: function(element) {
    var projection = d3.geo.equirectangular()
      .center([0, 0])
      .rotate([0, 0])
      .scale(190);
      //.translate([element.offsetWidth / 2, element.offsetHeight / 2]);
    var path = d3.geo.path()
      .projection(projection);

    return {path: path, projection: projection};
  }
});*/


function whenClicked(e) {
  // e = event
  //console.log(e);
  console.log(e.target);
  e.target.properties["mia"] = "mia";
  console.log(e.target.properties);
  e.target.setStyle({fillColor: '#dddddd'});

  // You can make your ajax call declaration here
  //$.ajax(...
}

function onEachFeature(feature, layer) {
    //bind click
    layer.on({
        click: whenClicked
    });
}

L.mapbox.accessToken = 'pk.eyJ1IjoiYmV0bzQ4MTIiLCJhIjoiY2l5NHExczhiMDAzcjJ3cXNrNWZhNGpmeiJ9.daCLpyF1SN7Rpy_QTtbPnw'

 var map = L.mapbox.map('container', 'mapbox.streets').setView([38, -90], 3),

 layer = L.geoJson(null, { style: { color: '#333', weight: 1 }, onEachFeature: onEachFeature}).addTo(map);

//map.addLayer(layer)

d3.json('us.json', function(error, data) {
  var neighborhoods = topojson.feature(data, data.objects.counties)
  layer.addData(neighborhoods);
})

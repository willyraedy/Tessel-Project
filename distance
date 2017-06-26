var rad = function(x) {
  return x * Math.PI / 180;
};

function getMiles(i) {
     return i*0.000621371192;
}
function getMeters(i) {
     return i*1609.344;
}

function getRound(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

//Haversine function to calculate distance
var getDistance = function(p1, p2) {
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(p2.lat - p1.lat);
  var dLong = rad(p2.lng - p1.lng);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return 'Distance in km ' + getRound(d/1000,1)  + ' , and the distance in miles ' + getRound(getMiles(d),1);
};

var p1 = {
  lat: 41.8889455,
  lng: -87.63562069999999
};

var p2 = {
  lat: 41.948373,
  lng: -87.655324
};

console.log(getDistance(p1, p2));

var gps = require('wifi-location');

gps.getTowers(function(err, towers) {

  gps.getLocation(towers, function(err, loc) {
    console.log(loc);
    // Location gives the following
    // { accuracy: 95,
    //   latitude: 41.8889455,
    //   longitude: -87.63562069999999 }
    
  });

});

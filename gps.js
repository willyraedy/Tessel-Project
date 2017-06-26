// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/**********************************************************
This gps example logs a stream of data:
coordinates, detected satellites, timestamps, and altitude.
For best results, try it while outdoors.
**********************************************************/

var tessel = require('tessel');
var gpsLib = require('gps-a2235h');

var gps = gpsLib.use(tessel.port['A']);

// Wait until the module is connected
gps.on('ready', function () {
  console.log('GPS module powered and ready. Waiting for satellites...');
  // Emit coordinates when we get a coordinate fix
  gps.on('coordinates', function (coords) {

    var reducedLat = coords.lat[0] + coords.lat[1] / 60
    var reducedLong = coords.lon[0] + coords.lon[1] / 60


    // where we check things!!!!!!!!!!!!!!!!!!
    if (true){
    setInterval(function () {
      tessel.led[2].toggle()
      tessel.led[3].toggle()
    },100)
    }
    console.log('Lat:', coords.lat, '\tLon:', coords.lon, '\tTimestamp:', coords.timestamp);
  });

  // Emit altitude when we get an altitude fix
  gps.on('altitude', function (alt) {

    // test blinker
    // if (true){
    // setInterval(function () {
    //   tessel.led[2].toggle()
    //   tessel.led[3].toggle()
    // },100)
    // }

    console.log('Got an altitude of', alt.alt, 'meters (timestamp: ' + alt.timestamp + ')');
  });

  // Emitted when we have information about a fix on satellites
  // gps.on('fix', function (data) {
  //   console.log(data.numSat, 'fixed.');
  // });

  gps.on('dropped', function(){
    // we dropped the gps signal
    console.log("gps signal dropped");
  });
});

gps.on('error', function(err){
  console.log("got this error", err);
});


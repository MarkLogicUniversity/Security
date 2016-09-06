var doc = cts.doc("/secret/44444.json");

var lat = doc.toObject().latitude;
var lon = doc.toObject().longitude;

var request = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon

var response = xdmp.httpGet(request);

response;
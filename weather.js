if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(success,error);

}
else {
$('#error').html('Geolocation is not supported');
$('#img').attr('src', 'images/what.png');
}

function error() {
  $( ".spinner" ).hide();
$('#img').attr('src', 'images/what.png');
$('#error').html('Location not found. Refresh?');
}

function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

var url = 'https://api.wunderground.com/api/'+ '27c1a823ab52d0a7' +'/forecast/geolookup/conditions/q/' + latitude + ',' + longitude + '.json';




$.getJSON(url, function (json) {

    // Set the variables from the results array
    var img = json.current_observation.icon;
    var time = json.current_observation.observation_time;
    var latjson = json.current_observation.display_location.latitude;
    var longjson = json.current_observation.display_location.longitude;
    var loc = latjson + ',' +longjson;
    var town = json.current_observation.display_location.full;

   var finalurl = 'images/' + img + '.png';


$( ".spinner" ).hide();

$('#img').attr('src', finalurl);

$('#debug').html('DEBUG' + ' _' + img + ' _' + loc + ' _' + town + ' _' + time);

console.log('Lat_long: '+loc);
console.log('JSON_url: ' +url); 
console.log('Weather_status: ' + img);
console.log('img_path: ' + finalurl);
console.log(time);
console.log('Location: ' + town);

});

      }

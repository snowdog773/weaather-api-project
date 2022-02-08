const options = {
    enableHighAccuracy: true,
    timeout: 5000,
  };

navigator.geolocation.getCurrentPosition(success, failure, options);

function success(position) {
 
    //api call for open weather
    console.log(position);
    const Loc = document.getElementById("location");
    Loc.textContent = `Your current location is ${position.coords.latitude} latitude and ${position.coords.longitude}
    longitude.`;
    document.getElementById("map").innerHTML = `<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=${position.coords.latitude},${position.coords.longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net"></a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>`;
    fetch (`http://api.openweathermap.org/data/2.5/weather?lat={${position.coords.latitude}}&lon={${position.coords.longitude}}&appid={#################}`);

}

function failure() {
    console.log("sorry, you didn't want to share")
}

// navigator.geolocation.getCurrentPosition(success, failure);


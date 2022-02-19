const options = {
    enableHighAccuracy: true,
    timeout: 5000,
  };

navigator.geolocation.getCurrentPosition(success, failure, options);

function success(position) {
 
    
    document.getElementById("map").innerHTML = 
    `<iframe src="https://maps.google.com/maps?q=${
        position.coords.latitude},${position.coords.longitude
        }&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no"></iframe>`
    let req = new XMLHttpRequest();
    req.open("GET", `https://api.openweathermap.org/data/2.5/weather?lat=${
        position.coords.latitude
    }&lon=${
        position.coords.longitude
    }&appid=1826f92082fe718a7e0692c911e03e1d`);

    req.responseType = "json";
    req.send(null);
    req.addEventListener("load", e => {
    console.log(req.response);
    document.getElementById("location").textContent = 
    `Your current location is ${position.coords.latitude} latitude 
    and ${position.coords.longitude} longitude. Your nearest weather station is ${req.response.name},`;
    document.getElementById("weather-data").innerHTML =
    `<ul>
        <li>Temperature : ${ (req.response.main.temp - 273).toFixed(2) } &#176;C  </li>
        <li>Cloud Cover :  ${ req.response.weather[0].description}</li>
        <li>Wind Speed : ${ req.response.wind.speed} MPH</li>
        <li>Gusting Up To : ${ req.response.wind.gust} MPH</li>
        <li>Wind Direction : ${ req.response.wind.deg} degrees</li>
        <li>Pressure : ${ req.response.main.pressure } mBar </li>
        <li>Humidity : ${ req.response.main.humidity } %</li>
    </ul>`;

}   
)
}

function failure() {
    alert("sorry, you didn't want to share")
}
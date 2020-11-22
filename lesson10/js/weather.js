const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=036f9f0a4afb3430bbf52e171aad4ae6"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const curdesc = document.querySelector('#current-desc');
        const curtemp = document.querySelector('#current-temp');
        const humidity = document.querySelector('#humidity');
        const windspeed = document.querySelector('#wind-speed');
        const windchill = document.querySelector('#wind-chill');

        curdesc.innerHTML = jsObject.weather[0].description;
        curtemp.innerHTML = jsObject.main.temp;
        humidity.innerHTML = jsObject.main.humidity;
        windspeed.innerHTML = jsObject.wind.speed;
        windchill.innerHTML = windChill(jsObject.main.temp, jsObject.wind.speed);

    });

function windChill(temperature, speed) {

    if (temperature <= 50 && speed > 3) {

        let wc = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temperature * Math.pow(speed, 0.16));

        return Math.round(wc) + ' °F';
    } else {
        return "N/A"
    }
}
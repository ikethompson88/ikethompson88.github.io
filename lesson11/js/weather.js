// Current Weather

if (document.getElementById("location-title").innerHTML.indexOf("Preston") != -1) {
    apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=036f9f0a4afb3430bbf52e171aad4ae6";
} else if (document.getElementById("location-title").innerHTML.indexOf("Soda") != -1) {
    apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=036f9f0a4afb3430bbf52e171aad4ae6";
} else {
    apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681&units=imperial&appid=036f9f0a4afb3430bbf52e171aad4ae6";
}

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const curdesc = document.querySelector('#current-desc');
        const curtemp = document.querySelector('#current-temp');
        const humidity = document.querySelector('#humidity');
        const windspeed = document.querySelector('#wind-speed');
        const windchill = document.querySelector('#wind-chill');

        curdesc.innerHTML = jsObject.weather[0].description;
        curtemp.innerHTML = Math.round(jsObject.main.temp);
        humidity.innerHTML = jsObject.main.humidity;
        windspeed.innerHTML = Math.round(jsObject.wind.speed);
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

// Five Day forecast

if (document.getElementById("location-title").innerHTML.indexOf("Preston") != -1) {
    forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=036f9f0a4afb3430bbf52e171aad4ae6";
} else if (document.getElementById("location-title").innerHTML.indexOf("Soda") != -1) {
    forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=036f9f0a4afb3430bbf52e171aad4ae6";
} else {
    forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=42.0380399&lon=-111.4048681&units=imperial&appid=036f9f0a4afb3430bbf52e171aad4ae6";
}

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const forecast = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));


        let day = 0;
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        forecast.forEach(x => {
            const d = new Date(x.dt_txt);
            document.getElementById(`day${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`forecast${day+1}`).textContent = Math.round(x.main.temp) + ' °F';
            document.getElementById(`icon${day+1}`).textContent = x.weather[0].description;
            
            const imagesrc = 'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png';
            const imagedesc = x.weather[0].description;
            
            document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${day+1}`).setAttribute('alt', imagedesc);
            
            day++;
        });

    });
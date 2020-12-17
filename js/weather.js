// Current Weather

apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=20.4230&lon=-86.9223&units=imperial&appid=036f9f0a4afb3430bbf52e171aad4ae6";


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const curdesc = document.querySelector('#desc');
        const curtemp = document.querySelector('#temp');
        const humidity = document.querySelector('#humidity');

        curdesc.innerHTML = jsObject.weather[0].description;
        curtemp.innerHTML = Math.round(jsObject.main.temp);
        humidity.innerHTML = jsObject.main.humidity;

    });

// Three Day forecast

forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=20.4230&lon=-86.9223&units=imperial&appid=036f9f0a4afb3430bbf52e171aad4ae6";

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const forecast = jsObject.list.filter(x => x.dt_txt.includes("12:00:00"));

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
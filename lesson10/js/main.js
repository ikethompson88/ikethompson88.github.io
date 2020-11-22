const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=036f9f0a4afb3430bbf52e171aad4ae6"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const curdesc = document.querySelector('#current-desc');
        const curtemp = document.querySelector('#current-temp');
        const humidity = document.querySelector('#humidity');
        const windspeed = document.querySelector('#wind-speed');

        curdesc.innerHTML = jsObject.weather[0].description;
        curtemp.innerHTML = jsObject.main.temp;
        humidity.innerHTML = jsObject.main.humidity;
        windspeed.innerHTML = jsObject.wind.speed;

    });

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=036f9f0a4afb3430bbf52e171aad4ae6"


// Footer

let date = new Date();
let updated = document.lastModified;

document.getElementById("year").innerHTML = date.getFullYear();
document.getElementById("last-updated").innerHTML = updated;
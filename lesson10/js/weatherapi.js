const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=036f9f0a4afb3430bbf52e171aad4ae6"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const curtemp = document.querySelector('#current-temp');
        const iconsource = document.querySelector('#imagesrc');
        const weathericon = document.querySelector('#icon');



        curtemp.innerHTML = jsObject.main.temp;
        iconsource.textContent = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const isrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

        weathericon.setAttribute('src', isrc)
        weathericon.setAttribute('alt', jsObject.weather[0].description);

    });
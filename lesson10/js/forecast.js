const apiforecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=036f9f0a4afb3430bbf52e171aad4ae6"

fetch(apiforecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const forecast = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
        const weathericon = document.querySelector('#icon');


        let day = 0;
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        forecast.forEach(x => {
            const d = new Date(x.dt_txt);
            document.getElementById(`day${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`forecast${day+1}`).textContent = Math.round(x.main.temp) + ' °F';
            const imagesrc = 'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png';
            document.querySelectorAll(".five-day-forecast img")[day].src= imagesrc;
            day++;
        });

    });
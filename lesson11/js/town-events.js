const eventsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(eventsURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const townEvents = jsonObject['towns'];

        if (document.getElementById("location-title").innerHTML.indexOf("Preston") != -1) {
            var eventtown = townEvents.filter(index => index.name.includes('Preston'));
        } else if (document.getElementById("location-title").innerHTML.indexOf("Soda") != -1) {
            var eventtown = townEvents.filter(x => x.name.includes('Soda'));
        } else {
            var eventtown = townEvents.filter(x => x.name.includes('Fish'));
        }

        console.log(eventtown);

        for (i = 0; i < eventtown[0].events.length; i++) {
            document.getElementById("events").innerHTML += "<p>" + eventtown[0].events[i] + "</p>";
        }

    });
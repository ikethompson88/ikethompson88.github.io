const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); //temporary checking for valid response and data parsing
        const towndata = jsonObject['towns'];
        for (let i = 0; i < towndata.length; i++) {
            if (towndata[i].name == "Preston" || towndata[i].name == "Fish Haven" || towndata[i].name == "Soda Springs") {

                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let year = document.createElement('p');
                let population = document.createElement('p');
                let rainfall = document.createElement('p');
                let image = document.createElement('img');

                h2.textContent = towndata[i].name;
                h3.textContent = towndata[i].motto;
                year.textContent = 'Year Founded: ' + towndata[i].yearFounded;
                population.textContent = 'Population: ' + towndata[i].currentPopulation;
                rainfall.textContent = 'Annual Rainfall: ' + towndata[i].averageRainfall;
                image.setAttribute('src', towndata[i].photo);
                image.setAttribute('alt', 'Photo of ' + towndata[i].name);

                card.appendChild(h2);
                card.appendChild(h3);
                card.appendChild(year);
                card.appendChild(population);
                card.appendChild(rainfall);
                card.appendChild(image);

                document.querySelector('div.cards').appendChild(card);
            }
        }
    });

let date = new Date();
let updated = document.lastModified;

document.getElementById("year").innerHTML = date.getFullYear();
document.getElementById("last-updated").innerHTML = updated;
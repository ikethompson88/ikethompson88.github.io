const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towndata = jsonObject['towns'];
        for (let i = 0; i < towndata.length; i++) {
            if (towndata[i].name == "Preston" || towndata[i].name == "Fish Haven" || towndata[i].name == "Soda Springs") {

                let card = document.createElement('section');
                let townImage = document.createElement('div');
                let townInfo = document.createElement('div');
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
                rainfall.textContent = 'Annual Rainfall: ' + Math.round(towndata[i].averageRainfall) + ' Inches';
                if (towndata[i].name == "Preston") {
                    image.setAttribute('src', src = "images/preston-home-small.jpg");
                    image.setAttribute('alt', 'Preston, Idaho');
                } else if (towndata[i].name == "Fish Haven") {
                    image.setAttribute('src', src = "images/fish-haven-home-small.jpg");
                    image.setAttribute('alt', 'Bear Lake near Fish Haven, Idaho');
                } else {
                    image.setAttribute('src', src = "images/soda-springs-home-small.jpg");
                    image.setAttribute('alt', 'Soda Springs, Gyser');
                }
                townInfo.appendChild(h2);
                townInfo.appendChild(h3);
                townInfo.appendChild(year);
                townInfo.appendChild(population);
                townInfo.appendChild(rainfall);
                townImage.appendChild(image);

                card.appendChild(townInfo);
                card.appendChild(townImage);

                document.querySelector('div.cards').appendChild(card);
            }
        }
    });
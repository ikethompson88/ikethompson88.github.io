const requestURL = 'https://raw.githubusercontent.com/ikethompson88/ikethompson88.github.io/master/data/rentals.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const rentals = jsonObject['rentals'];
        for (let i = 0; i < rentals.length; i++) {

            let row = document.createElement('tr');
            let type = document.createElement('td');
            let max = document.createElement('td');
            let resHalf = document.createElement('td')
            let resFull = document.createElement('td')
            let walkHalf = document.createElement('td')
            let walkFull = document.createElement('td')

            type.textContent = rentals[i].vehicle;
            max.textContent = rentals[i].max;
            resHalf.textContent = rentals[i].rHalf;
            resFull.textContent = rentals[i].rFull;
            walkHalf.textContent = rentals[i].wHalf;
            walkFull.textContent = rentals[i].wFull;

            row.appendChild(type);
            row.appendChild(max);
            row.appendChild(resHalf);
            row.appendChild(resFull);
            row.appendChild(walkHalf);
            row.appendChild(walkFull);

            document.querySelector('tbody.body').appendChild(row);

        }
    });
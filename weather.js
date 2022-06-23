const apiKey = "0ffa5a62469461b23ba6b8586a9aa0c9";
// const _ = require('lodash');

async function search() {
    const phrase = document.querySelector("input[type='text']").value;
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${phrase}&limit=5&appid=${apiKey}`);
    const data = await response.json();
    const ul = document.querySelector('form ul');
    ul.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        const {name,lat,lon,country} = data[i];
        ul.innerHTML += `<li 
        data-lat="${lat}" 
        data-lon = ${lon} 
        data-name=${name}>
        ${name} <span>${country}</span></li>`

    }
    console.log(data);
}

const debouncedSerch  = _.debounce(() => {
    search();
}, 600);


document.querySelector("input[type='text']").addEventListener('keyup', debouncedSerch);







//***********
//данные из строки поиска
//***********
// document.querySelector("input[type='text']").addEventListener('keyup', (event) => {
//     console.log(event.target.value);
// });

// https://youtu.be/J4WSmVX6Lhg?t=621
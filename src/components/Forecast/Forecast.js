import React from 'react';

const Forecast = () => {
   function getForecast() {
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=London%252Cuk", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "6decb57ec8msh79575ea156ad89cp13a440jsn315cad8dab09"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });
   }
   return (
       // JSX code will go here
   )
}
export default Forecast;
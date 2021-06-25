let apiKey="9c5c5a276f0866ee408fc9ef3901f7ba";

let DOMSTRINGS={
    location= document.querySelector('.location'),
    temperature= document.querySelector('.temperature'),
    description= document.querySelector('.description'),
    humidity= document.querySelector('.humidity'),
    wind= document.querySelector('.wind'),
    weatherIcon= document.querySelector('#weather-icon')
};

function fetchWeather(city){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='
    + city 
    +'&units=metric&appid='
    + apiKey)
    .then (Response=> Response.json())
    .then(data => console.log(data));
}

function displayWeather(data){
    DOMSTRINGS.city= data.name;
}
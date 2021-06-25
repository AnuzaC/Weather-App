let apiKey="9c5c5a276f0866ee408fc9ef3901f7ba";
let city;

let DOMS={
    body: document.querySelector('body'),
    input: document.querySelector('input'),
    button: document.querySelector('.search-button'),
    location: document.querySelector('.location'),
    temperature: document.querySelector('.temperature'),
    description: document.querySelector('.description'),
    humidity: document.querySelector('.humidity'),
    wind: document.querySelector('.wind'),
    weatherIcon: document.querySelector('#weather-icon'),
    errorMessage: document.querySelector('.err')
};
//DOMS.button.onclick= function(){this.fetchWeather(DOMS.input.value)};
DOMS.button.addEventListener("click",()=>{
    this.fetchWeather(DOMS.input.value);
    alert(DOMS.input.value);
})
function fetchWeather(city){
    try{
        fetch('https://api.openweathermap.org/data/2.5/weather?q='
        + city 
        +'&units=metric&appid='
        + apiKey)
        .then (response=> response.json())
        .then(data => this.displayWeather(data));
    }

    catch(err){ 
        DOMS.errorMessage.innerHTML="City not found";
    }
}

function displayWeather(data){
    // const {name} =data;
    // const { description, icon, id} = data.weather[0];
    // const { temp,humidity }= data.main;
    // const { speed } = data.wind;

    const nameValue =data['name'];
    const descriptionValue = data['weather'][0]['description'];
    const iconValue = data['weather'][0]['icon'];
    const tempValue = data['main']['temp'];
    const humidityValue = data['main']['humidity'];
    const speedValue = data['wind']['speed'];
    const weatherID = data['weather'][0]['id'];

    console.log(nameValue, descriptionValue, iconValue, tempValue,humidityValue, speedValue, weatherID);

    DOMS.location.innerHTML="Weather in "+ nameValue;
    DOMS.temperature.innerHTML=tempValue+"&deg; C";
    DOMS.weatherIcon.src='https://openweathermap.org/img/wn/'+ iconValue+'.png';
    DOMS.description.innerHTML=descriptionValue;
    DOMS.humidity.innerHTML="Humidity: "+humidityValue+"%";
    DOMS.wind.innerHTML="Wind Speed: "+speedValue+" km/hr";

    // ------------------Background----------------------
    
    if (weatherID<250){
        DOMS.body.style.backgroundImage="url('./img/photo-1519110437047-c6488cf2051d.jpg')";
    }
    else if (weatherID<350){
        DOMS.body.style.backgroundImage="url('./img/photo-1504608524841-42fe6f032b4b.jpg')";
    }
    else if (weatherID<550){
        DOMS.body.style.backgroundImage="url('./img/photo-1532280559594-e64bc3b12f8b.jpg')";
    }
    else if (weatherID<650){
        DOMS.body.style.backgroundImage="url('./img/photo-1486944670663-e0a2ea5018eb.jpg')";
    }
    else if (weatherID<850){
        DOMS.body.style.backgroundImage="url('./img/photo-1606836131166-5cb137786a8d.jpg')";
    }
    else if (weatherID==850){
        DOMS.body.style.backgroundImage="url('./img/photo-1529348915581-73628f0cf212.jpg')";
    }
    else if (weatherID>850){
        DOMS.body.style.backgroundImage="url('./img/photo-1484383707950-89c8d3276e53.jpg')";
    }
}

let apiKey="9c5c5a276f0866ee408fc9ef3901f7ba";
let body= document.querySelector("body");
let input= document.querySelector("input");
let button= document.querySelector(".search-button");
let placeName= document.querySelector(".place-name");
let temperature= document.querySelector(".temperature");
let description= document.querySelector(".description");
let humidity= document.querySelector(".humidity");
let wind= document.querySelector(".wind");
let weatherIcon= document.querySelector("#weather-icon");
let errorMessage= document.querySelector(".err");
console.log('1')

function fetchWeather(){
    console.log("2")
    try{
        fetch(
            "api.openweathermap.org/data/2.5/weather?q="+
            input.value+
            "&units=metric&appid="+
            apiKey
        )
        .then (response=> response.json())
        .then(data => displayWeather(data))
    }
    catch(err){ 
        errorMessage.innerHTML="City not found";
    }
}
function displayWeather(data){
    console.log("4")
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

    console.log(nameValue, descriptionValue, iconValue, tempValue, humidityValue, speedValue, weatherID);

    placeName.innerHTML="Weather in "+ nameValue;
    temperature.innerHTML=tempValue+"&deg; C";
    weatherIcon.src='https://openweathermap.org/img/wn/'+ iconValue+'.png';
    description.innerHTML=descriptionValue;
    humidity.innerHTML="Humidity: "+humidityValue+"%";
    wind.innerHTML="Wind Speed: "+speedValue+" km/hr";

    // ------------------Background----------------------
    if (weatherID<250){
        body.style.backgroundImage="url('./img/photo-1519110437047-c6488cf2051d.jpg')";
    }
    else if (weatherID<350){
        body.style.backgroundImage="url('./img/photo-1504608524841-42fe6f032b4b.jpg')";
    }
    else if (weatherID<550){
        body.style.backgroundImage="url('./img/photo-1532280559594-e64bc3b12f8b.jpg')";
    }
    else if (weatherID<650){
        body.style.backgroundImage="url('./img/photo-1486944670663-e0a2ea5018eb.jpg')";
    }
    else if (weatherID<850){
        body.style.backgroundImage="url('./img/photo-1606836131166-5cb137786a8d.jpg')";
    }
    else if (weatherID==850){
        body.style.backgroundImage="url('./img/photo-1529348915581-73628f0cf212.jpg')";
    }
    else if (weatherID>850){
        body.style.backgroundImage="url('./img/photo-1484383707950-89c8d3276e53.jpg')";
    }
}
button.addEventListener('click',()=>{
    console.log('2');
    fetchWeather();
    //alert(input.value);
});
fetchWeather();

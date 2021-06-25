let body= document.querySelector("body");
let input= document.querySelector("input");
let button= document.querySelector(".search-button");
let placeName= document.querySelector(".place-name");
let temperature= document.querySelector(".temperature");
let descriptionContent= document.querySelector(".description-content");
let humidityContent= document.querySelector(".humidity-content");
let wind= document.querySelector(".wind");
let weatherIcon= document.querySelector("#weather-icon");
let errorMessage= document.querySelector(".err");
console.log('1');
let weather={
    apiKey: "9c5c5a276f0866ee408fc9ef3901f7ba",
    fetchWeather: function(city){
        console.log('2');
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            +city+"&units=metric&appid="
            +this.apiKey
        )
        .then((response) => {
            if (!response.ok) {
              alert("No weather found.");
              throw new Error("No weather found.");
            }
            return response.json();
          })
        .then((data)=>this.displayWeather(data))
        console.log('3');
    },
    displayWeather: function(data){
        console.log('4');
        const {name} =data;
        const { description, icon, id} = data.weather[0];
        const { temp,humidity }= data.main;
        const { speed } = data.wind;

        console.log(name, description, icon, id, temp,humidity, speed);

        placeName.innerText= "Weather in" + name;
        temperature.innerHTML=temp+"&deg; C";
        weatherIcon.src='https://openweathermap.org/img/wn/'+ icon+'.png';
        descriptionContent.innerHTML=description;
        humidityContent.innerHTML="Humidity: "+humidity+"%";
        wind.innerHTML="Wind Speed: "+speed+" km/hr";
        // ------------------Background----------------------
        if (id<250){
            body.style.backgroundImage="url('./img/photo-1519110437047-c6488cf2051d.jpg')";
        }
        else if (id<350){
            body.style.backgroundImage="url('./img/photo-1504608524841-42fe6f032b4b.jpg')";
        }
        else if (id<550){
            body.style.backgroundImage="url('./img/photo-1532280559594-e64bc3b12f8b.jpg')";
        }
        else if (id<650){
            body.style.backgroundImage="url('./img/photo-1486944670663-e0a2ea5018eb.jpg')";
        }
        else if (id<850){
            body.style.backgroundImage="url('./img/photo-1606836131166-5cb137786a8d.jpg')";
        }
        else if (id==850){
            body.style.backgroundImage="url('./img/photo-1529348915581-73628f0cf212.jpg')";
        }
        else if (id>850){
            body.style.backgroundImage="url('./img/photo-1484383707950-89c8d3276e53.jpg')";
        }
    },
    search: function(){
        this.fetchWeather(input.value);
    }
};
button.addEventListener("click", function(){
    weather.search()
});

button.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
});
weather.fetchWeather('london');
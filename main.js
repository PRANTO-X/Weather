let apiKey="f770204da5ceb608ed37b477e114ccfa";
let apiUrl="https://api.openweathermap.org/data/2.5/weather?";

let searchBox=document.querySelector('.search input');
let searchBtn=document.querySelector('.search button');
let WeatherImg=document.querySelector('.weather-img');
let errorMsg=document.querySelector('.error-msg');

async function checkWeather(city) {
    const response=await fetch(apiUrl + `q=${city}` + `&appid=${apiKey}&units=metric`);
    if(response.status==404){
        errorMsg.style.display='block';
    }else{
        let data = await response.json();

        console.log(data);
    
        document.querySelector('.city').innerText=data.name;
        document.querySelector('.temp').innerText=Math.round(data.main.temp) + '°c';
        document.querySelector('.humidity').innerText=Math.round(data.main.humidity) + '%';
        document.querySelector('.wind').innerText=data.wind.speed + 'km/h';
    
        if(data.weather[0].main=='Clear'){
            WeatherImg.src='images/clear.png';
        }
        if(data.weather[0].main=='Clouds'){
            WeatherImg.src='images/clouds.png';
        }
        if(data.weather[0].main=='Drizzle'){
            WeatherImg.src='images/drizzle.png';
        }
        if(data.weather[0].main=='Mist'){
            WeatherImg.src='images/mist.png';
        }
        if(data.weather[0].main=='Rain'){
            WeatherImg.src='images/rain.png';
        }
        if(data.weather[0].main=='Snow'){
            WeatherImg.src='images/snow.png';
        }
        if(data.weather[0].main=='Haze'){
            WeatherImg.src='images/haze.png';
        }
        errorMsg.style.display='none';
    }
};

searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
});

window.onload=()=>{
    checkWeather('dhaka');
};
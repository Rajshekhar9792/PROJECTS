const inputBox = document.querySelector('.input-box');
let btn = document.getElementById('btn');
let weather_img = document.querySelector('.weather');
let temp = document.querySelector('.temprature');
let desc = document.querySelector('.description');
let humidity = document.getElementById('humidity');
let speed = document.getElementById('speed');
let not_found = document.querySelector('.not-found');
let weather_Body = document.querySelector('.weatherBody');
let humidityy = document.querySelector('.humidity');
let wind = document.querySelector('.wind');


async function checkWeather(city) {
    const api_key = 'de161bb146f680ae3698ef77da3ff3aa';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weather_data = await fetch(`${url}`).then(response => response.json())
    // console.log(weather_data);
    // console.log(city);

    if (weather_data.cod == '404') {
        not_found.style.display = "flex";
        weather_Body.style.display = "none";
        humidityy.style.display = "none";
        wind.style.display = "none";
        // console.log('error');
        return;
    }

    weather_Body.style.display = "flex";
    humidityy.style.display = "flex";
    wind.style.display = "flex";
    not_found.style.display = "none";

    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    desc.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "./img/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "./img/clear.png";
            break;
        case 'Rain':
            weather_img.src = "./img/rain.png";
            break;
        case 'Mist':
            weather_img.src = "./img/mist.png";
            break;
        case 'Smoke':
            weather_img.src = "./img/smoke.jpg";
            break;
        case 'Light':
            weather_img.src = "./img/light.png";
    }
}

btn.addEventListener('click', () => {
    checkWeather(inputBox.value);
})

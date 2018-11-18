var appId = '0277544f3c792673b513968816036c41';
var url = 'http://api.openweathermap.org/data/2.5/weather?q='; 

function searchWeather(search) {
    if (search.length > 0) {
        fetch(url + search + '&appid=' + appId + '&units=metric').then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })
    }
}

function init(serverResult) {
    document.getElementById('error').style.display = 'flex';
    switch(serverResult.weather[0].main) {
        case 'Clear':
          document.getElementById('error').style.display = 'none';
          document.getElementById('weatherContainer').style.display = 'flex';
          document.body.style.backgroundImage = 'url("clear.jpg")';
          break;

        case 'Clouds':
          document.getElementById('error').style.display = 'none';
          document.getElementById('weatherContainer').style.display = 'flex';
          document.body.style.backgroundImage = 'url("cloud.jpg")';
          break;

        case 'Rain':
        case 'Drizzle':
        case 'Mist':
          document.getElementById('error').style.display = 'none';
          document.getElementById('weatherContainer').style.display = 'flex';
          document.body.style.backgroundImage = 'url("rain.jpg")';
          break;

        case 'Thunderstorm':
          document.getElementById('error').style.display = 'none';
          document.getElementById('weatherContainer').style.display = 'flex';
          document.body.style.backgroundImage = 'url("storm.jpg")';
          break;

        case 'Snow':
          document.getElementById('error').style.display = 'none';
          document.getElementById('weatherContainer').style.display = 'flex';
          document.body.style.backgroundImage = 'url("snow.jpg")';
          break;
        default:
          
          break;
    }

    let city = document.getElementById('city');
    let temp = document.getElementById('temp');
    let desc = document.getElementById('desc');
    let icon = document.getElementById('icon');
    let winds = document.getElementById('winds');
    let humidity = document.getElementById('humidity');

    icon.src = 'http://openweathermap.org/img/w/' + serverResult.weather[0].icon + '.png';
    desc.innerText = serverResult.weather[0].description.replace(/\b\w/g, (l) =>{
        return l.toUpperCase();
    });
    temp.innerHTML = Math.floor(serverResult.main.temp) + '&#176C';
    winds.innerText = 'Winds at ' + Math.floor(serverResult.wind.speed*3.6) + ' Km/H';
    humidity.innerText = 'Humidity: ' + serverResult.main.humidity + '%';
    city.innerText = serverResult.name;
}

document.getElementById('searchBtn').addEventListener('click', () => {
    let search = document.getElementById('searchInput');
    if (search) {
        searchWeather(search.value);
        search.value = '';
    }
})

document.getElementById('searchInput').addEventListener('keypress', (e) => {
    let search = document.getElementById('searchInput');
    if (e.keyCode===13) {
        searchWeather(search.value);
        search.value = '';
    }
})
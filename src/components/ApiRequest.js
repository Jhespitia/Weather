import React, { useState, useEffect } from 'react';
import Loading from './Loading.js';
import Weather from './Weather.js';

export const WeatherIcons = {
    "01d": "/icons/sunny.svg",
    "01n": "/icons/night.svg",
    "02d": "/icons/day.svg",
    "02n": "/icons/cloudy-night.svg",
    "03d": "/icons/cloudy.svg",
    "03n": "/icons/cloudy.svg",
    "04d": "/icons/perfect-day.svg",
    "04n": "/icons/cloudy-night.svg",
    "09d": "/icons/rain.svg",
    "09n": "/icons/rain-night.svg",
    "10d": "/icons/rain.svg",
    "10n": "/icons/rain-night.svg",
    "11d": "/icons/storm.svg",
    "11n": "/icons/storm.svg",
  };

const Request = () => {
    const [isLoading, setLoading] = useState(true);
    const [weather, setWeather] = useState({});

    const success = (position) => {
        let lon = position.coords.longitude;
        let lat = position.coords.latitude;
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=255a2683bd5ad3ec6d689e72383cce35`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                
                console.log(data);
                setWeather({
                    city: data.name,
                    country: data.sys.country,
                    temperature: (data.main.temp - 273.15),
                    description: data.weather[0].description,
                    wind: data.wind.speed,
                    clouds: data.clouds.all,
                    pressure: data.main.pressure,
                    humidity: data.main.humidity,
                    sunset: data.sys.sunset,
                    icon: data.weather[0].icon
                });
            }); 
    }
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success)
    }, []);

    return(
        <div>
            {(isLoading) ? <Loading/> : <Weather city={weather.city} country={weather.country} temperature={weather.temperature} description={weather.description} wind={weather.wind} pressure={weather.pressure}  humidity={weather.humidity} sunset={weather.sunset}clouds={weather.clouds} icon={weather.icon}/>}  
        </div>
    )
}

export default Request;
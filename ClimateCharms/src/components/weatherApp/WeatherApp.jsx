import { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherApp.css';


const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    axios
      .get(
        'https://api.openweathermap.org/data/2.5/weather?q=Monterrey&appid=695ce9b917ff04e30ebdd72b95289dc2'
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const kelvinToCelsius = (weatherData.main.temp - 273.15).toFixed(2)
  const Time = new Date(weatherData.dt * 1000)

  const formatTime = (time) => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <div className="weather-container">
      <h2 className="location">
        {weatherData.name}, {weatherData.sys.country}
      </h2>
      <div className="weather-info">
        <p className="temperature">
          {kelvinToCelsius}°C
        </p>
        <p className="description">
          {weatherData.weather[0].description}
        </p>
        <p className="time">
          {formatTime(Time)}
        </p>
      </div>
    </div>
  );
};

export default WeatherApp;

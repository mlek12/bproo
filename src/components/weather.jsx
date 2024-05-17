import React, { useState, useEffect } from 'react';
import './weather.css';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Banten&appid=c4b1d5421650120767dbde6c8df79d22&units=metric`);
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-container">
      <h2>Weather in Banten</h2>
      <div className="weather-info">
        <div className="weather-icon">
          {}
          {weatherData.weather && weatherData.weather[0].icon && (
            <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="Weather Icon" />
          )}
        </div>
        <div className="weather-details">
          {}
          <p>Temperature: {weatherData.main.temp}°C</p>
          {}
          <p>Description: {weatherData.weather && weatherData.weather[0].description}</p>
          {}
          <p>Humidity: {weatherData.main.humidity}%</p>
          {}
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}

export default Weather;

import React, { useState, useEffect } from 'react';
import './weather.css';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [aqiData, setAqiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherResponse = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Banten&appid=c4b1d5421650120767dbde6c8df79d22&units=metric');
        const weatherData = await weatherResponse.json();

        if (weatherData.coord) {
          const { lat, lon } = weatherData.coord;
          const aqiResponse = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=c4b1d5421650120767dbde6c8df79d22`);
          const aqiData = await aqiResponse.json();
          setWeatherData(weatherData);
          setAqiData(aqiData);
        } else {
          setError('Unable to fetch weather data');
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('An error occurred while fetching weather data');
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  const getAqiLevel = (aqi) => {
    switch (true) {
      case aqi === 1:
        return 'Good';
      case aqi === 2:
        return 'Fair';
      case aqi === 3:
        return 'Moderate';
      case aqi === 4:
        return 'Poor';
      case aqi === 5:
        return 'Very Poor';
      default:
        return 'Unknown';
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="weather-container">
      <h2>Weather in Banten</h2>
      <div className="weather-info">
        <div className="weather-icon">
          {weatherData.weather && weatherData.weather[0].icon && (
            <img
              src={'http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png'}
              alt="Weather Icon"
            />
          )}
        </div>
        <div className="weather-details">
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Description: {weatherData.weather && weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>AQI Level: {aqiData && getAqiLevel(aqiData.list[0].main.aqi)}</p>
        </div>
      </div>
    </div>
  );
}

export default Weather;

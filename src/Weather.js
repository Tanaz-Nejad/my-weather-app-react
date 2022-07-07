import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather() {
  const [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "a204d405c7498a96a5acf4a322b7c595";
    const unit = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayWeather);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-8 searchCityForm">
          <input
            type="search"
            className="searchForm"
            onChange={updateCity}
            autoFocus="on"
            placeholder="Search for City..."
          />
        </div>
        <div className="col-4">
          <input type="submit" className="submitSearch" />
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="Weather">
        {form}
        <WeatherInfo data={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    return <div className="Weather">{form}</div>;
  }
}

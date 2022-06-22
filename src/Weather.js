import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

export default function Weather() {
  const [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handSubmit(event) {
    event.preventDefault();
    let apiKey = "6ce7450f789843d1a9368eb2e4d194d8";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayWeather);
  }

  let form = (
    <form onSubmit={handSubmit}>
      <div className="row">
        <div className="col-7">
          <input
            type="search"
            className="searchForm"
            onChange={updateCity}
            autoFocus="on"
            placeholder="Search for City..."
          />
        </div>
        <div className="col-2">
          <input type="submit" className="submitSearch" />
        </div>
      </div>
    </form>
  );

  let searchedCity = (
    <div className="row">
      <div className="col">
        <h1>{city}</h1>
        <ul className="currentCitydescription">
          <li>{weather.description}</li>
        </ul>
      </div>
    </div>
  );

  let currentTemperature = (
    <div className="row">
      <div className="col-6">
        <div className="d-flex weatherTemperature">
          <img src={weather.icon} alt="Weather_Icon" className="weatherIcon" />
          <div className="temperature">{Math.round(weather.temperature)}</div>
          <span className="unit">℃</span>
        </div>
      </div>
      <div className="col-6">
        <ul className="weather-conditions">
          <li>
            <strong>Humidity: {Math.round(weather.humidity)}</strong>
            <span></span>%
          </li>
          <li>
            <strong>Wind: {Math.round(weather.wind)}</strong>
            <span></span> mph
          </li>
        </ul>
      </div>
    </div>
  );

  if (loaded) {
    return (
      <div className="Weather">
        {form}
        {searchedCity}
        {currentTemperature}
      </div>
    );
  } else {
    return <div className="Weather">{form}</div>;
  }
}

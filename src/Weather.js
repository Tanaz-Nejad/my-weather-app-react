import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
      ready: true,
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

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function showLocation(position) {
    let apiKey = "b997fe84749c69aae89663d6761d24ad";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function getMyLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showLocation);
  }

  function search() {
    const apiKey = "b997fe84749c69aae89663d6761d24ad";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6 searchCityForm">
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
            <div className="col-2 currentLocation">
              <button
                type="Current Location"
                className="currentLocationButton"
                onClick={getMyLocation}
              >
                Current Location
              </button>{" "}
            </div>
          </div>
        </form>
        <WeatherInfo data={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}

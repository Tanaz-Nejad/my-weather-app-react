import React, { useState } from "react";
import axios from "axios";

import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecast(props) {
  // const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState("");

  function handleResponse(response) {
    console.log(response);

    // setLoaded(true);
    setForecast(response.data.daily);
  }

  const apiKey = "35a3a47f3af9ffa9356d1af360dfa992";
  const longitude = props.coordinates.lon;
  const latitude = props.coordinates.lat;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thur</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-max"> 19°</span>
            <span className="WeatherForecast-min"> 10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

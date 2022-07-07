import React, { useState } from "react";
import axios from "axios";

import "./WeatherForecast.css";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  // const [loaded, setLoaded] = useState(false);
  // const [forecast, setForecast] = useState("");

  function handleResponse(response) {
    // setLoaded(true);
    // setForecast(response.data.daily);
  }

  const apiKey = "a204d405c7498a96a5acf4a322b7c595";
  const longitude = props.coordinates.lon;
  const latitude = props.coordinates.lat;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <ForecastDay />
    </div>
  );
}

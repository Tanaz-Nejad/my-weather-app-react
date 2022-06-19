import React from "react";
import axios from "axios";

export default function Weather() {
  function displayWeather(response) {
    alert(response.data);
  }
  function handlesubmit() {
    let apiKey = `6f605de5ba83c9b931369dca77188157`;
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(displayWeather);
  }

  let form = (
    <form onSubmit={handlesubmit}>
      <input type="search" />
      <input type="submit" />
    </form>
  );

  return (
    <div>
      <h1>{form}</h1>
      <ul>
        <li>London</li>
        <li>temperature</li>
      </ul>
    </div>
  );
}

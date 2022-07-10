import React, { useState } from "react";
import axios from "axios";

export default function CurrentLocation() {
  const [location, setLocation] = useState("");
  const [locationTemp, setLocationTemp] = useState("");

  function handleResponse(response) {
    setLocationTemp(Math.round(response.data.main.temp));
    setLocation(response.name);
  }

  function showLocation(position) {
    let apiKey = "b997fe84749c69aae89663d6761d24ad";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getMyLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showLocation);
  }

  return (
    <button
      type="Current Location"
      className="currentLocationButton"
      onClick={getMyLocation}
    >
      Current Location
    </button>
  );
}

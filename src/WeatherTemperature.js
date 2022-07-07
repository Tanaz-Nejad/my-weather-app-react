import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelius(event) {
    event.preventDefault();
    setUnit("celius");
  }

  function fahrenheit() {
    return (props.celius * 9) / 5 + 32;
  }

  if (unit === "celius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{props.celius}</span>
        <span className="unit">℃ |</span>
        <span className="unit">
          {" "}
          <a href="/" onClick={showFahrenheit}>
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelius}>
            ℃
          </a>{" "}
          |
        </span>
        <span className="unit"> ℉</span>
      </div>
    );
  }
}

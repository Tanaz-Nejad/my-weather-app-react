import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  return (
    <div className="ForecastDay">
      {" "}
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thur</div>
          <WeatherIcon code={props.data.weather[0].icon} size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-max"> 19°</span>
            <span className="WeatherForecast-min"> 10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

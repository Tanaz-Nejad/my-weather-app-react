import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col">
          <h1>{props.data.city}</h1>
          <ul className="currentCitydescription">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>{props.data.description}</li>
          </ul>
        </div>
      </div>
      <div className="row temperatureRow">
        <div className="col-6">
          <div className="d-flex temperture">
            <WeatherIcon code={props.data.icon} size={52} />
            <WeatherTemperature celius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul className="weather-conditions">
            <li>
              <strong>Humidity: {props.data.humidity}</strong>
              <span></span>%
            </li>
            <li>
              <strong>Wind: {props.data.wind}</strong>
              <span></span> mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

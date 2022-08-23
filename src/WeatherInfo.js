import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon.js";
import Temperature from "./Temperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <FormatedDate date={props.data.date} />
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <div className="weather-icon">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
                size={52}
              />
            </div>
            <div className="float-left">
              <Temperature celsium={props.data.temp} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{props.data.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

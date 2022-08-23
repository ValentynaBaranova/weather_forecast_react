import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.forecastDay.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="weekday">{day()}</div>
      <WeatherIcon size={32} code={props.forecastDay.weather[0].icon} />
      <p>
        <span className="temp_max">
          {Math.round(props.forecastDay.temp.max)}°
        </span>
        <span className="temp_min">
          {Math.round(props.forecastDay.temp.min)}°
        </span>
      </p>
    </div>
  );
}

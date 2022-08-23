import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherForecastDay from "./WeatherForecastDay";
import "./Weather.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "8157bb6e9552b92cce5fa67fd2aa22ed";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        {forecast.map(function (forecastData, index) {
          if (index < 6) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay forecastDay={forecastData} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    load();
    return null;
  }
}

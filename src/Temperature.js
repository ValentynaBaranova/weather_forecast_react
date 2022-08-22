import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsium");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsium");
  }

  function fahrenheit() {
    return props.celsium * 1.8 + 32;
  }

  if (unit === "celsium") {
    return (
      <div>
        <span className="temperature" id="temperature">
          {props.celsium}
        </span>
        <span className="units">
          °C |
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature" id="temperature">
          {fahrenheit()}
        </span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}

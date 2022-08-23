import React, { useState } from "react";

export default function Temperature(props) {
  return (
    <div>
      <span className="temperature" id="temperature">
        {props.celsium}
      </span>
      <span className="units">°C</span>
    </div>
  );
}

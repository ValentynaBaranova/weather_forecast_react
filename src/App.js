import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer>
          This project was coded by Valentyna Baranova and is
          <a href="https://github.com/ValentynaBaranova/weather_forecast_react">
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://kaleidoscopic-hamster-ec0d94.netlify.app">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import Weather from "./Weather.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
      </div>
      <footer>
        This project was coded by Tanaz Nejad and is{" "}
        <a href="https://github.com/Tanaz2202/my-weather-app.git">
          open sourced on Github
        </a>
      </footer>
    </div>
  );
}

export default App;

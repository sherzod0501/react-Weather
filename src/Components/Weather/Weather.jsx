import { useState, useEffect } from "react";
import "./Weather.css";

export const Weather = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("tashkent");

  const InputValue = (evt) => {
    if (evt.code === "Enter") {
      const InpValue = evt.target.value;
      setValue(InpValue);
      evt.target.value = "";
    }
  };

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=6228ee646519e4bc6b68ea6c3faba5f5`
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [value]);

  return (
    <div className="Weather">
      <div className="weather-section">
        <input
          className="input"
          type="text"
          placeholder="Search..."
          onKeyUp={InputValue}
        />
        <div className="weather-wrapper">
          <div className="weather-main">
            <h2 className="wether-name">{data.name}</h2>
            <p className="wether-temper">
              {data.name} temp: {data.main?.temp}
            </p>
            <p className="wether-temper">
              {data.name} humidity: {data.main?.humidity}
            </p>
            <p className="wether-speed">
              {data.name} speed: {data.wind?.speed}
            </p>
          </div>
          {data.weather && (
            <img
              className="wether-icon"
              width="150"
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              alt="Wether"
            />
          )}
        </div>
      </div>
    </div>
  );
};

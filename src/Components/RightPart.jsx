/* eslint-disable react/prop-types */
import Air from "./Air";
import Humidity from "./Humidity";
import Visibility from "./Visibility";
import Wind from "./Wind";
import Forecast from "./Forecast";
import "./RightPart.css";
const RightPart = ({ weather }) => {
  let windStatus, humidity, airPressure, visibility;
  let forecastArray = [];
  if (Object.keys(weather).length == 0) {
    return <p>Loading...</p>;
  } else {
    windStatus = weather[0].wind.speed;
    humidity = weather[0].main.humidity;
    visibility = weather[0].visibility;
    airPressure = weather[0].main.pressure;
    forecastArray = weather.slice(0);
  }

  return (
    <div className="right-part">
      <div className="forecast-raw">
        {forecastArray.map(function (el, i) {
          if (Object.keys(el).length === 0) {
            return <p key={i}>Loading...</p>;
          } else {
            return <Forecast key={i} weather={el} />;
          }
        })}
      </div>
      <h2 className="tittle-info">Todays Hightlights</h2>
      <div>
        <div className="info-box">
          <Wind windStatus={windStatus} />
          <Humidity humidity={humidity} />
          <Visibility visibility={visibility} />
          <Air airPressure={airPressure} />
        </div>
      </div>
    </div>
  );
};

export default RightPart;

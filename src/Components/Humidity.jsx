/* eslint-disable react/prop-types */
import HumidityBar from "./HumidityBar";
const Humidity = ({ humidity }) => {
  return (
    <div className="Humidity">
      <p>Humidity</p>
      <span className="info">{humidity}</span>
      <span>%</span>

      <HumidityBar humidity={humidity} />
    </div>
  );
};

export default Humidity;

import "./Forecast.css";

const Forecast = ({weather}) => {
   let date = weather.dt_txt.split(" ")[0]
   let minTemp = weather.main.temp_min
   let maxTemp = weather.main.temp_max
  return (
    <div className="Forecast">
      <p className="date">{date}</p>
       <p> Logo</p>

       <p>{minTemp.toFixed(1)}</p>
        <p>{maxTemp.toFixed(1)}</p>
    </div>
  );
};

export default Forecast;

import { useState } from "react";
import "./LeftPart.css";

const LeftPart = ({ handlePlace, place, weather }) => {
  const [search, setSearch] = useState(false);
  let todayWeather;

  if (Object.keys(weather).length === 0) {
    return <p>Loading...</p>;
  } else {
    todayWeather = weather[0];
  }

  const handleSearch = () => {
    setSearch(!search);
  };

  const handleChange = (e) => {
    handlePlace(e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //aca se ejecutara la funcion que hara todo el proceso de busqueda
    console.log(place);
  };

  return (
    <div className="left-part">
      {search ? (
        <form onSubmit={handleSubmit}>
          <input type="text" value={place} onChange={handleChange} />{" "}
          <button type="submit">Search</button>
        </form>
      ) : (
        <button onClick={handleSearch}> Search for places</button>
      )}

      <p>weather logo </p>
      <span>{todayWeather.main.temp.toFixed(0)}</span>
      <span>°C</span>
    </div>
  );
};

export default LeftPart;

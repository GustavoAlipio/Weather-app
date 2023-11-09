import { useState } from "react";
import "./App.css";
import LeftPart from "./Components/LeftPart";
import RightPart from "./Components/RightPart";
import { useFetch } from "./CustomHooks/UseFetch.js";
import { LIMA } from "./Consts/apiUrl";
function App() {
  const [place, setPlace] = useState("");
  const weatherDefault = useFetch(LIMA);

  const handlePlace = (e) => {
    setPlace(e.target.value);
  };

  return (
    <>
      <div className="page">
        <LeftPart
          place={place}
          handlePlace={handlePlace}
          weather={weatherDefault}
        />
        <RightPart weather={weatherDefault} />
      </div>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
const useFetch = (URL) => {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(URL);
      const res = await response.json();

      const selectedData = [];

      res.list.forEach((item) => {
        const fechaParts = item.dt_txt.split(" ");
        const fechaDia = fechaParts[0];
        const existingData = selectedData.find(
          (data) => data.dt_txt.split(" ")[0] === fechaDia
        );
        if (!existingData) {
          selectedData.push(item);
        }
      });

      setWeather(selectedData);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [URL]);

  return weather;
};
export { useFetch };

import './App.css';
import React, { useState } from 'react';
import VarosUrlap from './Components/VarosUrlap/VarosUrlap';
import Elorejelzes from './Components/Elorejelzes/Elorejelzes';

export default function App() {
  const [idojarasInfo, setIdojarasInfo] = useState(null);




  function queryWeather(varos) {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${varos.latitude}&longitude=${varos.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,rain_sum,wind_speed_10m_max,wind_direction_10m_dominant`)
      .then(x => x.json())
      .then((response) => {
        setIdojarasInfo({
          varos,
          idojaras:response
        });
      });
  }

  function updateVaros(varos) {
    fetch('https://geocoding-api.open-meteo.com/v1/search?name=' + varos)
      .then(x => x.json())
      .then(response => {
        if (Array.isArray(response.results) && response.results.length > 0) {
          queryWeather(response.results[0]);

        } else {
          alert('hibás város');
        }

      });

  }

  return (
    <div className="App">
      <h1>Időjárás előrejelzés</h1>
      <VarosUrlap updateVaros={updateVaros} />
      <Elorejelzes idojarasInfo={idojarasInfo} />
    </div>
  );
}



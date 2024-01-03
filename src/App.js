import './App.css';
import React from 'react';
import VarosUrlap from'./Components/VarosUrlap/VarosUrlap';
import Elorejelzes from './Components/Elorejelzes/Elorejelzes';

export default function App() {

function updateVaros(varos){
alert('eredmény: ' + varos)
}

  return (
    <div className="App">
       <h1>Időjárás előrejelzés</h1>
      <VarosUrlap updateVaros={updateVaros}/>
      <Elorejelzes />
    </div>
  );
}



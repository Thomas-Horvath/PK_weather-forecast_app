import './App.css';
import React from 'react';
import VarosUrlap from'./Components/VarosUrlap/VarosUrlap';
import Elorejelzes from './Components/Elorejelzes/Elorejelzes';

export default function App() {
  return (
    <div className="App">
       <h1>Időjárás előrejelzés</h1>
      <VarosUrlap />
      <Elorejelzes />
    </div>
  );
}



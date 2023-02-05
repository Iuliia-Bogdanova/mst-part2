import React from 'react';

import './App.css';
import Avenger from './components/Avenger';
import "./components/Avenger.css";

const avengers = [
  { 
    name: "Tony Stark", 
    src: "../../public/img/Stark.jpg", alt: "Iron Man", 
    superpowers: "intelligence"
  }
  ,
  {
    name: "Stephen Rogers",
    src: "../../public/img/Cap.jpg", alt: "Captain America",
    superpowers: "strength, endurance, regeneration"
  }
  ,
  {
    name: "Natasha Romanoff",
    src: "../../public/img/Natasha.jpg", alt: "Black Widow",
    superpowers: "spy"
  }
];

class App extends React.Component {
  render() {
  return (
    <div className="App">
      {
        avengers.map((avenger) =>
        <Avenger name={avenger.name} 
        src={avenger.src} alt={avenger.alt}
        superpowers={avenger.superpowers}/>
        )
      }
    </div>
  );
  }
}

export default App;

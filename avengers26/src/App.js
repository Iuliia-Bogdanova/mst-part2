import React from 'react';

import './App.css';
import Avenger from './components/Avenger';
import "./components/Avenger.css";

const avengers = [
  {
    character: "Iron Man",
    src: "./img/Stark.jpg",
    alt: "Iron Man",
    name: "Tony Stark",
    superpowers: "intelligence",
  },
  {
    character: "Captain America",
    src: "./img/Cap.jpg",
    alt: "Captain America",
    name: "Stephen Rogers",
    superpowers: "strength, endurance, regeneration",
  },
  {
    character: "Black Widow",
    src: "./img/Natasha.jpg",
    alt: "Black Widow",
    name: "Natasha Romanoff",
    superpowers: "spy",
  },
  {
    character: "Thor",
    src: "./img/Thor.jpg",
    alt: "Thor",
    name: "Thor",
    superpowers: "the power of a god, the hammer Mjolnir",
  },
  {
    character: "Hulk",
    src: "./img/Banner.jpg",
    alt: "Hulk",
    name: "Bruce Banner",
    superpowers: "intelligence, superhuman strength, flight",
  },
  {
    character: "Hawkeye",
    src: "./img/Hawkeye.jpg",
    alt: "Hawkeye",
    name: "Clint Barton",
    superpowers: "great shooter, Natasha's best friend",
  },
];

class App extends React.Component {
  render() {
  return (
    <div className="App">
      {avengers.map((avenger) => (
        <Avenger
          character={avenger.character}
          src={avenger.src} alt={avenger.alt}
          name={avenger.name}
          superpowers={avenger.superpowers}
        />
      ))}
    </div>
  );
  }
}

export default App;

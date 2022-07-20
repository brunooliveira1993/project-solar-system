import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

const planets = Planets.map((planet, i) => (<PlanetCard
  key={ i }
  planetName={ planet.name }
  planetImage={ planet.image }
/>));

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="divPlanets">
        <Title headline="Planetas" />
        {planets}
      </div>);
  }
}

export default SolarSystem;

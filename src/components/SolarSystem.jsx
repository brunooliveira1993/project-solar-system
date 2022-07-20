import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

const planets = Planets.map((planet, i) => <PlanetCard key={ i } planets={ planet } />);

class SolarSystem extends React.Component {
  render() {
    return (<div className="divPlanets">
      {planets}
    </div>);
  }
}

export default SolarSystem;

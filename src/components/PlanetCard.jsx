import React from 'react';
import '../App.css';

class PlanetCard extends React.Component {
  render() {
    const { name, image } = this.props.planets
    const alt = `Planeta ${name}`;

    return (<div>
      <p>
        {name}
      </p>
      <img src={image} alt={alt}/>
    </div>);
  }
}

export default PlanetCard;

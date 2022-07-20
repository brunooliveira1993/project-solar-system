import React from 'react';

class missionCart extends React.Component {
  render() {
    const { name, year, country, destination } = this.props.mission

    return (<div className="itemMission">
      <p className="missionName">
        {name}
      </p>
      <p>
        {year}
      </p>
      <p>
        {country}
      </p>
      <p>
        {destination}
      </p>
    </div>);
  }
}

export default missionCart;

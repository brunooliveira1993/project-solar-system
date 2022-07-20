import React from 'react';
import mission from '../data/missions';
import Title from './Title';
import MissionCard from './MissionCard';

const missions = mission.map((mision, i) => (<MissionCard
  key={ i }
  name={ mision.name }
  year={ mision.year }
  country={ mision.country }
  destination={ mision.destination }
/>));

class missionsList extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missions">
          {missions}
        </div>
      </div>);
  }
}

export default missionsList;

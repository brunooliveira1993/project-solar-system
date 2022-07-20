import React from 'react';
import mission from '../data/missions';
import Title from './Title';
import MissionCard from './MissionCard';

const missions = mission.map((mision, i) => <MissionCard key={i} mission={mision} />);

class missionsList extends React.Component {
  render() {
    return (<div>
      <Title headline="Missões" />
      <div className="missions">
        {missions}
      </div>
    </div>);
  }
}

export default missionsList;

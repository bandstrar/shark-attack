import React from 'react';
import './App.scss';
import studentsData from '../helpers/data/studentsData';
import SharkTank from '../components/SharkTank';
import Graveyard from '../components/Graveyard';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SharkTank students={studentsData.livingStudents()} />
        <Graveyard students={studentsData.dearlyBeloved()} />
      </div>
    );
  }
}

export default App;

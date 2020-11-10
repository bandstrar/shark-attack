import React from 'react';
import './App.scss';
import studentsData from '../helpers/data/studentsData';
import SharkTank from '../components/SharkTank';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SharkTank students={studentsData.livingStudents()} />
      </div>
    );
  }
}

export default App;

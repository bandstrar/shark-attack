import React from 'react';
import './App.scss';
import studentsData from '../helpers/data/studentsData';
import SharkTank from '../components/SharkTank';
import Graveyard from '../components/Graveyard';

class App extends React.Component {
  state = {
    luckyStudents: studentsData.livingStudents(),
    unluckyStudents: studentsData.dearlyBeloved(),
  }

  newTank = () => {
    this.setState({
      luckyStudents: studentsData.livingStudents(),
      unluckyStudents: studentsData.dearlyBeloved(),
    });
  }

  sharkAttack = () => {
    if (this.state.luckyStudents.length) {
      const randoStudo = this.state.luckyStudents[
        Math.floor(Math.random() * Math.floor(this.state.luckyStudents.length))].id;
      studentsData.followTheLight(randoStudo);
    }
    this.newTank();
  }

  render() {
    const { luckyStudents, unluckyStudents } = this.state;
    return (
      <div className="App">
        <button className='btn btn-danger my-2' onClick={this.sharkAttack}>SHARK ATTACK!</button>
        <SharkTank students={luckyStudents} />
        <Graveyard students={unluckyStudents} />
      </div>
    );
  }
}

export default App;

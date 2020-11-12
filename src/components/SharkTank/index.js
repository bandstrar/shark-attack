import React, { Component } from 'react';
import LiveStudent from '../LiveStudent';

class SharkTank extends Component {
  render() {
    const { students } = this.props;
    const tankStudents = () => {
      const tank = students.map((student) => <LiveStudent key={ student.id } student={student} />);
      return tank;
    };
    return (<div className="shark-tank card-container">
        { tankStudents() }
        </div>);
  }
}

export default SharkTank;

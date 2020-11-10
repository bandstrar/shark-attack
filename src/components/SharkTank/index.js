import React, { Component } from 'react';

class SharkTank extends Component {
  render() {
    const { students } = this.props;
    const tankStudents = () => {
      const tank = students.map((student) => <h1 key={student.id} className='livingStudents'>{student.firstName} {student.lastName}</h1>);
      return tank;
    };
    return (<div>
        { tankStudents() }
        </div>);
  }
}

export default SharkTank;

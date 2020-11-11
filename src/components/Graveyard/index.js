import React, { Component } from 'react';

class Graveyard extends Component {
  render() {
    const { students } = this.props;
    const theyDead = () => students.map((student) => <h1 key={student.id} className='deadStudents'>{student.firstName} {student.lastName}</h1>);
    return (<div>
            { theyDead() }
        </div>);
  }
}

export default Graveyard;

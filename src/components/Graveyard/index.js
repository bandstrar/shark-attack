import React, { Component } from 'react';
import Gravestone from '../GraveStone';

class Graveyard extends Component {
  render() {
    const { students } = this.props;
    const theyDead = () => students.map((student) => <Gravestone key={ student.id } student={student} />);
    return (<div className="graveyard card-container">
            { theyDead() }
        </div>);
  }
}

export default Graveyard;

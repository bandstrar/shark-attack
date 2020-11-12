import React, { Component } from 'react';

class LiveStudent extends Component {
  render() {
    const { student } = this.props;
    return (<div className="card live-student">
        <div className="card-body">
          <h4 className="im-alive">{ student.firstName } { student.lastName }</h4>
          <i class="fas fa-fish"></i>
          </div>
      </div>);
  }
}

export default LiveStudent;

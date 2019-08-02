import React, { Component } from 'react';
import './Transport.css';

class Transport extends Component {
  render() {
    const id = this.props.match.params.id;
    console.log('match', this.props.match);
    
    return (
      <div>{id}</div>
    );
  }
}

export default Transport;
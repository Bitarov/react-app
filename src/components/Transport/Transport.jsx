import React, { Component } from 'react';
import './Transport.css';

import Auto from '../auto/auto';
import Boat from '../boat/boat';
import Aircraft from '../aircraft/aircraft';
import Train from '../train/train';
import Rocket from '../rocket/rocket';

class Transport extends Component {

  render() {
    const { id } = this.props.match.params;
    // console.log('match', this.props.match);
    
    return (
      <div id={id}>
        {id === 'auto' && <Auto idValue={id} />}
        {id === 'boat' && <Boat idValue={id} />}
        {id === 'aircraft' && <Aircraft idValue={id} />}
        {id === 'train' && <Train idValue={id} />}
        {id === 'rocket' && <Rocket idValue={id} />}
      </div>
    );
  }
}

export default Transport;
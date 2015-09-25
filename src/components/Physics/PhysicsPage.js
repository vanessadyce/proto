/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './PhysicsPage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class PhysicsPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Physics';
    this.context.onSetTitle(title);
    return (
      <div className="PhysicsPage">
        <div className="PhysicsPage-container">
          <h1>{title}</h1>
          <p>...</p>
        </div>
      </div>
    );
  }

}

export default PhysicsPage;

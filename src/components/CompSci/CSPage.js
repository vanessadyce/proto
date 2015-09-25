/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './CSPage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class CSPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Computer Science';
    this.context.onSetTitle(title);
    return (
      <div className="CSPage">
        <div className="CSPage-container">
          <h1>{title}</h1>
          <p>...</p>
        </div>
      </div>
    );
  }

}

export default CSPage;
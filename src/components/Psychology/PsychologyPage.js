/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './PsychologyPage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class PsychologyPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Psychology';
    this.context.onSetTitle(title);
    return (
      <div className="PsychologyPage">
        <div className="PsychologyPage-container">
          <h1>{title}</h1>
          <p>...</p>
        </div>
      </div>
    );
  }

}

export default PsychologyPage;
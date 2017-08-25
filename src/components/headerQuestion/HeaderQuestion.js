import React, { Component } from 'react';
import './HeaderQuestion.css';

class HeaderQuestion extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="back-arrow-1"></div>
        <h2>QUESTION</h2>
        <div id="plus-sign">
          <div className="bar-vertical"></div>
          <div className="bar-horizontal"></div>
        </div>
        <p id="last-time-dis">Last time discussed <span>1</span> day ago</p>
      </div>
    );
  }
}

export default HeaderQuestion;
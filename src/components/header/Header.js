import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './Header.css';
import HeaderQuestions from '../headerQuestions/HeaderQuestions';
import HeaderQuestion from '../headerQuestion/HeaderQuestion';

class Header extends Component {
  render() {
    return (
      <div id="header-container">
        <Switch>
          <Route exact path="/" component={HeaderQuestions} />
          <Route path="/:questionId" component={HeaderQuestion} />
        </Switch>
      </div>
    );
  }
}

export default Header;

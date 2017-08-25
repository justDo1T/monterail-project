import React, { Component } from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Questions from './components/questions/Questions';
import Question from './components/question/Question';

const history = createHistory({
  basename: 'console'
})

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Header />
          <Main >
            <Switch>
              <Route exact path="/" component={Questions} />
              <Route path="/:questionId" component={Question} />
            </Switch>
          </Main>
        </div>
      </Router>
    );
  }
}

export default App;

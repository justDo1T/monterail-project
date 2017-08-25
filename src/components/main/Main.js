import React, { Component } from 'react';
import './Main.css'

class Main extends Component {
  render() {
    return (
      <main>
        <section id="question-section">
          { this.props.children }
        </section>
      </main>
    );
  }
}

export default Main;
import React, { Component } from 'react';
import './HeaderQuestions.css';

class HeaderQuestions extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div id="header-1">
          <div className="back-arrow"></div>
          <h2>QUESTIONS</h2>
          <div id="plus-sign">
            <div className="bar-vertical"></div>
            <div className="bar-horizontal"></div>
          </div>
        </div>
        <form id="question-form">
          <input type="radio" id="question1" name="questionType" value="myShelf" checked />
          <label for="question1">My shelf</label>
          <input type="radio" id="question2" name="questionType" value="allQuestions" />
          <label for="question2">All questions</label>
        </form>
        <p id="question-sort">Sort by: <span className="active">recent</span> or <span>hot</span></p>
        <form id="search-form">
          <input type="text" id="search-text" name="searchQuestions" placeholder="Search questions" />
        </form>
        <button type="button" id="search-btn" title="Search questions">SEARCH</button>
      </div>
    );
  }
}

export default HeaderQuestions;

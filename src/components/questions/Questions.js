import React, { Component } from 'react';
import './Questions.css';
import QuestionTile from '../questionTile/QuestionTile';
import {questionsList} from '../../state.js';


class Questions extends Component {
  render() {
    return (
    	<div>
	    	{questionsList.map((question) => <QuestionTile {...question}/>)}
	    </div>
    );
  }
}

export default Questions;
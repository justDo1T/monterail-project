import React, { Component } from 'react';
import './Question.css';
import QuestionTopic from '../questionTopic/QuestionTopic';


class Question extends Component {
  render() {
    return (
    	<div>
    		<QuestionTopic />
	    </div>
    );
  }
}

export default Question;
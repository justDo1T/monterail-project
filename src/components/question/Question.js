import React, { Component } from 'react';


class Question extends Component {
  render() {
    return (
    	<div>
	    	{this.props.match.params.questionId}
	    </div>
    );
  }
}

export default Question;
import React, { Component } from 'react';
import './Circle.css';

class Circle extends Component {

    static defaultProps = {
        color: "#A7A9AC"
    }

	render() {
		return (
    		<div className="circle" style={{backgroundColor: this.props.color}}></div>
		)
	}
}

export default Circle;

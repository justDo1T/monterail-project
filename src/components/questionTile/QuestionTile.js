import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './QuestionTile.css';
import CommentTile from '../commentTile/CommentTile';

class QuestionTile extends Component {
	render() {
		return (
			<article className="question-article">
	    		<header className="question-header">
	    			<img src="img/photo.jpg" />
	    			<div className="question-topic">
	    				<span className="name">Eva</span><span className="is-asking">is asking:</span>
	    				<Link to={this.props.id} className="query">
	    					{this.props.title}
	    				</Link>
	    			</div>
	    		</header>
	    		<div className="asked">
	    			<div className="asked-bottom">
	    				<p>asked</p>
	    			</div>
	    		</div>
	    		{this.props.answers.length > 3 && <div className="activ-count">
	     			<span>{this.props.activ_count}</span>
	     			<div className="activ-bottom">
	     				<p>more<br />activities</p>
	     				<div className="circle"></div>
	     			</div>
	     		</div>}
	    		<Link to={this.props.id} className="comment-href">
		    		{this.props.answers.map((answerId) => {
		    			return <CommentTile id={answerId}/>
		    		})}
		    	</Link>
	    		<div className="related-numbers">
	    			<p><span>{this.props.rel_disc}</span> related discussion</p>
	    			<p><span>{this.props.peers}</span> peers involved</p>
	    			<p><span>{this.props.conversations}</span> conversations</p>
	    		</div>
    		</article>
		)
	}
}
export default QuestionTile;
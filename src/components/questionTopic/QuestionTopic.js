import React, { Component } from 'react';
import './QuestionTopic.css';

class QuestionTopic extends Component {
  render() {
    return (
    	<section id="question-sec">
    		<header className="question-head">
    			<img src="img/photo.jpg" />
    			<div className="question-topic">
    				<span className="name">Eva</span><span className="is-asking">is asking:</span>
    				<p className="query">Will insulin make my patient gain weight?</p>
    			</div>
    			<p className="unfollow">unfollow</p>
    		</header>
    		<div className="question-main">
    			<div className="blue-area"></div>
    			<div className="question-ext">
    				<p>All my patients with diabetes should see an ophthalmologist yearly for a dialated eye examination - beginning at diagnosis in people with type 2 diabetes, and after 5 years in people with type 1 diabetes after puberty. Patients with known eye disease, symptoms of blurred vision in one eye or blind spots may need to see their ophthalmologist more frequently.</p>
    			</div>
    			<div className="unfollow mobile-only">unfollow</div>
    			<div className="votes">
    				<p><span>19</span> upvotes</p>
    				<div className="vote-arrows">
    					<div className="triangle-up"></div>
    					<div className="triangle-down"></div>
    				</div>
    			</div>
    		</div>
    		<div className="reply-btn">
    			<p>GIVE new answer</p>
    		</div>
    	</section>
    );
  }
}

export default QuestionTopic;
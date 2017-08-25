import React, { Component } from 'react';
import './CommentTile.css';
import Circle from '../circle/Circle';
import {answerList, userList} from '../../state.js';

class CommentTile extends Component {
	render() {

        const comment = answerList[this.props.id]
        const user = userList[comment.user]

		return (
    		<div className={"comment" + (comment.comments.length ? ' answered' : '')} >
    			<img src={user.img} />
    			<div className="comment-bottom">
    				<p>{comment.comments.length ? 'answered' : 'commented'}</p>
    				<Circle color={comment.comments.length ? '#000' : undefined} />
    			</div>
    		</div>
		)
	}
}

export default CommentTile;
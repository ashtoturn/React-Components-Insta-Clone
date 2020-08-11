
import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {/* map through the comments data array and render a Comment for every comment piece of data */}
      {comments.map(cm =>{
        return <Comment key={cm.id} 
        comment={cm}
        />
      })}
    </div>
  );
};

export default Comments;

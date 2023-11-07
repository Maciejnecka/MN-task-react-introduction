'use strict';
import React from 'react';

class Post extends React.Component {
  render() {
    const articleStyle = {
      marginBottom: '30px',
      height: '200px',
      color: 'white',
      padding: '0 20px',
      backgroundColor: '#333',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    };
    const { post } = this.props;
    return (
      <article style={articleStyle}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>{post.author}</p>
        <p>{post.created}</p>
      </article>
    );
  }
}

export default Post;

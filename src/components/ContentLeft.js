'use strict';
import React from 'react';
import Post from './ContentLeftPost';

const ContentLeft = () => {
  const post = {
    title: 'Hello React',
    body: 'Lorem ipsum dolor...',
    author: 'Anonimowy Anonim',
    created: '2020-02-20 20:20:21',
  };
  const post2 = {
    title: 'Hello React 2',
    body: 'Lorem ipsum dolor...',
    author: 'Anonim Anonimowy',
    created: '2020-02-20 20:20:22',
  };
  const post3 = {
    title: 'Hello React 3',
    body: 'Lorem ipsum dolor...',
    author: 'Anonim Anon',
    created: '2020-02-20 20:20:23',
  };
  const leftStyles = {
    width: '30%',
  };
  return (
    <div style={leftStyles}>
      <Post post={post} />
      <Post post={post2} />
      <Post post={post3} />
    </div>
  );
};

export default ContentLeft;

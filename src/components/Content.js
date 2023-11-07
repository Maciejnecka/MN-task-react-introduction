'use strict';
import React from 'react';
import ContentLeft from './ContentLeft';
import ContentMain from './ContentMain';
import ContentRight from './ContentRight';

const Content = () => {
  const contentStyle = {
    maxWidth: '1600px',
    margin: '0 auto',
    backgroundColor: '#f3f3f3',
    padding: '10px 0',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  };
  return (
    <section style={contentStyle}>
      <ContentLeft />
      <ContentMain />
      <ContentRight />
    </section>
  );
};

export default Content;

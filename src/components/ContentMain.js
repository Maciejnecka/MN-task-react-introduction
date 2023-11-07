'use strict';
import React from 'react';
import ContentMainGallery from './ContentMainGallery';

const ContentMain = () => {
  const mainStyles = {
    width: '30%',
    backgroundColor: '#3498db',
  };
  return (
    <div style={mainStyles}>
      <ContentMainGallery
        imgSrc="https://source.unsplash.com/random/200x200?sig=1"
        imgAlt="picture"
      />
      <ContentMainGallery
        imgSrc="https://source.unsplash.com/random/200x200?sig=2"
        imgAlt="picture"
      />
      <ContentMainGallery
        imgSrc="https://source.unsplash.com/random/200x200?sig=3"
        imgAlt="picture"
      />
    </div>
  );
};

export default ContentMain;

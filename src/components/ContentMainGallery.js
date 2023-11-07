'use strict';
import React from 'react';

const ContentMainGallery = ({ imgSrc, imgAlt, imgWidth, imgHeight }) => {
  const galleryItemStyles = {
    margin: '5px 5px auto',
  };

  const imageStyles = {
    width: '100%',
    height: 'auto',
  };

  return (
    <div style={galleryItemStyles}>
      <a target="_blank" href={imgSrc}>
        <img
          src={imgSrc}
          alt={imgAlt}
          width={imgWidth}
          height={imgHeight}
          style={imageStyles}
        ></img>
      </a>
    </div>
  );
};

export default ContentMainGallery;

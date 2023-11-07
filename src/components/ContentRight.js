'use strict';
import React from 'react';
const ContentRight = () => {
  const rightStyles = {
    height: '200px',
    width: '30%',
    backgroundColor: '#333',
    padding: '20px',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const ulStyles = {
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  };

  const listStyles = {
    listStyle: 'none',
  };

  const linkStyles = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
  };

  const relatedLinks = [
    { title: 'Learn React', url: 'https://reactjs.org/' },
    { title: 'React Documentation', url: 'https://reactjs.org/docs/' },
    {
      title: 'JavaScript MDN',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
  ];
  return (
    <div style={rightStyles}>
      <h2>Related Links</h2>
      <ul style={ulStyles}>
        {relatedLinks.map((link, index) => (
          <li style={listStyles} key={index}>
            <a
              style={linkStyles}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentRight;

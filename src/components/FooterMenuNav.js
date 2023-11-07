'use strict';
import React from 'react';

const FooterMenuNav = () => {
  const FooterNavContainer = {
    display: 'flex',
    width: '200px',
    justifyContent: 'space-around',
  };
  const FooterNavStyles = {
    color: '#fff',
    textDecoration: 'none',
  };
  return (
    <ul style={FooterNavContainer}>
      <a style={FooterNavStyles} href="#">
        Strona główna
      </a>
      <a style={FooterNavStyles} href="#">
        O nas
      </a>
    </ul>
  );
};

export default FooterMenuNav;

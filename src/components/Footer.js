'use strict';
import React from 'react';
import FooterCopyrights from './FooterCopyrights';
import FooterMenuNav from './FooterMenuNav';

const Footer = () => {
  const footerStyles = {
    maxWidth: '1600px',
    margin: '0 auto',
    height: '50px',
    backgroundColor: '#3498db',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'flex-end',
  };
  return (
    <footer style={footerStyles}>
      <FooterCopyrights />
      <FooterMenuNav />
    </footer>
  );
};

export default Footer;

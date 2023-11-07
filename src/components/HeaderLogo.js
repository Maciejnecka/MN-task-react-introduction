'use strict';
import React from 'react';

const HeaderLogo = () => {
  const logoStyles = {
    width: '30px',
    height: '30px',
    margin: '2px',
    backgroundColor: '#3498db',
    borderRadius: '50%',
    textAlign: 'center',
    letterSpacing: '1px',
    lineHeight: '30px',
    fontSize: '8px',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  };
  return <div style={logoStyles}>Logo</div>;
};

export default HeaderLogo;

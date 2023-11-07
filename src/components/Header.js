'use strict';
import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';

const Header = () => {
  const headerStyles = {
    height: '40px',
    backgroundColor: '#e7eaf6',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  return (
    <header style={headerStyles}>
      <HeaderLogo />
      <HeaderNav />
    </header>
  );
};

export default Header;

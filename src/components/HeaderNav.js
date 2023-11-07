'use strict';
import React from 'react';

const HeaderNav = () => {
  const navStyles = {
    height: '100%',
    width: '350px',
    backgroundColor: '#3498db',
  };

  const listStyles = {
    listStyle: 'none',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  };

  const listEleStyles = {
    color: '#fff',
    textDecoration: 'none',
  };

  const navItems = ['Strona główna', 'O nas', 'Usługi', 'Kontakt'];
  return (
    <nav style={navStyles}>
      <ul style={listStyles}>
        {navItems.map((item, index) => (
          <li key={index}>
            <a style={listEleStyles} href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;

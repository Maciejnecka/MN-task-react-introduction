'use strict';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const root = createRoot(document.querySelector('#root'));

const App = () => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};
root.render(<App />);

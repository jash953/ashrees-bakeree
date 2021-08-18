import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import { Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </div>
  );
};

export default App;

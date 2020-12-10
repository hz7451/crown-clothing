import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepages/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.componenet.js';
import Header from './components/header/header.component.js';

function App() {
  return (
    <div>
      <Header/>
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </switch>
    </div>
    // <HomePage/> dsdasd osdo 
  );
}

export default App;

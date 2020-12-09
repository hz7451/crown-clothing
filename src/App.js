import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepages/homepage.component';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
)

function App() {
  return (
    <div>
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </switch>
    </div>
    // <HomePage/> dsdasd osdo 
  );
}

export default App;

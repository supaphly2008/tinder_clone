import React from 'react';
import './App.css';
import Header from './components/Header'
import SwipeButtons from './components/SwipeButtons'
import TinderCards from './components/TinderCards'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/about">
            <h1>Hello im about</h1>
          </Route>
          <Route path="/">
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

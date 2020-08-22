import React from 'react';
import './App.css';
import Header from './components/Header'
import SwipeButtons from './components/SwipeButtons'
import TinderCards from './components/TinderCards'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/chat">
            <Header backButton="/" />
            <h1>Hello im chat</h1>
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

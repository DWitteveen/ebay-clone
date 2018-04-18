import React, { Component } from 'react';
import './App.css';
import ProductsList from './components/ProductsList'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/forsale" component={ProductsList} />
          <Route exact path="/" render={ () => <Redirect to="/forsale" /> } />
        </div>
      </Router>
    )
  }
}

export default App;

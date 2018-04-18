import React, { Component } from 'react';
import './App.css';
import ProductDetails from './components/ProductDetails'
import ProductsList from './components/ProductsList'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

export const products = [
  {
    id: 1,
    name: 'Handbag',
    price: 1450
  },
  {
    id: 5,
    name: 'Heater',
    price: 550
  },
  {
    id: 7,
    name: 'T-shirt',
    price: 10
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <ProductsList />
        <ProductDetails product={ products[0] } />
      </div>
    )
  }

}

export default App;

// <Route exact path="/products" component={ProductsList} />
// <Route exact path="/products/:id" component={ProductDetails} />
// <Route exact path="/products" component={SellersList} />
// <Route exact path="/" render={ () => <Redirect to="/products" /> } />

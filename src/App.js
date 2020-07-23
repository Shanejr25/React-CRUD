import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const products = [
  {
    name: 'iPad',
    price: 250
  },
  {
    name: 'iPhone',
    price: 650
  }
];

localStorage.setItem('products', JSON.stringify(products)); // setup local storage
class App extends Component {
  // constructor method
  constructor(props) {
    super(props);
    
    // manage the state
    this.state = {
      products: []
    }
  }
  componentWillMount(){ // check what data WILL be grabbed from the component
    // need javascript version
    // const products = JSON.parse(localStorage.getItem('products'));
    //const products = localStorage.getItem('products'); // get the products with json stringify version
    // call the getproducts function 
    this.getProducts(); 

    // console.log(products); // check that you are getting the products
  }

  getProducts() {
    const products = JSON.parse(localStorage.getItem('products'));

    this.setState({
      products
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Products Manager</h1>
        {
          this.state.products.map(products => { // key of products and displace spans with name and price
            return (
              <div key={products.name}>
                <span>{products.name}</span> 
                {` | `} 
                <span>{products.price}</span>
                {` | `} 
                <button>Delete</button>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;

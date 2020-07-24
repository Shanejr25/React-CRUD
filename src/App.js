import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductItem from './ProductItem'

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
      products: JSON.parse(localStorage.getItem('products')) // empty products
      
    }

    this.onDelete = this.onDelete.bind(this); // bind it on delete
  }
  componentWillMount(){ // check what data WILL be grabbed from the component
    // need javascript version
    // const products = JSON.parse(localStorage.getItem('products'));
    //const products = localStorage.getItem('products'); // get the products with json stringify version
    // call the getproducts function 
    //this.getProducts(); 

    // set this to a variable to be used
    const products = this.getProducts();

    this.setState({ products });
    // console.log(products); // check that you are getting the products
  }

  getProducts() {
    // just return the list of products by grabbing the state of the products
    return this.state.products;
  }

  onDelete(name) {
    // store the products
    const products = this.getProducts();

    // filter them
    const filteredProducts = products.filter(products =>{
      return products.name !== name;
    });
    this.setState({
      products: filteredProducts // set state of products to the new products after deletion
    });
    console.log(name); // check that it works
    console.log(filteredProducts); // check that the array is being filtered
  }
  render() {
    return (
      <div className="App">
        <h1>Products Manager</h1>
        {
          this.state.products.map(products => { // key of products and displace spans with name and price
            return (
              <ProductItem
                key={products.name}
                name={products.name}
                price={products.price}
                onDelete={this.onDelete} // pass the onDelete method to the productitem component
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;

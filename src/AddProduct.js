import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class AddProduct extends Component {
  constructor(props){
      super(props);

      this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
      event.preventDefault(); // prevent page from refreshing
      this.props.onAdd(this.nameInput.value, this.priceInput.value);

      this.nameInput.value = ''; // clear the input fields
      this.priceInput.value = '';
  }
    render (){

        return (
            <form onSubmit={this.onSubmit}>  
                <h3>Add Product</h3>
                <input placeholder="Name" ref={nameInput => this
                    .nameInput = nameInput}/>
                <input placeholder="Price" ref={priceInput => this
                    .priceInput = priceInput}/>
                <button>Add</button>
                <hr /> {/* seperate from the list */}
            </form>
        );
    }
}

export default AddProduct;

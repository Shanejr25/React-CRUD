import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ProductItem extends Component {
  constructor(props){
    super(props);

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    // use destructuring to make code cleaner
    const { onDelete, name} = this.props;

    // call on delete in app.js to delete the name
    onDelete(name);
    //this.props.onDelete(this.props.name);
  }
    render () {
      const { name, price, onDelete } = this.props;

    return (
        <div>
            <span>{name}</span> 
            {` | `} 
            <span>{price}</span>
            {` | `} 
            <button onClick={this.onDelete}>Delete</button>
      </div>
    );
  }
}

export default ProductItem;

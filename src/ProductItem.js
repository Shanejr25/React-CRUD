import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ProductItem extends Component {
  constructor(props){
    super(props);

    // state used for editing
    this.state = {
      isEdit: false
    };

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  onDelete() {
    // use destructuring to make code cleaner
    const { onDelete, name} = this.props;

    // call on delete in app.js to delete the name
    onDelete(name);
    //this.props.onDelete(this.props.name);
  }

  onEdit() {
    this.setState({ isEdit : true}); // set edit to true so you can edit it
  }
  // submmit edit
  onEditSubmit(event) {
    event.preventDefault();

    this.props.onEditSubmit(this.nameInput.value, this.priceInput.value,
      this.props.name);

    this.setState({isEdit : false});
  }

    render () {
      const { name, price, onDelete } = this.props;

    return (
        <div>
          {
            this.state.isEdit
              ?  (
                <form onSubmit={this.onEditSubmit}>
                  <input placeholder="Name" ref={nameInput => this
                    .nameInput = nameInput} defaultValue={name}/>
                <input placeholder="Price" ref={priceInput => this
                    .priceInput = priceInput} defaultValue={price}/>
                <button>Save</button>
                </form>
              )
              : (
                  <div>
                <span>{name}</span> 
                {` | `} 
                <span>{price}</span>
                {` | `} 
                <button onClick={this.onDelete}>Delete</button>
                {` | `} 
                <button onClick={this.onEdit}>Edit</button>
                </div>
              )
        }
      </div>
    );
  }
}

export default ProductItem;

import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

  class App extends React.Component {

    constructor(){
      super();
      this.state={
          products:[
              {
                  price: 999,
                  title: 'Watch',
                  qty: 1,
                  img: 'https://media.istockphoto.com/photos/a-silver-stainless-steel-analog-watch-picture-id1368179045',
                  id: 1
              },
              {
                  price: 9999,
                  title: 'Mobile Phone',
                  qty: 10,
                  img: 'https://images.unsplash.com/photo-1649859398731-d3c4ebca53fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                  id: 2
              },
              {
                  price: 49999,
                  title: 'Laptop',
                  qty: 4,
                  img: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                  id: 3
              }
          ]
      }
  }
  handleIncreaseQuantity= (product) =>{
      console.log('please increase the qty of ',product);
      const {products} = this.state;
      const index=products.indexOf(product);

      products[index].qty +=1;
      this.setState({
          products
      })
  }

  handleDecreaseQuantity= (product) =>{
      console.log('please decrease the qty of ',product);
      const {products} = this.state;
      const index=products.indexOf(product);

      if(products[index].qty===0){
          return;
      }
      products[index].qty -=1;
      this.setState({
          products
      })
  }

  handleDeleteProduct= (id) =>{
      const {products}=this.state;

      const items=products.filter((item) => item.id !== id);

      this.setState({
          products: items
      })
  }

  getCartCount = () => {
    const {products}=this.state;
    let count=0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  }

  getCartTotal = () =>{
    const {products} =this.state;
    let total=0;
    products.map((product) => {
      total = total+product.qty*product.price;
    });
    return total;
  }
  render () {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{padding: 10, fontSize:20}}>Total: {this.getCartTotal()}</div>
      </div>
    );
  }
    }

export default App;

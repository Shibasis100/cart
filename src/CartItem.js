import React from "react";
    const CartItem = (props) => {

        // testing (){
        //     const promise= new Promise((resolve,reject) =>{
        //         setTimeout(() =>{
        //             resolve('done');
        //         },5000);
        //     })
        //     promise.then(() =>{
        //     //setState acts like a synchronus call
        //         this.setState({qty: this.state.qty+10});
        //         this.setState({qty: this.state.qty+10});
        //         this.setState({qty: this.state.qty+10});
        //         console.log('state',this.state);
        //     });
        // }

            const {price, title, qty}=props.product;
            const { product, onIncreaseQuantity, onDecreaseQuantity,onDeleteProduct}=props;
            return (
                <div className="cart-item">
                    <div className="left-block">
                        <img style={styles.image} src={product.img}/>
                    </div>
                    <div className="right-block">
                        <div style={{fontSize: 25}}>{title}</div>
                        <div style={{color: '#777'}}>Rs {price}</div>
                        <div style={{color: '#777'}}>Qty:{qty}</div>
                        <div className="cart-item-actions">
                            {/* Buttons */}
                            <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                            onClick={()=> onIncreaseQuantity(product)}
                            />
                            <img alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            onClick={()=> onDecreaseQuantity(product)}
                            />
                            <img alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1657195129~hmac=578bb0520b46ba69e26335b2db938d48"
                            onClick={()=> onDeleteProduct(product.id)}
                            />
                        </div>
                    </div>

                </div>
            );
        }

const styles={
    image: {
        height: 110,
        width: 110,
        borderRadious: 4,
        background: '#ccc'
    }
}

export default CartItem;
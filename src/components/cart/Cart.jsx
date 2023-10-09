import React, { useContext } from 'react'
import { cometics } from '../../Shopitems'
import { Shopcart } from './Shopcontext'
import { Cartitem } from './Cartitem';
import './cart.css'
import { Link } from 'react-router-dom';

const Cart = () => {
  
  const {cartItems,addTocart,getTotalamount} = useContext(Shopcart);
  const showAmount = getTotalamount();
 
  const delivery = 50;
  const allAmount = showAmount + delivery;

  return (
    <div className='cart'>
        <div className='cartitems'>
           {cometics.map((product)=>{
            if(cartItems[product.id]!==0){
              return(
                <Cartitem data={product}/>
              )
            }
           })}
        </div>
        <div className='price-cart'>
        {showAmount > 0 ?(
        <div className='totalamt'>
          <h5>Price Details:</h5>
          <div className='orderlist'>
          <h6>Total Product Price     :    ₹{showAmount}</h6>
          <h6>Delivery Fee : ₹50</h6>
          </div>
          <h5>Total Bill : ₹{allAmount}</h5>
          
          <div className='orderbtns'>
           <Link to='/login'><button className='shop-more'> PLACE ORDER</button></Link> 
           <Link to='/all'><button className='place-order'>SHOP MORE</button></Link> 
          </div>
        </div>
        ) : (<h2>Your cart is empty</h2>)}
        </div>
    </div>
  )
}

export default Cart

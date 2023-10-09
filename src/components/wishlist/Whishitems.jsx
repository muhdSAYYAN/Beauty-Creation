import React, { useContext } from 'react'
import { Shopcart } from '../cart/Shopcontext';

const Whishitems = (props) => {

    const {id,pname,pimg,Pprice}=props.data;
    const {cartItems,addTocart,removeFromcart,addQuantity,deletItem}=useContext(Shopcart)


  return (
    <div className='wishlist'>
    <div className='Cartitem-pr'>
       <img className='cart-primg' src={pimg} alt="" />
     
     
        <div className='content-cart'>
            <h5>{pname}</h5>
            <h6>{Pprice}</h6>
            <button className='shop-more'>BUY IT NOW</button>
        </div>
    </div>
    </div>
  )
}

export default Whishitems

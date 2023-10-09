import React, { useContext } from 'react'
import { Shopcart } from './Shopcontext';
import close from './removed.png'

export const Cartitem = (props) => {
    const {id,pname,pimg,Pprice}=props.data;
    const {cartItems,addTocart,removeFromcart,addQuantity,deletItem}=useContext(Shopcart)


  return (
    <div className='Cartitem-pr'>
       <img className='cart-primg' src={pimg} alt="" />
     
     
        <div className='content-cart'>
            <h5>{pname}</h5>
            <h6>{Pprice}</h6>
            <div className='count'>
          <h6>Quantity :</h6><button onClick={() =>addTocart(id)}>+</button>
          <span >{cartItems[id]}</span>
          <button onClick={()=> removeFromcart(id)}>-</button>
        </div>
        </div>
        <img className="deletebtn" onClick={()=>deletItem(id)} src={close} alt="" />
    </div>
  )
}

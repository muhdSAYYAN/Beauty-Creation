import React, { useContext } from 'react'
import { cometics } from '../../Shopitems'

import '../cart/cart.css'
import './wishlist.css'
import { Shopcart } from '../cart/Shopcontext';
import { Cartitem } from '../cart/Cartitem';
import { useWishlist } from '../wishlist/WhislistContext';
import Whishitems from './Whishitems';

const Wishlist = () => {

  const {cartItems,addTocart,getTotalamount} = useContext(Shopcart);
  const { wishlistItems } = useWishlist();
 console.log(wishlistItems);
  return (
    <div className='Wishlist'>
    <div className=''>
      {wishlistItems.map((product) => (
        <Whishitems key={product.id} data={product} />
      ))}
    </div>
  </div>
  )
}

export default Wishlist

import React, { useContext } from 'react'
import '../navbar/Nav.css'
import searchimg from '../navbar/search.png'
import cart from '../navbar/cart.png'
import contact from '../navbar/contact.png'
import heart from '../navbar/heart.png'
import { Link } from 'react-router-dom'
import { Shopcart } from '../cart/Shopcontext'

const Navbar = () => {

 const {cartItems } = useContext(Shopcart);
 const itemCount = Object.values(cartItems).reduce((acc , quantity) => acc + quantity,0)


  return (
    <div  className='navbar'>
       
      <div className='nav-option'>
        <span className='shop-head'>SHOP
          <div className='shop-div'>


             <div className='shop-cont'>
             <Link to='/all'> <img className='shopall' src="https://www.rarebeauty.com/cdn/shop/files/gnav-shop-dropdown-shop-all_360x.jpg?v=1613736632" alt="" /></Link>
                 <h5>Shop All</h5> 
              </div>
              <div className='shop-cont'>
                <img className='shopall' src="https://img.freepik.com/free-photo/close-up-collection-make-up-beauty-products_23-2148620012.jpg?size=626&ext=jpg&ga=GA1.1.1119083959.1693900671&semt=sph" alt="" />
                 <h5>Best Sellers</h5>
              </div>
              <div className='shop-cont'>
               <Link to='/face'><img className='shopall' src="https://kyliecosmetics.com/cdn/shop/files/New_Site_Menu_Images_Face_1_190x190_crop_center@2x.jpg?v=1675210645" alt="" /></Link> 
                 <h5>Face</h5>
              </div>
              <div className='shop-cont'>
               <Link to='/lip'> <img className='shopall' src="https://media.istockphoto.com/id/477663679/photo/every-woman-has-a-favourite-shade.jpg?b=1&s=612x612&w=0&k=20&c=c2-WrNBeazj50OKBLhbO-lddo9CqNF6fQaZMbllmSxE=" alt="" /></Link>
                 <h5>Lip</h5>
              </div>
              <div className='shop-cont'>
               <Link to='/eye'> <img className='shopall' src="https://www.rarebeauty.com/cdn/shop/files/gnav-shop-dropdown-fa23-nav-image-eye_360x.jpg?v=1689024424" alt="" /></Link>
                 <h5>Eye</h5>
              </div>
             


          </div>
        </span>
        <span>SHADE FINDER</span>
        <span>RARE IMPACT</span>
      </div>
          
      <Link to='/' className='heading'><h1>Beauty Creation</h1></Link> 

      <div className='end-op'>
        <div className="search-op">
            <input type="text" placeholder='Search'/>
            <img src={searchimg} alt="" />
        </div>
        <img src={contact} alt="" />
       <Link to='/wish'><img src={heart} alt="" /></Link> 

        <Link to='/cart'>  
          <img src={cart} alt="" />
          {itemCount > 0 && <span className='countcart'>{itemCount}</span>}
          </Link> 
      </div>
    </div>
  )
}

export default Navbar

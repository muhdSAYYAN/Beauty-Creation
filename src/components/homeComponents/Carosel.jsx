import React from 'react'
import '../homeComponents/Caro.css'
import { Link } from 'react-router-dom'

const Carosel = () => {
  return (
    <div className='caro'>
    

      <div id="carouselExample" class="carousel slide caro-div">
  <div class="carousel-inner">
    
    <div class="carousel-item active caro-img">
    <div className='red'>
      <h1>Beauty</h1>
      <p>Elegance comes from being as beautiful inside as outside.</p>
      <Link className='shopnow' to='/all'><button className='shopnow1'>Shop Now</button></Link>
    </div>
    <div className='primg'><div className='helo'><img src="https://www.rarebeauty.com/cdn/shop/files/HP-split-tout-about-1522_900x.jpg?v=1613736922" alt="" /> </div></div>
      {/* <img  src="https://images.pexels.com/photos/850801/pexels-photo-850801.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="..."/> */}
      
    </div>
    
    <div class="carousel-item caro-img ">
    <div className='red'>
      <h1>Lip</h1>
      <p>“Joy is the best makeup. But a little lipstick is a close runner-up.” </p>
      <Link className='shopnow' to='/all'><button className='shopnow1'>Shop Now</button></Link>
    </div>
    <div className='primg'><div className='helo'><img src="https://kyliecosmetics.com/cdn/shop/files/KJC_MLC_23_LipMacro_LowMaintenance_01_WS_V2_800x.jpg?v=1694448163" alt="" /> </div></div>
      <img  src="https://images.pexels.com/photos/850801/pexels-photo-850801.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item caro-img">
    <div className='red'>
      <h1>Eye</h1>
      <p>“Your eye makeup says so much about you and your style.”</p>
      <Link className='shopnow' to='/shop'><button className='shopnow1'>Shop Now</button></Link>
    </div>
    <div className='primg'><div className='helo'><img src="https://kyliecosmetics.com/cdn/shop/products/o4jx7jrqa0e7it6j7tql_600x600.jpg?v=1673730918" alt="" /> </div></div>
      <img src="https://images.pexels.com/photos/850801/pexels-photo-850801.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


    </div>
  )
}

export default Carosel

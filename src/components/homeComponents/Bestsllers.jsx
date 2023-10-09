import React from 'react'
import '../homeComponents/Best.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bestProduct } from '../../Products';


const Bestsllers = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


      
  return (
    <div className='best-seeling'>
        <h1>Bestsellers</h1>
         <Carousel responsive={responsive}>
            {bestProduct.map((item)=>{

  return(
           
  <div className='best-item'>
    <img src={item.imgProduct} alt="" />
    <h2>{item.name}</h2>
    <div className="caro-clr">
   
       <img  src={item.img1} alt="" srcset="" />
       <img  src={item.img2} alt="" srcset="" />
       <img  src={item.img3} alt="" srcset="" />

          
    </div>
    <span>ADD TO BAG . ₹{item.price}</span>
  </div>

)})}
  
   </Carousel>
    </div>
  )
}

export default Bestsllers

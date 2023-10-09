import React from 'react'
import '../homeComponents/category.css'
import face from '../homeComponents/images/face.jpg'
import lip from '../homeComponents/images/lipstick.jpg'
import eye from '../homeComponents/images/eye.jpg'
import { Link } from 'react-router-dom'


const Category = () => {
  return (
    <div className='category'>
      <div className='cate-main'>
      <h1 className='cate-h1'>Select by Category & Choose</h1>
        <div className='cate-sub'>
          
        <div className="cate-div">
          <Link to='/face'><img className='cate-img' src={face} alt="" /></Link> 
          <h2 className='cate-font'>Face</h2>
          </div>

          <div className="cate-div1">
          <Link to='/lip'><img className='cate-img' src={lip} alt="" /></Link>
          <h2 className='cate-font'>Lip</h2>
          </div>

          <div className="cate-div2">
         <Link to='/eye'><img className='cate-img' src={eye} alt="" /></Link> 
          <h2 className='cate-font'>Eye</h2>
          </div>

          {/* <div className="cate-div3">
          <img className='cate-img' src={face} alt="" />
          <h2 className='cate-font'>Face</h2>
          </div> */}
          
          </div>
          {/* <img src={} alt="" />
          <img src="" alt="" /> */}
      </div>
    </div>
  )
}

export default Category

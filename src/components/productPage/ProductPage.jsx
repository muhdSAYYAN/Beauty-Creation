import React, { useState } from 'react'
import '../productPage/productPage.css'
import { Link } from 'react-router-dom'
import close from '../homeComponents/images/close.png'
import arrow from '../navbar/arrow.png'
import { cometics } from '../../Shopitems'



const ProductPage = ({onPriceRangeChange }) => {
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const [isFilterVisible, setFilterVisible] = useState(false);
  const handlePriceRangeChange = (range) => {
    setSelectedPriceRange(range);
    onPriceRangeChange(range); // Callback to update the selected price range in Faceproducts
  };
 

 
   

  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible);
  };

  const togglePrice = () => {
    const labelsDiv = document.querySelector('.labels');
    labelsDiv.classList.toggle('show');
  };

 const toggleBrand = () => {
    const brandDiv = document.querySelector('.brandDiv')
    brandDiv.classList.toggle('show')
  };

 
  
// const filtering = cometics.filter((product)=>
//  product.pname.toLowerCase()
//  )


 

  return (
    <div className='productsall'>
        <h2>Get All Beauty Items</h2>
        <h4>Categories</h4> 
        <div className='categories'>
             
             <div className='types'>
             <Link className='linspan' to='/all'> <span>All</span></Link>
              <Link className='linspan'  to='/face'><span>Face</span></Link>
             <Link className='linspan'   to='/lip'><span>Lip</span></Link> 
              <Link className='linspan'  to='/eye'> <span>Eye</span></Link>
             </div>

             <div className="filter-div">
                <div className='filter' onClick={toggleFilter}><span>Filter </span></div>
              
                
             </div>
        </div>
        
        <div className={`filter-panel ${isFilterVisible ? 'show' : ''}`}>
        <img className="close-button" src={close} alt="" onClick={toggleFilter}/>
        {/* Content of the filter panel */}
        {/* You can add your filter options and content here */}

          <div className='price'>
            <h3 className='mrp' onClick={togglePrice}>Price</h3>
            <div className='labels'>
            <label onClick={() => handlePriceRangeChange("5000-5500")}>
    <input type="radio" name="price-range" value="5000-5500"
          />
    ₹1000 - ₹1500
  </label>
  <label onClick={() => handlePriceRangeChange("1500-2000")}>
    <input type="radio" name="price-range" value="1500-2000" />
    ₹1500 - ₹2000
  </label>
  <label onClick={() => handlePriceRangeChange("2000-2500")}>
    <input type="radio" name="price-range" value="2000-2500" />
    ₹2000 - ₹2500
  </label>
  <label>
    <input type="radio" name="price-range" value="20-30" />
    ₹2500 - ₹3000
  </label>
  <label>
    <input type="radio" name="price-range" value="20-30" />
    ₹3500 - ₹4000
  </label>
  <label>
    <input type="radio" name="price-range" value="20-30" />
    ₹4000 - ₹4500
  </label>
  <label>
    <input type="radio" name="price-range" value="20-30" />
    ₹5000 - ₹6000
  </label>
  </div>
            </div>     

            <div className="brand">
  <h3 className="brand-header" onClick={toggleBrand}>Sort</h3>
  <div className="brandDiv">
    <label>
      <input type="checkbox" name="brand" value="brand1" />
      Bset Selles
    </label>
    <label>
      <input type="checkbox" name="brand" value="brand2" />
      Top Rated
    </label>
    <label>
      <input type="checkbox" name="brand" value="brand3" />
      Lowest Price
    </label>
    </div>
  </div>
</div>
       
   
     
    </div>
  )
}

export default ProductPage

import React, { useState } from 'react'
import ProductPage from './ProductPage'
import { cometics } from '../../Shopitems'
import { Link } from 'react-router-dom';
import close from '../homeComponents/images/close.png'

const Allproducts = () => {
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [price,setPrice] = useState(null);
  const [bestSeller,setBestseller] = useState(null);
  const [topRated,setToprated] = useState(null);
  const [lowPrice,setLowprice] = useState(null);

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

const rangePrice =(priceRange)=>{
  setPrice(priceRange)
}
const bestitem =(best)=>{
  setBestseller(best)
}
const Rated =(top)=>{
  setToprated(top)
}
const lowrate =(low)=>{
  setLowprice(low)
}

const filteredproduct = cometics.filter((product)=>
  product.pname.toLowerCase()
)

const filteredbycategory =()=>{
  let filtered = filteredproduct;

  if(price){
    filtered = filtered.filter((product)=>product.priceRange === price)
  }
  if(bestSeller){
    filtered = filtered.filter((product)=> product.best === bestSeller)
  }
  if(topRated){
    filtered = filtered.filter((product)=> product.top === topRated)
  }
  if(lowPrice){
    filtered = filtered.filter((product)=> product.low === lowPrice)
  }
 return filtered
}

const clearFilters = () => {
setPrice(null);
setBestseller(null);
setLowprice(null);
setToprated(null);

const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach((radio) => {
  radio.checked = false;
});

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.checked = false;
});

};

const filteredItems = filteredbycategory();


  return (
    <div className='face'>

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
            <label  onClick={()=>rangePrice('1000-1500') }>
    <input type="radio" name="price-range" value="5000-5500"
          />
    ₹1000 - ₹1500
  </label>
  <label onClick={()=>rangePrice('1500-2000') } >
    <input type="radio" name="price-range" value="1500-2000" />
    ₹1500 - ₹2000
  </label>
  <label onClick={()=>rangePrice('2000-2500') } >
    <input type="radio" name="price-range" value="2000-2500" />
    ₹2000 - ₹2500
  </label>
  <label onClick={()=>rangePrice('2500-3000') }>
    <input type="radio" name="price-range" value="20-30" />
    ₹2500 - ₹3000
  </label>
  <label onClick={()=>rangePrice('3000-3500') }>
    <input type="radio" name="price-range" value="20-30" />
    ₹3000 - ₹3500
  </label>
  <label onClick={()=>rangePrice('3500-4000') }>
    <input type="radio" name="price-range" value="20-30" />
    ₹3500 - ₹4000
  </label>
  <label onClick={()=>rangePrice('4000-4500') }>
    <input type="radio" name="price-range" value="20-30" />
    ₹4000 - ₹4500
  </label>
  <label onClick={()=>rangePrice('4500-5000') }>
    <input type="radio" name="price-range" value="20-30" />
    ₹4500 - ₹5000
  </label>
  <label onClick={()=>rangePrice('5000-5500') }>
    <input type="radio" name="price-range" value="20-30" />
    ₹5000 - ₹5500
  </label>
  </div>
            </div>     

            <div className="brand">
  <h3 className="brand-header" onClick={toggleBrand}>Sort</h3>
  <div className="brandDiv">
    <label onClick={()=>bestitem("bestseller")}>
      <input type="checkbox" name="brand" value="brand1" />
      Bset Selles
    </label>
    <label onClick={()=>Rated("toprated")}>
      <input type="checkbox" name="brand" value="brand2" />
      Top Rated
    </label>
    <label onClick={()=>lowrate("lowprice")}>
      <input type="checkbox" name="brand" value="brand3" />
      Lowest Price
    </label>
    </div>

    <button className='clear-btn' onClick={clearFilters}>clear all</button>
  </div>
</div>
       
   
     
    </div>
    
    <div className='face-cosmetics'>
    {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
           
               <div className='face-item'>
          <img src={item.pimg} alt="" />
          <h2>{item.pname}</h2>
          <div className="caro-clr">
         
             <img  src={item.color1} alt="" srcset="" />
             <img  src={item.color2} alt="" srcset="" />
             <img  src={item.color3} alt="" srcset="" />
      
                
          </div>
          <Link className='addtocart' to='/detailing' state={{selectedProduct:item}}><div >ADD TO BAG . ₹{item.Pprice} <label className='offer'>₹{item.Rprice}</label></div></Link>
        </div>
           
          ))
        ) : (
          <div className="no-matching-items">
            No such items exist for the selected filters.
          </div>
        )}
    </div>
    </div>
  )
}

export default Allproducts

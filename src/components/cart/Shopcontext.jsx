import React, { createContext, useState } from 'react'
import { cometics } from '../../Shopitems';


export const Shopcart = createContext(null);

const getdefaultcart = () =>{
    let cart={};
    for(let i=1 ;i<cometics.length+1;i++){
        cart[i]=0;
    }
    return cart;
}

export const Shopcontext = (props) => {

  const [cartItems,setCartitems] = useState(getdefaultcart());
  const getTotalamount=()=>{
    let totalAmount = 0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            let itemInfo = cometics.find((product)=>product.id===Number(item));
            totalAmount += cartItems[item] * itemInfo.Pprice;
        }
    }
    return totalAmount;
  }

  const addTocart=(itemid)=>{
    setCartitems((prev)=>({...prev,[itemid]:prev[itemid] +1}))
  }

  const removeFromcart=(itemid)=>{
    setCartitems((prev)=>({...prev,[itemid]:prev[itemid] -1}))
  }

  const addQuantity=(newAmount,itemid)=>{
    setCartitems((prev)=>({...prev,[itemid]:newAmount}))
  }

  const deletItem=(itemid)=>{
    setCartitems((prev)=>({...prev,[itemid]: prev[itemid] - prev[itemid]}))
  }




  const contextValue ={cartItems,addTocart,getTotalamount,removeFromcart,addQuantity,deletItem}

  return (
  
    <Shopcart.Provider value={contextValue}>{props.children}</Shopcart.Provider>
  )
}

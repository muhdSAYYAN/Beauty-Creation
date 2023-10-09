import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Shopcart } from "../cart/Shopcontext";
import like from './heart.png'
import like2 from './heart (1).png'
import { useWishlist } from "../wishlist/WhislistContext";

export const Productdetail = (props) => {
  const { cartItems, addTocart } = useContext(Shopcart);
  const [love,setLove] = useState(false);
  const { addToWishlist } = useWishlist();

  const location = useLocation();

  const selectedProduct = location.state
    ? location.state.selectedProduct
    : null;

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [buttonText, setButtonText] = useState("ADD TO CART");

  const colorKeys = ["pimg", "pimg1", "pimg2"];

  const handleColorClick = (colorIndex) => {
    setSelectedColorIndex(colorIndex);
  };

  const handleAddToCart = (productId) => {
    addTocart(productId);
    setButtonText("ITEM ADDED");
    console.log('Button text changed to "Item Added"');
  };

  const handleAddToLove = () => {
    setLove(!love);
    addToWishlist(selectedProduct);
    console.log('Adding to Wishlist:', selectedProduct);
  };

  return (
    <div className="Productdetail">
      <div className="datail">
        <div className="product-data">
          <h1>{selectedProduct.pname}</h1>
          <p>
            Treat your makeup like jewelry for the face. Play with colors,
            shapes, structure – it can transform you.
          </p>
          <h6>₹{selectedProduct.Pprice} </h6>{" "}
          <div className="like">
          <h6 className="offer"> ₹{selectedProduct.Rprice}</h6>
          <img  src={love ? like2 : like} alt="" onClick={() => handleAddToLove(selectedProduct.id)}/>
          </div>
          <span
            className="addtocart"
            onClick={() => handleAddToCart(selectedProduct.id)}
          >
            {buttonText}
          </span>
          <Link className="addtocart" to="/all">
            <span>SHOP MORE</span>
          </Link>
        </div>
        <div className="product-image">
          <img
            src={selectedProduct[colorKeys[selectedColorIndex]]}
            alt=""
            srcset=""
          />
          <div className="imagdiv">
            <h6>Choose Colour</h6>
            <div className="opt-clr">
              {selectedProduct.color1 && (
                <img
                  src={selectedProduct.color1}
                  alt=""
                  srcSet=""
                  onClick={() => handleColorClick(0)}
                />
              )}
              {selectedProduct.color2 && (
                <img
                  src={selectedProduct.color2}
                  alt=""
                  srcSet=""
                  onClick={() => handleColorClick(1)}
                />
              )}
              {selectedProduct.color3 && (
                <img
                  src={selectedProduct.color3}
                  alt=""
                  srcSet=""
                  onClick={() => handleColorClick(2)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

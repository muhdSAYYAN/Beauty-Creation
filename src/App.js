import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/navbar/Navbar';
import Cart from './components/cart/Cart';
import Wishlist from './components/wishlist/Wishlist';
import ProductPage from './components/productPage/ProductPage';
import Allproducts from './components/productPage/Allproducts';
import Faceproducts from './components/productPage/Faceproducts';
import Lipproducts from './components/productPage/Lipproducts';
import Eyeproducts from './components/productPage/Eyeproducts';
import { Productdetail } from './components/productPage/Productdetail';
import { Shopcontext } from './components/cart/Shopcontext';
import { WishlistProvider } from './components/wishlist/WhislistContext';
// import Wishlist from './components/wishlist/Wishlist';

function App() {
  return (
    <div className="App">

      <Shopcontext>
        <WishlistProvider>
       <BrowserRouter>
       <Navbar/>
       
         <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/shop' element={<ProductPage/>}/> */}
          <Route path='/all' element={<Allproducts/>}/>
          <Route path='/face' element={<Faceproducts/>}/>
          <Route path='/lip' element={<Lipproducts/>}/>
          <Route path='/Eye' element={<Eyeproducts/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/wish' element={<Wishlist/>}/>
          <Route path='/detailing' element={<Productdetail/>}  />
         </Routes>
       </BrowserRouter>
       </WishlistProvider>
       </Shopcontext>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Header from './Components/Layout/Header.js'
import Meals from "./Components/Meals/Meals.js";
import Cart from "./Components/Cart/Cart.js";
import CartProvider from "./store/CartProvider.js";
function App() {

  const [cartisShown, setCartIsShown] = useState(false);
  const showCartHandler = ()=>{
    setCartIsShown(true)
  }
  const hideCartHandler = ()=>{
    setCartIsShown(false)
  }
  
  return (
    <CartProvider>
      {cartisShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
      
    </CartProvider>
  );
}

export default App;

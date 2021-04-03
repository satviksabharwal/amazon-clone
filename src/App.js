import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import { db } from "./Components/Firebase";
function App() {

  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
  db.collection('cartItems').onSnapshot((snapshot) => {
    const tempItems = snapshot.docs.map((doc) => ({
      id: doc.id,
      product: doc.data()
    }));
    setCartItems(tempItems);
  });
  }
  useEffect(() => {
    getCartItems(); 
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart cartItems={cartItems}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import Header from "./Header.js"
import Home from "./Home"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout"
import Login from "./Login"
import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider.js";

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>>>', authUser);
      if (authUser) {
        //The user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

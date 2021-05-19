import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from './firebase'

function App() {
  const [{basket}, dispatch]=useStateValue()
  useEffect(()=>{
   const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type : 'SET_USER',
          user : authUser
        })
      } else {
        dispatch({
          type : 'SET_USER',
          user : null
        })
      }
    })
    return () => {
      unsubscribe()
    }
  },[])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

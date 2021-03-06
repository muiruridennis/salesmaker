import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom"
import { Container } from "@material-ui/core"
import Navbar from "./components/Nav/navBar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Pay from "./helpers/payment/pay";
import MyShopping from "./components/myShopping/myShopping";
// import Footer from "./components/footer/footer";
import ItemsDetails from "./helpers/itemsDetails"

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
 
  return (
    <Router>
      <Container maxWidth="xl">
        <Navbar />

        <Switch>
          <Route path="/" exact component={()=> <Redirect to="/items" />} />
          <Route path="/items" exact component={Home}/>
          <Route path="/items/search" exact component={Home}/>
          <Route path="/items/myshopping" exact component={MyShopping} />
          <Route path="/items/payment" exact component={Pay} />
          <Route path="/items/:id" exact component={ItemsDetails}/>
          <Route path="/auth" exact component={()=>(!user ? <Auth/> : <Redirect to= "/items" />)} />

        </Switch>
        {/* <Footer/> */}
      </Container>

    </Router>

  );
};

export default App;

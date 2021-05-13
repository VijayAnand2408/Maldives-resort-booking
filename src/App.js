import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./Component/Navbar"
import Home from "./Component/Home"
import Footer from "./Component/Footer"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Pvilla from "./Component/Resort/Pvilla"
import Villa from "./Component/Resort/Villa"
import Wvilla from "./Component/Resort/Wvilla"
import Start from "./Component/Start"
import About from "./Component/About"
import Services from "./Component/Services"
import Resort from "./Component/Resort/Resort"
import Gallary from "./Component/Gallary"



import React, { Component } from 'react'

export class App extends Component {

  render() {
    return (
      <div>
        <Router>
        <Navbar />
        
        <Switch>
           <Route path="/" exact><Start/></Route>
          <Route path="/home"> <Home /></Route>
          <Route path="/home"> <Services /></Route>
          <Route path="/home">  <Resort /></Route>
          <Route path="/home"> <Gallary /></Route>
          <Route path="/home">  <About /></Route>
           <Route path="/previlla"><Pvilla /> </Route>
            <Route path="/villa">   <Villa /> </Route>
            <Route path="/watervilla">   <Wvilla /> </Route>
          </Switch>
        <Footer />
        </Router>
      </div>
    )
  }
}

export default App

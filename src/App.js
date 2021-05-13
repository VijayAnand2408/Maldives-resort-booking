import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./Component/Navbar"
import Home from "./Component/Home"
import Footer from "./Component/Footer"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Pvilla from "./Component/Pvilla"


import React, { Component } from 'react'

export class App extends Component {

  state ={
    visible: true
  }


  render() {
    return (
      <div>
        <Navbar />
       { this.state.visible ? <Home /> : null} 
        <Footer />
      </div>
    )
  }
}

export default App

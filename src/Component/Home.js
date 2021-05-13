
import React, { Component } from 'react'
import Header from "./Header"
import About from "./About"
import Services from "./Services"
import Resort from "./Resort/Resort"
import Gallary from "./Gallary"
import {BrowserRouter as Router} from "react-router-dom"


export class Home extends Component {
    render() {
        return (
            <div>
                <Router>
                <Header />
             <Services />
              <Resort />
              <Gallary />
               <About />
                </Router>
            </div>
        )
    }
}

export default Home


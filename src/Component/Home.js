
import Header from "./Header"
import About from "./About"
import Services from "./Services"
import Resort from "./Resort"
import Gallary from "./Gallary"

import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
                <Header />
             <Services />
              <Resort />
              <Gallary />
               <About />
            </div>
        )
    }
}

export default Home


import React from "react"
import Typed from "react-typed"


function Header() {
    return (
      <div className="jumbotron jumbotron-fluid" id="home">
      <div  className= "img-fluid">
          <div className="wrap">
              <h1>Welcome to <br /> <span className="type"><Typed className="type"
              strings={["Paradise","Promised Land","Heaven"]}
               typeSpeed={200}
               backSpeed={150}
               loop
              /></span></h1>
          </div>
    
      </div>
     
      </div>
    
    )
}

export default Header;





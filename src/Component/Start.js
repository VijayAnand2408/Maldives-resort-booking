import React from 'react'
import {Link} from "react-router-dom"

function Start() {
    return (
        <div className="jumbotron-fluid" >
              
            <div className="start-img">
              <div className="wrap">
              <div class="button" id="button-2">
                    <div id="slide"></div>
                    <Link to="/home">  <a >Explore</a> </Link> 
                </div>
                </div>
        </div></div>
    )
}

export default Start

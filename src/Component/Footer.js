
import React from 'react'
import {AiFillInstagram,AiOutlineTwitter,AiFillYoutube} from "react-icons/ai"
import {FaLinkedinIn,FaFacebookF,FaPhoneAlt} from "react-icons/fa"
import {GrMail} from "react-icons/gr"

function Footer() {
    return (
        <div className="foot " >
            <div className="container">
          <div className="row">
              <a href="" className="col" ><FaFacebookF className="ico"/></a>
              <a href="" className="col" ><AiFillInstagram className="ico"/></a>
              <a href="" className="col" ><FaLinkedinIn className="ico"/></a>
              <a href="" className="col" ><AiOutlineTwitter className="ico"/></a>
              <a href="" className="col" ><AiFillYoutube className="ico"/></a>
              </div>
            <hr className="h" />
           <p className="h4">© 2021 mydives.com All rights reserved.</p>
            <h3 className="foot-text">The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</h3>
        </div>
        <div >
        <p className="le"><span className="lef"> <GrMail className="boo"/><a href="#">info@mydives.com</a> </span>
       <span className="re"> <FaPhoneAlt className="boo"/><a href="#">+1545236556</a></span>    
        </p>    
        </div>
        </div>
    )
}

export default Footer

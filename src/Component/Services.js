import React from 'react'
import { BiSpa } from "react-icons/bi"
import { MdPool,MdLocalLaundryService } from "react-icons/md"
import { BsWifi } from "react-icons/bs"
import {GiWineBottle,GiScubaMask,GiCruiser} from "react-icons/gi"



function Services() {
    return (
        <div className="container-fluid">
            <div className="ser">

            
            <h2><span className="firstLetter">O</span>ur  <span className="firstLetter">S</span>ervices</h2>
            <h2>________</h2>
            <div className="dai">
            <div className="row">
                <div className="col"><BiSpa /><br />Spa</div>
                <div className="col"><MdPool /><br />Indoor pool</div>
                <div className="col"><MdLocalLaundryService /><br />Laundry</div>
                <div className="col"><BsWifi /><br />Wifi</div>

            </div>
            <br />
            <div className="row">
            <div className="col"><GiWineBottle /><br />Bar</div>
                <div className="col"><GiScubaMask /><br />Cuba</div>
                <div className="col"><GiCruiser /><br />Pick up/drop</div>

            </div>
            </div>
            </div>
            
        </div>
    )
}

export default Services

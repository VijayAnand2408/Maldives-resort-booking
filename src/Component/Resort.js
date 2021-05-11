import React from 'react'
import {BiBed} from "react-icons/bi"
import {FaUmbrellaBeach} from "react-icons/fa"
import {GiWineBottle,GiCook,GiWaterfall} from "react-icons/gi"

function Resort() {
    return (
 <>
<div className="chill">
    <h2>Chill'n Spot
        <br />
        <h1>_____</h1>
    </h2>
</div>
 <div className="row container-fluid">
                <div className="card col-md">
                <img src="https://maldives-magazine.com/pictures/private-ozen-reserve-with-slide-5.jpg" className="card-img-top" alt="..." />
                
                <div className="card-body">
                    <h5 className="card-title">Premium Villa</h5>
                    <p className="card-text">The Private Reserve has an extraordinary living room where several dining and sitting areas are set up. The living-room has a huge catamaran net, a bar and full lagoon vistas.<br/><br/>
                    <span className="row">
                            <span className="col"><GiWineBottle />Mini bar</span>
                            <span className="col"><FaUmbrellaBeach /> Private beach</span>
                     </span>
                     <span className="row">
                            <span className="col"><GiCook />Chef</span>
                            <span className="col"><GiWaterfall /> WaterSlide</span>
                     </span>
                    
                    
                    </p><br /><br />
                    <a href="#" className="btn btn-primary">View Deals</a>
                </div>

                </div>
                <div className="card col-md">
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/91/00/a0/aeriel-view.jpg?w=900&h=-1&s=1" className="card-img-top" alt="..." />
                    
                    <div className="card-body">
                        <h5 className="card-title">Villa</h5>
                        <p className="card-text">Facing the sunrise with spectacular views of the Indian Ocean are 20 Ocean Villas offer large bathrooms, comfortable living spaces and luxurious outdoor living areas complete with infinity edge plunge pools.<br /><br />
                        <span className="row">
                            <span className="col"><BiBed />family</span>
                            <span className="col"><FaUmbrellaBeach /> Private beach</span>
                        </span>
                        
                        </p><br /><br />
                        <a href="#" className="btn btn-primary">View Deals</a>
                    </div>

                    </div>
                    <div className="card col-md">
                    <img src="https://paradiseislandmaldives.net/wp-content/uploads/2019/12/Paradise-Islands-Maldives_6-1024x682.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Water House</h5>
                            <p className="card-text">All-Inclusive Package - from premium drinks, exquisite cuisine to luxurious accommodation. And if you are not exploring one of the best diving sites in the world around the South Ari Atoll; try spa treatments for a more beautiful you.
                          <br /><br/>  <span className="row">
                            <span className="col"><FaUmbrellaBeach /> Private beach</span>
                        </span>
                            </p><br /><br />
                            <a href="#" className="btn btn-primary">View Deals</a>
                        </div>

                        </div>
                    

  </div>
  </>  );
}

export default Resort;

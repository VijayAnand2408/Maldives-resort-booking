import React from 'react'

import {GrGrommet} from "react-icons/gr"


function Wvilla() {
    return (
        <div className=" jumbotron-fluid">
          <div  className= "villa">     
        <img src="https://www.teahub.io/photos/full/219-2193295_maldives-resorts-aerial-view-island-sea-wallpaper.jpg" class="img-fluid" alt="..."></img>
          <br/> <br/> <br />
           <h2 className="inter">Interior & Exterior</h2>
           <div className="row ">
               <div className="col container ">


                                                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                                <ol className="carousel-indicators">
                                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                                </ol>
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                    <img src="https://waldorfastoria3.hilton.com/resources/media/wa/MLEONWA/en_US/img/shared/full_page_image_gallery/main/WA_ovwaterliving01_6_770x434_FitToBoxSmallDimension_Center.jpg" className="d-block w-100" alt="..." />
                                                    </div>
                                                    <div className="carousel-item">
                                                    <img src="https://premiermaldives.com/wp-content/uploads/2018/06/Joali-Maldives-Luxury-Beach-Villa-with-Pool-5-1920x1080.jpg" className="d-block w-100" alt="..." />
                                                    </div>
                                            
                                                <div className="carousel-item">
                                                    <img src="https://www.hideawaybeachmaldives.com/wp-content/uploads/2016/08/Hideaway-Maldives-villas-6-Ocean-villa-16-1030x579.jpg" className="d-block w-100" alt="..." />
                                                    </div>
                                                </div>
                                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                                </div>
                                                </div>
               <div className="col container ">


                                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="https://m.wsj.net/video/20200403/041020lotd_maldinves/041020lotd_maldinves_960x540.jpg" class="d-block w-100" alt="..."/>
                                    </div>
                                    <div class="carousel-item">
                                    <img src="https://maldives-magazine.com/pictures/private-ozen-reserve-with-slide-5.jpg" class="d-block w-100" alt="..."/>
                                    </div>
                                </div>
                                </div><br /><br/>

                            
                
               </div>
         </div>


         <h1 className="des">Villa Description<br/>
         <h2>_________</h2></h1><br/>
                                                                                <p className="text-center">The vast ground floor master bedroom includes an
                                                                        ensuite bathroom, dressing room and outdoor shower,
                                                                        plus an adjacent children’s sleeping area. A retractable
                                                                        roof over the master bedroom slides back at the touch
                                                                        of a button to reveal starry skies. Also found on the
                                                                        ground floor are a spacious, light-filled living room and
                                                                        pantry with a minibar.
                                                                        The second bedroom is upstairs, and features an
                                                                        additional dressing room, bathroom, seating area and
                                                                        dining sala with roof deck. Outside, a vast deck with
                                                                        loungers, swing and catamaran nets surrounds the
                                                                        private freshwater pool, with a curved water slide that
                                                                        goes straight into the lagoon, while a sunken circular
                                                                        lounging area commands panoramic views over the ocean</p><br/><br/>
     
     
      <div className="row we">                                                                  
      
        <h3 className="col">Bedrooms</h3>
        <h3 className="col">Adults</h3>
        <h3 className="col">SQ Metres</h3>
        <h3 className="col">SQ Feet</h3>
        </div>
          <div className="row we">                                                                  
      
        <h3 className="col">2</h3>
        <h3 className="col">4</h3>
        <h3 className="col">772</h3>
        <h3 className="col">8,310</h3>
        </div>

       <h1 className="desi">Amenities</h1>

       <div >
       <div className="row">
           <div className="col">
               <div className="text-center"><GrGrommet/>Catamaran Nets</div>
  
           </div>

           <div className="col">
               <div className="text-center"><GrGrommet/>Children's  Area</div>

           </div>

       </div>


       <div className="row">
           <div className="col">
               <div className="text-center"><GrGrommet/>Dining Area</div>
  
           </div>

           <div className="col">
               <div className="text-center"><GrGrommet/>Freshwater Pool</div>

           </div>

       </div>

       <div className="row">
           <div className="col">
               <div className="text-center"><GrGrommet/>Outdoor Bathroom</div>
  
           </div>

           <div className="col">
               <div className="text-center"><GrGrommet/>Pantry and Minibar</div>

           </div>

       </div>

       <div className="row">
           <div className="col">
               <div className="text-center"><GrGrommet/>Retractable Roof</div>
  
           </div>

           <div className="col">
               <div className="text-center"><GrGrommet/>Sunken Seating </div>

           </div>

       </div>

       <div className="row">
           <div className="col">
               <div className="text-center"><GrGrommet/>Upper Deck with Dining Sala</div>
  
           </div>

           <div className="col">
               <div className="text-center"><GrGrommet/>Water Slide</div>

           </div>

       </div>

    <div className="container jumbotron">
      
    <form >
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" />
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4" />
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div className="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity" />
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip" />
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>


    </div>
         
       </div>

      </div>
         </div>
        
    )
}

export default Wvilla

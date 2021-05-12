import React from 'react'

function Gallary() {
    return (
        <>
         <h1 className="text-lg-center text-center">Gallery<br/> <h1>_____</h1></h1>
        <div className="container">
          
        <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="10000">
      <img src="https://wallpapercave.com/wp/wp4088746.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item" data-interval="2000">
      <img src="https://free4kwallpapers.com/uploads/originals/2019/10/15/villingili-ferry-terminal-maldives-wallpaper.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://wallpaperaccess.com/full/1192273.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://getwalls.io/media/large/2020/03/maldives-resort-1920x1080-4k-large-962006627.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://wallpapercave.com/wp/wp4088752.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://www.pxwall.com/wp-content/uploads/2018/06/Wallpaper%20Girl%20and%20dolphin,%20ocean,%20Maldives,%20Travel%201546419182-680x500.jpg" class="d-block w-100" alt="..." />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
</>
    )
}

export default Gallary

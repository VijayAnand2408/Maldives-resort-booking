import {useState} from "react"

const Navbar= () => {
  const [navbar, setnavbar] = useState(false);

  const Changeback = () =>{
 if(window.scrollY >= 80){
   setnavbar(true);
 }else {
   setnavbar(false);
 }
  }

  window.addEventListener('scroll',Changeback);
  return (
    <>
    <div className={navbar ? 'navbar active ' : 'navbar'}/> 

            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="./Component/About.js">About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Reservation</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Vacancy
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Check by Date</a>
          <a className="dropdown-item" href="#">Contact us</a>
        </div>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="#">Photos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
    </ul>
  </div>
  </div>
</nav>
        </>
    )
}

export default Navbar

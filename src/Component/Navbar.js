import {useState} from "react"
import {Link} from "react-scroll"

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
      <li className="nav-item ">
        <Link className="nav-link" to="home" smooth={true} duration={750}>Home <span className="sr-only">(current)</span></Link>
      </li>
     
      <li className="nav-item">
        <Link className="nav-link" to="resort" smooth={true} duration={750}>Book Now!</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Vacancy
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="#">Check by Date</Link>
          <a className="dropdown-item" to="#">Enquiry</a>
        </div>
      </li>
      <li className="nav-item">
          <Link className="nav-link" to="gallary" smooth={true} duration={750}>Photos</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="#">Contact</a>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="about" smooth={true} duration={750}><a>About Us</a></Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
        </>
    )
}

export default Navbar


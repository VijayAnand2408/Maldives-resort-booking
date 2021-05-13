import {useState} from "react"
import {Link} from "react-scroll"
import {Link as a} from "react-router-dom"
import {Link as Link2} from "react-router-dom"

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
       <Link2 to="/home" className="nav-link"> <Link  to="home" smooth={true} duration={750}>Home </Link> </Link2>
      </li>
     
      <li className="nav-item">
      <Link2 to="/home" className="nav-link"><Link  to="resort" smooth={true} duration={750}>Book Now!</Link></Link2> 
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
      <Link2 to="/home" className="nav-link"><Link  to="gallary" smooth={true} duration={750}>Photos</Link></Link2>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="#">Contact</a>
        </li>
        <li className="nav-item">
        <Link2 to="/home" className="nav-link" ><Link to="about" smooth={true} duration={750}><a>About Us</a></Link></Link2>
      </li>
    </ul>
  </div>
  </div>
</nav>
        </>
    )
}

export default Navbar


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./Component/Navbar"
import Header from "./Component/Header"
import About from "./Component/About"
import Services from "./Component/Services"
import Resort from "./Component/Resort"
import Gallary from "./Component/Gallary"
import Footer from "./Component/Footer"
import {BrowserRouter as Router,Route} from "react-router-dom"
import Pvilla from "./Component/Pvilla"



function App() {
  return (
  <div>
    <Router>
   <Navbar />
   <Header />
   <Services />
   <Resort />
   <Gallary />
   <About />
   <Footer />
   
  
<Route path="/previlla" Component={Pvilla} />

</Router>
  </div>
  );
}

export default App;

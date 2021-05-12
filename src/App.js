import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./Component/Navbar"
import Header from "./Component/Header"
import About from "./Component/About"
import Services from "./Component/Services"
import Resort from "./Component/Resort"
import Gallary from "./Component/Gallary"
import Footer from "./Component/Footer"


function App() {
  return (
  <div>
   <Navbar />
   <Header />
   <Services />
   <Resort />
   <Gallary />
   <About />
   <Footer />
   
  
  </div>
  );
}

export default App;

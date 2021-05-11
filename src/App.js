import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./Component/Navbar"
import Header from "./Component/Header"
import About from "./Component/About"
import Services from "./Component/Services"


function App() {
  return (
  <div>
   <Navbar />
   <Header />
   <Services />
   <About />
  
  </div>
  );
}

export default App;

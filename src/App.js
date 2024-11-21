import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomNavbar from './Components/Navbar';
import Banner from './Components/Banner';
import Nosotros from './Components/Nosotros';
import Servicios from './Components/Servicios';
import Contacto from './Components/Contacto';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <CustomNavbar />
    <div style={{ marginTop: '110px' }}>
      <Banner />
      <Nosotros />
      <Servicios />
      <Contacto />
      <Footer />
    </div>
    </>
  );
}

export default App;

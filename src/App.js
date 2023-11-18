
import './App.css';
import About from './components/About/About';
import Departments from './components/DEPARTMENTS/DEPARTMENTS';
import Footer from './components/Footer/Footer';
import Carousel from './components/HerroSection/Carousel';
import Navbar from './components/Navbar/Navbar';
import TESTIMONIALS from './components/TESTIMONIALS/TESTIMONIALS';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Departments />
      <About />
      <TESTIMONIALS/>
      <Footer/>
    </div>
  );
}

export default App;

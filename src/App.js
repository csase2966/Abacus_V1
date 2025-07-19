import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Courses from './Components/Courses';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Courses />
      <About />
      <Contact />
      <Footer />

      {/* ✅ WhatsApp floating button */}
      

      <a
  href="https://wa.me/917447721586?text=Hi%20I'm%20interested%20in%20your%20courses!"//9242912480
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
  title="Chat with us on WhatsApp"
>
  <div className="whatsapp-circle">
    <img
      src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
      alt="WhatsApp"
      width="60"
      height="60"
    />
    <span className="pulse-ring"></span>
  </div>
</a>

    </>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';
import Articles from './components/Articles';
import Campaign from './components/Campaign';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Testimonials from './components/Testimonials';
import Hero from './components/Hero';
import CTA from './components/CTA';
import FAQ from './components/FAQ.jsx';

function App() {
  return (
    <div className=' font-serif '>
      <Contact />
      <Navbar />
      <Hero />
      <About />
      <Campaign />
      <Articles />
      <Newsletter />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;

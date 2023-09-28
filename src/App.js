import logo from './logo.svg';
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

function App() {
  return (
    <div>
      <Contact />
      <Navbar />
      <About />
      <Articles />
      <Campaign />
      <Copyright />
      <CTA />
      <FAQ />
      <Footer />
      <Hero />
      <Newsletter />
      <Testimonials />
    </div>
  );
}

export default App;

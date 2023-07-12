import './App.css';
import Banner from './Components/Banner/Banner';
import Contact from './Components/Contract/Contact';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import FooterBottom from './Components/Footer/FooterBottom';
import Navbar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';
import Testimonial from './Components/Testimonial/Testimonial';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
     <Navbar/>
      <div className='max-w-screen-xl mx-auto'>
        <Banner/>
        <Features/>
        <Projects/>
        <Resume></Resume>
        {/* <Testimonial></Testimonial> */}
        <Contact/>
        <Footer></Footer>
        <FooterBottom/>
       
      </div>
    </div>
  );
}

export default App;

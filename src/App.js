import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
         <Hero />
         <Programs />
         <Reasons />
         <Plans />
         <Testimonials />
         <Footer />
    </div>
  );
}

export default App;

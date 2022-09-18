import './App.css';
import Hero from './components/Hero/Hero';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
function App() {
  return (
    <div className="App">
         <Hero />
         <Programs />
         <Reasons />
         <Plans />
    </div>
  );
}

export default App;

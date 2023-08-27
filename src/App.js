// import logo from './logo.svg';
import './App.css';
import Footers from './components/footers';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Tours from './components/tours';
import Services from './components/services';
import About from './components/about';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Tours></Tours>
      <Footers></Footers>

    </>
  );
}

export default App;

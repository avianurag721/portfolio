
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/navbar/Navbar';
import Social from './components/socialmedia/Social';
import Techy from './components/techi/Techy';
// import Form from './form/form';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Techy />
      <Social/>
    </>
  );
}

export default App;


import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/navbar/Navbar';
import Techy from './components/techi/Techy';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Techy/>
    </>
  );
}

export default App;

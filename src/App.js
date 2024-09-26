
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="Text-app" about="About-TU"/> 
    <div className="container my-3'">
    <About/>
    <TextForm/>
    </div>
    </>
  );
}

export default App;

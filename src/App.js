
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import react,{useState} from 'react';

function App() {

  const[mode, setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500)
  }

  const toggleMode = () => {
    if(mode=== 'light'){
      setMode('dark')
      document.body.style.backgroundColor ='#042743'
      showAlert("Dark mode enabled", "Success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white'
      showAlert("Light mode enabled", "Success")
    }

  }

  return (
    <>
    <Navbar title="Text-app" about="About-TU" mode = {mode} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>
    <div className="container">
    {/* <About/> */}
    <TextForm  showAlert={showAlert} heading="Enter text" mode={mode}/>
    </div>
    </>
  );
}

export default App;


import { useState } from 'react';
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  
const [mode,setmode]=useState('light');

const [alert, setAlert]=useState(null);

const showAlert=(message, type)=>{
  setAlert({
    msg: message,
    type: type
  })

  setTimeout(() => {
    setAlert(null);
  }, 2000);
}



const togglemode = ()=>{
  if(mode==='light'){
    setmode('dark')
    document.body.style.backgroundColor='#071f43';
    showAlert("Dark mode has been enabled", "success");
  }else{
    setmode('light')
    document.body.style.backgroundColor='white';
    showAlert("light mode has been enabled", "success");
  }
}
  return (
    <>
     <Navbar title="Second Project" AboutText="About Second Project" mode={mode} togglemode={togglemode}/>

     <Alert alert={alert}/>

     <div className="container my-3">
         <TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode}/>
         {/* <About/> */}
     </div>
     
     </>
  );
}

export default App;

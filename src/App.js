import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#0f274b';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Textutilis" about="About Textutilis" mode={mode} toggleMode={toggleMode} />
    <div className="container">
    <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextArea heading="Enter text below: " mode={mode}/> 
          </Route>
    </Switch>
    </div>
    </Router>
     
    
    
    </>
  );
}

export default App;

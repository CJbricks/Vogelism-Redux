import React from 'react';
import{ useState } from 'react';
import './App.css';
import Slides from './/Slides';
import Splash from './/Splash';



function App() {

  const [display, setDisplay] = useState(true)
  return (
    <div className="App" onClick={()=> setDisplay(false)}>
      { display === true ? <Splash /> : <Slides /> }
    </div>
  );
}

export default App;

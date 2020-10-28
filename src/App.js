import React from 'react';
import classes from './App.module.css';
import { BrowserRouter } from 'react-router-dom';
import TopBar from './Components/Header/Header';
import HomePage from './Containers/HomePage/HomePage';




function App() {
  return (
           <BrowserRouter>
    <div className={classes.App}>
      <TopBar/>
      <HomePage/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;

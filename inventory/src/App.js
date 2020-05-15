import React,{Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';
// import Inventory from './inventory';
import Inventory from './inventory';
import Details from './details';
import Routerr from './router';
import Covid from './covid';


function App() {
  return (
    <div className="App">
       <Covid /> 

    </div>
  );
}

export default App;

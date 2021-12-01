import React, { Component } from 'react';
import './App.css';
import FormJSON from "./FormElements.json"
import  { useState, useEffect } from 'react';
import DynamicElements from './DynamicElements';
import { createContext } from 'react';
import Card from './Card';
import {CitiesData, renderCityTitle} from "./CitiesList"
import Form1 from './Form1';
import Form2 from './Form2';


function App() {
  
  
  return (
    <div className="App styleAdd">
      <header className="App-header">
        <Form1 />      
        <Form2 />
</header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import DiaryApp from './PrivacyPolicy/DiaryApp.js';
import DictionaryApp from './PrivacyPolicy/DictionaryApp';
import PhysicsFormulaApp from './PrivacyPolicy/PhysicsFormula.js';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/DiaryApp' element={<DiaryApp/>}></Route>
        <Route path='/DictionaryApp' element={<DictionaryApp/>}></Route>
        <Route path='/PhysicsFormulas' element={<PhysicsFormulaApp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

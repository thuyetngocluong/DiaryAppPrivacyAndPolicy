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


function App() {
  return (
    <div className="App">
      <h1> OK</h1>
      <Routes>
        <Route path='/DiaryApp' element={<DiaryApp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

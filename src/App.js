import React, { Component } from 'react'; 
import './App.css';
import Login from './Components/Login';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Signup from './Components/Singup';
import CookBookInterface from './Components/CookBookInterface';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    // <CookBookInterface></CookBookInterface>
    );
  }
}

export default App;

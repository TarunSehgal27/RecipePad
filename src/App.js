import React, { Component } from 'react'; 
import './App.css';
import Login from './Components/Login';
import axios from 'axios'
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Signup from './Components/Singup';
import CookBookInterface from './Components/CookBookInterface';
import IngredientsBox from './Components/IngredientsBox';
import ListOfIngredients from './Components/ListOfIngredients';
import Item from './Components/Item';
import Recipe from './Components/Recipe';
import ShowRecipes from './Components/ShowRecipes';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CookBookInterface/>} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login/>} />
        <Route path="ingredients" element={<ListOfIngredients />} />
        <Route path="item" element={<Recipe />} />
        <Route path="recipes" element={<ShowRecipes />} />
      </Routes>
    </BrowserRouter>
    // <CookBookInterface></CookBookInterface>
    );
  }
}

export default App;

import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipes from './Components/AddRecipe';
import Recipe from './Components/Recipe';
import Recipes from './Components/Recipes';
import Navbar from './Components/Navbar';


// define Nav bar component inside router
// recipe should cotain url params /recipe/:id we can do that inside the route as Nested Router
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Recipes />} />
          <Route path='/:id' element={<Recipe />} />
          <Route path='/add' element={<AddRecipes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App

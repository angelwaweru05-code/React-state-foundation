import React from 'react';
import RecipeList from './components/RecipeList';
import Footer from './components/Footer';

const recipes = [
  { id: 1, title: 'Spaghetti Bolognese', ingredients: ['Spaghetti', 'Beef', 'Tomato Sauce'], instructions: 'Cook pasta and mix with sauce.' },
  { id: 2, title: 'Chicken Curry', ingredients: ['Chicken', 'Curry Powder', 'Coconut Milk'], instructions: 'Cook chicken, add curry powder, and stir in coconut milk.' },
];

function App() {
  return (
    <div>
      <h1>RecipeHub</h1>
      <RecipeList recipes={recipes} />
      <Footer />
    </div>
  );
}

export default App;
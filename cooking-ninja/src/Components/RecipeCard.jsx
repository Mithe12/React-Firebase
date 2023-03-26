import { Link } from 'react-router-dom'

export default function RecipeCard({ recipe }) {
    return (
        <div className="card">
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to make</p>
            <div>{recipe.method.substring(0, 100)}...</div>
            <Link to={recipe.id}>View this {recipe.title}</Link>
        </div>
    );
}
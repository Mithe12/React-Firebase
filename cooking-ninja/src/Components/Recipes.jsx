import React from 'react';
import useGetRecipes from '../Hooks/useGetRecipes';
import RecipeCard from './RecipeCard'

export default function Recipes() {
    const { data, loading, error } = useGetRecipes();

    if (loading === true) {
        return <div>Loading</div>
    }


    return (
        <React.Fragment>
            {error && <p className="error"> {error} </p>}
            <div className='recipe-list'>
                {data && data.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </React.Fragment>
    )
}
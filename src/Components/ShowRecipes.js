
import React from 'react';
import Recipe from './Recipe';

export default function ShowRecipes() {
    return (
        <div>
            <h1>CookBook</h1>
            <p>You can make <span>400</span> recipies.</p>
            <div className="searchbox-recipes">
                <input type='search' placeholder='Find'/>
            </div>
            
            <div className='recipes'>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
                <Recipe/>
            </div>
        </div>
    );
}
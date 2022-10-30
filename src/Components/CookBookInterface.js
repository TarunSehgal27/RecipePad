
import React from 'react';
import ListOfIngredients from './ListOfIngredients'
import './style.css'
import ShowRecipes from './ShowRecipes';

export default function cookBookInterface() {
    return(
        <div className="container">
            
            <div className='sidebar'>
                <h3>Pantry</h3>
                <p>You have <span>0</span> ingredients.</p>
                <div className='searchbox'>
                    <input type="search" placeholder='add/remove ingredients'/>
                </div>
                <div className='ingredients-list'>
                    <ListOfIngredients />
                </div>
            </div>

            <div className='show-recipes'>
                <ShowRecipes/>
            </div>

        </div>
    );
}
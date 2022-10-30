
import React from 'react';
import IngredientsBox from './IngredientsBox';

export default function ListOfIngredients() {
    return (
        <div className='ingredients-container'>
            <IngredientsBox />
            <IngredientsBox />
            <IngredientsBox />
        </div>
    );
}
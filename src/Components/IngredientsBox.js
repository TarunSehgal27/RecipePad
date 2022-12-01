
import React, { useState } from 'react';
import Item from './Item';


const ingredientsArray = ['butter', 'egg', 'flour', 'rice', 'sugar', 'onion', 'garlic powder','paneer','milk','bread','oats','pasta','mushrooms','almonds','oregano'];

export default function IngredientsBox() {

    return(
        <div className='box'>
            <div className='header'>
                <h4>Pantry Essentials</h4>
            </div>
            <hr/>
            <div className='ingredients'>
                <ul>
                    {ingredientsArray.map(ele => {
                        return (
                            <Item name={ele}/>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
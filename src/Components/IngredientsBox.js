
import React, { useState } from 'react';
import Item from './Item';


const ingredientsArray = ['butter', 'egg', 'flour', 'rice', 'sugar', 'onion', 'garlic powder'];

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
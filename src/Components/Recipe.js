
import React from "react";
import ShowRecipes from './ShowRecipes';

export default function Recipe({ id, title, image }) {
    return (
        <div className="recipe-box">
            <div className="recipe-img">
                <img src={image} height="100%" width="100%" alt="image of recipe"/>
            </div>
            <div className="recipe-description">
                <div className="heading">
                    
                    <h3 className="title">{title}</h3>
                    
                </div>
                
            </div>
        </div>
    );
}

import React from "react";

export default function Recipe() {
    return (
        <div className="recipe-box">
            <div className="recipe-img">
                <img src="./assets/recipe.jpg" height="100%" width="100%" alt="image of recipe"/>
            </div>
            <div className="recipe-description">
                <div className="heading">
                    <h3 className="title">Scramble Eggs in the Microwave</h3>
                    <p className="source">incredibleegg.org</p>
                </div>
                <p className="numberOfIngredients">You have all 2 ingredients.</p>
            </div>
        </div>
    );
}
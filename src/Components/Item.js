
import React, { useState } from 'react';

export default function Item(props) {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(isActive => !isActive);
    }

    return (
        <li style={{
            backgroundColor: isActive?'blue':'lightgray',
            color: isActive?'white':'gray'
        }} onClick={handleClick}>{props.name}</li>
    )
}
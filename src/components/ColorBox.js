import React from 'react';
import '../App.css';

function ColorBox(props) {

    const style = {
        backgroundColor: `#${props.color}`
    };

    return (
        <div className="color-box" style={style}>

        </div>
    )
}


export default ColorBox;

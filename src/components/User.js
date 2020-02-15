import React, { useState } from "react";
import '../App.css';

function User({match}) {

    const [name] = useState(match.params.name);
    const [age] = useState(match.params.age);
    const [color] = useState(match.params.color);
    const [id] = useState(match.params.id);

    const style = {
        width: '300px',
        height: '300px',
        backgroundColor: `${color}`,
        border: "solid black 2px",
        borderRadius: "5px",
    };

    return (
        <div className="user-deets">
            <div style={style}>
                <h1>{name}</h1>
                <h2>Age: {age}</h2>
                <h3>ID: {id}</h3>
            </div>
        </div>
    )

}

export default User
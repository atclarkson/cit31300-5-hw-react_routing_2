import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";

function Data() {

    const [data] = React.useState([
        {
            name: 'Abigail',
            age: 15,
            color: 'pink',
            id: 7105224189
        },
        {
            name: 'Rashad',
            age: 27,
            color: 'red',
            id: 3917079182
        },
        {
            name: 'Miquel',
            age: 15,
            color: 'purple',
            id: 7475229760
        },
    ]);

    let elements = data.map((it, idx) =>
        <li key={it.id} className={"user-list"}><Link to={`/data/${it.id}/${it.name}/${it.age}/${it.color}`}>{it.name}</Link></li>
    )
    return (
        <div>
            <h1>User Data</h1>
            <ul>
                {elements}
            </ul>

        </div>
    );
}

export default Data;

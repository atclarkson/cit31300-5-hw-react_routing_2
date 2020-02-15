import React, { useState } from "react";
import '../App.css';

function Colorpage({match}) {

    const [color] = useState(match.params.color);

    const style = {
        width: '100vw',
        height: '100vh',
        backgroundColor: `#${color}`
    }

    return (
        <div style={style}>

        </div>
    )

}

export default Colorpage
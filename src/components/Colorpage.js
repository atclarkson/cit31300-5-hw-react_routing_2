import React, { useState } from "react";
import '../App.css';

function Colorpage({match}) {

    const [color, setColor] = useState(match.params.color);

    const style = {
        width: '100vw',
        height: '100vh',
        backgroundColor: `#${color}`
    }

    return (
        <div style={style}>
            test
        </div>
    )

}

export default Colorpage
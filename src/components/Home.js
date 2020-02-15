import React from 'react';
import '../App.css';
import ColorBox from "./ColorBox";
import {Link} from "react-router-dom";

function Home() {

    const [colorArr] = React.useState([
        {color: 'cb8c86',},
        {color: 'd2568c',},
        {color: '5e8fa4',}
    ]);

    let elements = colorArr.map((it, idx) =>
        <Link key={idx} to={`/${it.color}`}><ColorBox  color={it.color}/></Link>
    )

    return (
        <div className="color-boxes">
            {elements}
        </div>
    );
}

export default Home;

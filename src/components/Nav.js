import React from 'react';
import '../App.css';
import {NavLink, Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to={'/'}><h3>@atclarkson</h3></Link>
            <ul className="nav-links">
                <NavLink activeStyle={{ color: '#d2568c' }} exact to={'/'}><li>Home</li></NavLink>
                <NavLink activeStyle={{ color: '#d2568c' }} to={'/data'}><li>Data</li></NavLink>
                <NavLink activeStyle={{ color: '#d2568c' }} to={'/cool'}><li>Cool</li></NavLink>
            </ul>
        </nav>
    );
}

export default Nav;

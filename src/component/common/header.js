import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='abaut'>Abaut</Link></li>
            <li><Link to='courses'>Courses</Link></li>
        </ul>
    </nav>
);

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/trilhas">Trilhas</Link></li>
                <li><Link to="/comunidade">Comunidade</Link></li>
                <li><Link to="/chat">Chat</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
import React from "react"; 
import "./Navbar.css";
import { Link } from 'react-router-dom';
import logo from "../images/hadiya-transparent.png"

const Navbar = () => {
    return (
        <>
        <nav className='navbar'>
            <div className='container'>
                <div className='logo-container'>
                    <Link to="/" className='logo'>
                        <img src={logo} width='120px' height='auto' max-width='100%' max-height='100%' alt='Logo' />
                    </Link>
                </div>
            </div>

            <div className='navbar-menu'>
                <ul>
                    <li><Link to="/about">Home</Link></li>
                    <li><Link to="/services">About Us</Link></li>
                    <li><Link to="/events">Services</Link></li>
                    <li><Link to="/events">Contact</Link></li>
                </ul>
            </div>
        </nav>
        
        <div className='hamburger'>

        </div>

        </>
    );
}

export default Navbar;
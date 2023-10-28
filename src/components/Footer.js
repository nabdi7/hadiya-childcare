import React from "react"; 
import "./Footer.css";
import logo from '../images/hadiya.png'

const Footer = () => {
    return (
        <>
        <footer className='footer'>
            {/* logo div */}
            <div className='logo-div'>
                <img src={logo} width='250px' height='auto' max-width='100%' max-height='100%' alt='Logo' />
            </div>

            <div className='footer-container'>
                <h1> Hadiya Home Childcare</h1>
                <p>11409 Southeast 219th Place Kent, WA 98031 United States</p>
                <p> (206) 771-8840</p>
            </div>

            <div className="copyright">
                    <p>Made by <a href="https://qualitydesigns.site/" target="_blank" rel="noopener noreferrer" style={{ color: 'black', fontWeight: 'bold'}}>Quality Designs</a> || ©{new Date().getFullYear()} Hadiya Childcare.</p>
            </div>
        </footer>

        </>
    );
}

export default Footer;
import React from "react"; 
import "./Footer.css";

const Footer = () => {
    return (
        <>
        <footer className='footer'>
            <div className='footer-container'>
                <h1 className='footer-title'> Hadiya Home Childcare</h1>
                <p className='footer-description'><a href='https://www.google.com/maps/place/Hadiya+Home+Childcare/@47.4053302,-122.1913848,17z/data=!3m1!4b1!4m6!3m5!1s0x54905dd89377c3f5:0x6e5d903978bd9f29!8m2!3d47.4053302!4d-122.1888045!16s%2Fg%2F11v611htf3?entry=ttu'>11409 Southeast 219th Place Kent, WA 98031 United States </a></p>
                <p className='footer-description'> <a href='tel:+12068833462'><b>(206)771-8840</b></a></p>
            </div>
            <div className="copyright">
                <p>Made by <a href="https://qdwebdesigns.com" target="_blank" rel="noopener noreferrer" style={{ color: 'black', fontWeight: 'bold'}}>QD Web Designs</a> || ©{new Date().getFullYear()} Hadiya Childcare</p>
            </div>
        </footer>

        </>
    );
}

export default Footer;
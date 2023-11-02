import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className='contact'>
            <h1 className='contact-title'>Contact Us</h1>
            <div className='content-container'>
                {/* Left side */}
                <div className='left-side'>
                    <div className='content-box'>
                        <h3 className='content-title'>Are you ready to get started?</h3>
                        <p className='content-description'>We are here to help you with any questions you may have. Please feel free to contact us at any time.</p>
                    </div>

                    <div className='content-box'>
                        <h3 className='content-title'>Hadiya Home childcare</h3>
                        <p className='content-description'>Address</p>
                        <p className='content-description'>11409 SE 219th PL Kent, WA 98031</p>
                        <p className='content-description'>Phone Number</p>
                        <p className='content-description'>206-771-8840</p>
                        <p className='content-description'>Email Address</p>
                        <p className='content-description'>abdiqadro5@gmail.com</p>
                    </div>

                    <div className='content-box'>
                        <h3 className='content-title'>Hours of operation</h3>
                        <ul className='schedule-hours'>
                            <li>Mon: 06:00 am - 06:00 pm</li>
                            <li>Tue: 06:00 am - 06:00 pm</li>
                            <li>Wed: 06:00 am - 06:00 pm</li>
                            <li>Thu: 06:00 am - 06:00 pm</li>
                            <li>Fri: 06:00 am - 06:00 pm</li>
                            <li>Sat: closed</li>
                            <li>Sun: closed</li>
                        </ul>
                    </div>
                </div>

                {/* Right side */}
                <div className='right-side'>
                    <h1>Get in touch</h1>
                    <form>
                        <div>
                            <input type="text" id="name" name="name" placeholder="Name" />
                        </div>
                        <div>
                            <input type="email" id="email" name="email" placeholder="Email" />
                        </div>
                        <div>
                            <textarea id="message" name="message" placeholder="Message"></textarea>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;

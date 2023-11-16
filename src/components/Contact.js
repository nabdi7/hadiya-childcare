import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <>
        <div className='contact'>
            <h1 className='contact-title'>Contact Us</h1>
            <div className='content-container'>
                {/* Left side */}
                <div className='left-side'>
                    <div className='content-box'>
                        {/* <h3 className='content-title'>Are you ready to get started?</h3>
                        <p className='content-description'>If you have questions about the opportunities available in our programs, feel free to send us a message. We will get back to you as soon as possible.</p> */}
                        <h3 className='content-title'>Hadiya Home childcare</h3>
                        <p className='content-description'>Address</p>
                        <p className='content-description'>11409 SE 219th PL Kent, WA 98031</p>
                        <p className='content-description phone'>Phone Number</p>
                        <p className='content-description'>206-771-8840</p>
                        <p className='content-description email-address'>Email Address</p>
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
                    <h1 className='get-in-touch'>Get in touch</h1>
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
        <div className='location'>
            <div className='location-map'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10801.355659560008!2d-122.1888045!3d47.4053302!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905dd89377c3f5%3A0x6e5d903978bd9f29!2sHadiya%20Home%20Childcare!5e0!3m2!1sen!2sus!4v1699325505949"
                    width="600"
                    height="450"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    </>
    );
}

export default Contact;

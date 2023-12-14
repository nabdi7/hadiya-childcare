import React, { useState, useRef } from 'react';
import "./Contact.css";
import emailjs from 'emailjs-com';


const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [contactMessage, setContactMessage] = useState("");
    const [user_name, setName] = useState(""); 
    const [user_email, setEmail] = useState(""); 
    const [message, setMessage] = useState("");
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs
      .sendForm("service_j3nyl4y", "template_if9y1ud", formRef.current, "Su2Fj91t8uKmDnkig")
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          setFormSubmitted(true);
          setContactMessage("We got your message. Thanks!");
          setTimeout(() => {
            setContactMessage("");
            setName("");
            setEmail("");
            setMessage("");
            setFormSubmitted(false);
          }, 2000);
        },
        (error) => {
          console.error("Email sending failed:", error);

        }
      );
    };
    return (
        <>
        <div className='contact'>
            <h1 className='global-title'>Contact Us</h1>
            <div className='content-container'>
                {/* Left side */}
                <div className='left-side'>
                    <div className='content-box'>
                        {/* <h3 className='content-title'>Are you ready to get started?</h3>
                        <p className='content-description'>If you have questions about the opportunities available in our programs, feel free to send us a message. We will get back to you as soon as possible.</p> */}
                        <h3 className='content-title'>Hadiya Home childcare</h3>
                        <p className='content-description'>Address</p>
                        <p className='content-description'><a href='https://www.google.com/maps/place/Hadiya+Home+Childcare/@47.4053302,-122.1913848,17z/data=!3m1!4b1!4m6!3m5!1s0x54905dd89377c3f5:0x6e5d903978bd9f29!8m2!3d47.4053302!4d-122.1888045!16s%2Fg%2F11v611htf3?entry=ttu'>11409 SE 219th PL Kent, WA 98031 </a></p>
                        <p className='content-description phone'>Phone Number</p>
                        <p className='content-description'><a href='tel:+12068833462'><b>(206)771-8840</b></a></p>
                        <p className='content-description email-address'>Email Address</p>
                        <p className='content-description'><a href='mailto:abdiqadro5@gmail.com'><b>abdiqadro5@gmail.com</b></a></p>
                    </div>

                    <div className='content-box'>
                        <h3 className='content-title'>Hours of operation</h3>
                        <ul className='schedule-hours'>
                            <li>Mon: open 24 hours</li>
                            <li>Tue: open 24 hours</li>
                            <li>Wed: open 24 hours</li>
                            <li>Thu: open 24 hours</li>
                            <li>Fri: open 24 hours</li>
                            <li>Sat: open 24 hours</li>
                            <li>Sun: open 24 hours</li>
                        </ul>
                    </div>
                </div>

                {/* Right side */}
                <div className='right-side'>
                    <h1 className='get-in-touch'>Get in touch</h1>
                    <form ref={formRef} onSubmit={sendEmail}>
                        <div>
                            <input
                                    type='text'
                                    placeholder='Name'
                                    name='user_name' 
                                    value={user_name} 
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />                        </div>
                        <div>
                            <input
                                    type='email'
                                    placeholder='Email'
                                    name='user_email' 
                                    value={user_email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />                        </div>
                        <div>
                        <textarea
                                placeholder='Message'
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button className='submit'>Send</button>
                        {formSubmitted && (
                            <h6 className='thank-you-message'>
                                Received! We'll get back to you shortly. Thanks!
                            </h6>
                            )}
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

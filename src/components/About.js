import React from "react"; 
import { Link, useNavigate } from 'react-router-dom';
import "./About.css";
import pic1 from '../images/pic1.jpeg';
import pic2 from '../images/pic2.webp';

const About = () => {
    const navigate = useNavigate();
  
    const scrollToContact = (event) => {
        navigate('/contact');
        window.scrollTo(0, 0);
    };
    return (
        <>
        <div className='left-section'></div>
        <div className='right-section'> </div>
        <h1 className='about-title'>About</h1>
        <section className='about'>
            
            <div className='about-content'>  
                <div className='about-image'>
                    <img src={pic1} alt='images'/>
                    <img src={pic2} alt='images'/>
                </div>
                <div className='about-container'>
                    <p className='about-description'> Hadiya Home Childcare welcomes children of 
                        all abilities, with the commitment to provide quality care and education 
                        to each child. We believe every child is a unique individual 
                        with varying needs, and we welcome the diversity that brings 
                        to our center. Our goal is to make Hadiya Home Childcare a safe 
                        and welcoming place for children to have fun and be themselves. 
                        We want children to be able express themselves and feel accepted. 
                        All children and families deserve to be full members of their communities, 
                        to have the opportunity for development and learning, and to experience 
                        a sense of belonging.</p>
                        <br/>

                        <br/>
                    <h1 className='philosophy'>Our Philosophy</h1>
                    <p className='about-description'> Our programs are specifically designed to dramatically 
                        increase the academic achievement, self-esteem and life 
                        opportunities of children. This is achieved by increasing 
                        their mastery of the basic skills of reading, writing and 
                        mathematics; raising children’s academic expectations; 
                        enhancing children’s social-emotional development; and 
                        promoting positive relationships between home and school.
                        </p>
                        <br/>
                        <br/>
                    <p> Get in touch. </p>
                        
                    <p> <a href='mailto:abdiqadro5@gmail.com'><b>abdiqadro5@gmail.com</b></a></p>
                        <br/>
                    <h3 className='content-schedule'>Hours of operation</h3>
                        <ul className='scheduling-hours'>
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
            
        </section>
        <div className='contact-us'>
                <div className='background-pic'>
                    <h1 className='enroll-now'> <b>Call to enroll your child </b></h1>
                    <h1 className='enroll-now'> <b>(206)771-8840 </b></h1>
                    <div className='title-about'>
                        <Link to="/contact" className='learn-more-link' onClick={scrollToContact}>
                            <button className='learn-more'>Contact Us</button>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    ); 
}

export default About;
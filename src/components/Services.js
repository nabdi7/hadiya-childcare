import React from "react"; 
import "./Services.css";
import servicePic from '../images/Preschool.jpeg';
import pic3 from '../images/pic8.jpg';

const Services = () => {
    return (
        <>
        {/* add a fingers with color image on both sides */}
        <div className='left-section'></div>
        <div className='right-section'> </div>

        <section className='services'>
            <h1 className='global-title'>Programs</h1>
            <div className='service-image'>
                <img src={servicePic} alt=''/>
            </div>
            <div className='services-container'>
                <div className='our-services'>
                    <div className='services-content'>
                        {/* <h2 className='services-title'>Our Services</h2> */}
                        <p className='services-description'>Welcome to Hadiya Home Childcare, 
                        where we prioritize the well-being and development of your little ones. 
                        Our range of services is designed to create a nurturing and engaging 
                        environment, ensuring a positive and enriching experience for your child.</p>
                    </div>
                </div>
            
                <div className='halves-container'>
                    <div className='services-half'>
                        <h2 className='services-title'>The basics</h2>
                        <p className='services-description'>At Hadiya Home Childcare, 
                        we believe in the fundamentals. From a structured daily routine to 
                        nutritious meals, we cover the essentials to ensure a well-rounded 
                        and healthy experience for your child.</p>
                        {/* <div className='left-section'></div> */}
                        <ul className='basics'>
                            <li>Part-time, Full-time</li>
                            <li>Snacks Provided</li>
                            <li>Meals Provided</li>
                            <li>Certified in First Aid, CPR, teaching, and Early Childhood Education</li>
                        </ul>
                    </div>
                    <div className='services-half'>
                        <h2 className='services-title'>Safety</h2>
                        <p className='services-description'>Your child's safety is our top priority. 
                        Rest easy knowing that our staff is CPR and First Aid certified, 
                        providing individual attention and constant monitoring to create a 
                        secure and protected environment.</p>
                        <div className='right-section'> </div>
                    </div>
                </div>
                <div className='halves-container'>
                    <div className='services-half'>
                        <h2 className='services-title'>Tuition</h2>
                        <p className='services-description'>Please contact us. DCYF and Private pay accepted.</p>
                        
                    </div>
                    <div className='services-half'>
                        <h2 className='services-title'>Teachers</h2>
                        <p className='services-description'>As a dedicated childcare provider 
                        with extensive experience from raising my own children to mentoring in a 
                        childcare facility to attain the necessary skills, I'm devoted to 
                        providing children with the tools they need to thrive and succeed.
                        With my professional experience and certifications in First Aid, CPR, 
                        teaching, and Early Childhood Education, I'm highly accomplished in 
                        teaching both educational and intentional play activities designed to 
                        develop children's' psychological, emotional, behavioral, and social 
                        skills..</p>
                    </div>
                </div>
            </div>
            <div className='about-image'>
            <img src={pic3} alt='images'/>
            </div>
        </section>

        </>
    );
}

export default Services;
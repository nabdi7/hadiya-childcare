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
                        <h2 className='services-title'>Toddler 1-2 Yr Old</h2>
                        <p className='services-description'>Our Toddler program is thoughtfully crafted 
                        to cater to the unique needs of children aged 1-2 years. Our experienced caregivers 
                        focus on fostering basic cognitive, language, motor, and social skills, 
                        laying the foundation for a lifetime of curiosity and discovery.</p>
                        
                    </div>
                    <div className='services-half'>
                        <h2 className='services-title'>Preschool 2-3 Yr Old</h2>
                        <p className='services-description'>In our preschool program, we focus on 
                        laying the foundation for your child's academic and social development. 
                        Through engaging activities and play, we help them build essential skills 
                        that prepare them for a successful transition to formal education.</p>
                    </div>
                </div>
                <div className='halves-container'>
                    <div className='services-half'>
                        <h2 className='services-title'>Pre-K 4-5 Yr Old</h2>
                        <p className='services-description'>Our Pre-K program is designed to prepare 
                        your child for the academic challenges of kindergarten. We focus on 
                        developing advanced cognitive, language, motor, and social skills to 
                        ensure a smooth transition to the next educational level.</p>
 
                    </div>
                    <div className='services-half'>
                        <h2 className='services-title'>Kindergarden Program</h2>
                        <p className='services-description'>In our Kindergarten program, we provide a 
                        comprehensive educational experience that goes beyond the basics. 
                        Your child will engage in advanced learning activities, fostering 
                        intellectual growth and social development, setting the stage for a 
                        successful academic journey.</p>
  
                    </div>
                </div>
                <div className='halves-container'>
                    <div className='services-half'>
                        <h2 className='services-title'>Teachers</h2>
                        <p className='services-description'>Our dedicated childcare providers 
                            have extensive experience in childcare, education, and mentoring. 
                            With certifications in First Aid, CPR, teaching, and Early Childhood 
                            Education. We are committed to creating a supportive environment for 
                            your child's psychological, emotional, behavioral, and social development 
                           </p>
                    </div>
                    <div className='services-half'>
                        <h2 className='services-title'>Tuition</h2>
                        <p className='services-description'>We offer various tuition fees tailored to 
                        our different programs. Please contact us for detailed information on tuition 
                        costs. You can reach us at.</p>
                        <br />
                        <p className='services-description'><b>(206)771-8840</b></p>
                        <br />
                        <p className='services-description'><b>DCYF and Private pay accepted.</b></p>
                    </div>
                </div>
            </div>
            <div className='service1-image'>
                <img src={pic3} alt='images'/>
            </div>
        </section>

        </>
    );
}

export default Services;
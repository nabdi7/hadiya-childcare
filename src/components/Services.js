import React from "react"; 
import "./Services.css";

const Services = () => {
    return (
        <>
        <section className='services'>
            <h1>Services</h1>
            <div className='services-container'>
                <div className='services-content'>
                    <h2 className='services-title'>Our Services</h2>
                    <p className='services-description'>Lorem ipsum</p>
                </div>
                <div className='services-content'>
                    <h2 className='services-title'>The basics</h2>
                    <p className='services-description'>Lorem ipsum</p>
                </div>
                <div className='services-content'>
                    <h2 className='services-title'>Safety</h2>
                    <p className='services-description'>CPR & First Aid certified
                    Individual attention
                    Staff monitoring safety</p>
                </div>
                <div className='services-content'>
                    <h2 className='services-title'>Tuition</h2>
                    <p className='services-description'>Lorem ipsum</p>
                </div>
                <div className='services-content'>
                    <h2 className='services-title'>Teachers</h2>
                    <p className='services-description'>Lorem ipsum</p>
                </div>
            </div>
        </section>

        </>
    );
}

export default Services;
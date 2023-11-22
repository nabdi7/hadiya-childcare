import React from "react"; 
import "./Home.css";
import Gallery from './Gallery';

// import logoImage from '../images/hadiya.png';

import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';
import image4 from '../images/kid4.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUserCheck, faShieldAlt, faGamepad, faRunning } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    const galleryImages = [
        { img: image1 },
        { img: image2 },
        { img: image3 },
        { img: image4 },
        { img: image3 },
        { img: image4 },
      ]
    return (
        <>
    
        <div className='background-image'>
            <div className='title-container'>
                <h1 className='title'>Welcome to Hadiya Home Childcare</h1>
                <h1 className='title-sub'>Where children learn and have fun </h1>
                <p>Caring for the future</p>
                <button className='learn-more'>Learn More</button>
            </div>
        </div>
        

        
        {/* gallery */}
        <h1 className='gallery-title'> PHOTO GALLERY</h1>
        <Gallery
            galleryImages={galleryImages}
         />
        

        {/* what we offer */}
        <h1 className='offer-title'>What We Offer</h1>
        <section className='offer-container'>
            <div className='offer-rows'>
                <div className='offer-box'>
                    <div className='offer-icons'>
                        <FontAwesomeIcon icon={faClock} />
                    </div>
                    <h3 className='offer-sub'>24/7 Operation</h3>
                </div>
                <div className='offer-box'>
                    <div className='offer-icons'>
                        <FontAwesomeIcon icon={faUserCheck} />
                    </div>
                    <h3 className='offer-sub'>Qualified Childcare Providers</h3>
                </div>
                <div className='offer-box'>
                    <div className='offer-icons'>
                        <FontAwesomeIcon icon={faShieldAlt} />
                    </div>
                    <h3 className='offer-sub'>Safety</h3>
                </div>
                <div className='offer-box'>
                    <div className='offer-icons'>
                        <FontAwesomeIcon icon={faGamepad} />
                    </div>
                    <h3 className='offer-sub'>activity room</h3>
                </div>
                <div className='offer-box'>
                    <div className='offer-icons'>
                        <FontAwesomeIcon icon={faRunning} />
                    </div>
                    <h3 className='offer-sub'>play area </h3>
                </div>
            </div>
        </section>

        {/* testimonials - link to google reviews */}
        <section className='testimonials'>
            <h1 className='review-title'> What Parents Say</h1>
            <div className='review-container'>
                <iframe className='frame-box'
                    src='https://widgets.sociablekit.com/google-reviews/iframe/216756'
                    frameBorder='0'
                    width='90%'
                    height='650'
                    title='Google Reviews Widget'
                ></iframe>
            </div>
        </section>
        </>
    );
}

export default Home;
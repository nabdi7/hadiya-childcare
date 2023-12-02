import React from "react"; 
import { Link, useNavigate } from 'react-router-dom';
import "./Home.css";
import Gallery from './Gallery';
import image1 from '../images/images1.jpg';
import image2 from '../images/images2.jpg';
import image3 from '../images/images3.jpg';
// import image4 from '../images/images5.webp';
import proImg1 from '../images/proImg1.jpeg';
import proImg2 from '../images/after.jpg';
import proImg3 from '../images/proImg3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUserCheck, faShieldAlt, faGamepad, faRunning } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
    const galleryImages = [
        { img: image1 },
        { img: image2 },
        { img: image3 },
        // { img: image4 },
        // { img: image3 },
        // { img: image4 },
      ]
    const navigate = useNavigate();
  
    const scrollToServices = (event) => {
        navigate('/services');
        window.scrollTo(0, 0);
    };

    return (
        <>
    
        <div className='background-image'>
            <div className='title-container'>
                <h1 className='title'>Welcome to Hadiya Home Childcare</h1>
                <h1 className='title-sub'>Caring for the future </h1>
                {/* <button className='learn-more'>Learn More</button> */}
            </div>
        </div>
        
        <section className='program-container'>
            <div className='program-div'>
                <h1 className='prog-title'>Programs</h1>
                <h2> Age Appropriate Rooms</h2>
                <div className='program-types'>
                    <img src={proImg1} className='circleImg' alt='images'/>
                    <h3> Preschool </h3>
                    <p> Our Preschool program is designed to spark curiosity 
                        and foster a love for learning in young minds. We 
                        cultivate an environment where children explore, 
                        discover, and develop skills.</p>
                </div>
                <div className='program-types'>
                    <img src={proImg3} className='circleImg' alt='images'/>
                    <h3> Kindergarten </h3>
                    <p> Our Kindergarten program is designed to 
                        prepare children for the academic challenges of 
                        kindergarten. We focus on developing advanced 
                        language, motor, and social skills.</p>
                </div>
                <div className='program-types' style={{ marginRight: 0 }}>
                    <img src={proImg2} className='circleImg' alt='images'/>
                    <h3> After-School </h3>
                    <p> Our After-School Program provides a supportive 
                        environment for continued learning and growth. We 
                        offer engaging activities that complement
                        your child's school experience.</p>
                </div>
            </div>
            <div className='prog-learn'>
                <Link to="/services" className='learn-more-link' onClick={scrollToServices}>
                    <button className='learn-more'>Learn More</button>
                </Link>
            </div>
        </section>
        
        {/* gallery */}
        <h1 className='gallery-title'> PHOTO GALLERY</h1>
        <Gallery
            galleryImages={galleryImages}
         />
        

        {/* what we offer */}
        <section className='offer-container'>
            <h1 className='offer-title'>What We Offer</h1>
            <div className='offer-rows'>
                <div className='offer-box'>
                    <div className='offer-icons'>
                        <FontAwesomeIcon icon={faClock} />
                    </div>
                    <h3 className='offer-sub'>24/7 Operation</h3>
                </div>
                <div className='offer-box'>
                    <div className='offer-icons different'>
                        <FontAwesomeIcon icon={faUserCheck} />
                    </div>
                    <h3 className='offer-sub'>Qualified Childcare Providers</h3>
                </div>
                <div className='offer-box'>
                    <div className='offer-icons different1'>
                        <FontAwesomeIcon icon={faShieldAlt} />
                    </div>
                    <h3 className='offer-sub'>Safety</h3>
                </div>
                <div className='offer-box'>
                    <div className='offer-icons different2'>
                        <FontAwesomeIcon icon={faGamepad} />
                    </div>
                    <h3 className='offer-sub'>activity room</h3>
                </div>
                <div className='offer-box'>
                    <div className='offer-icons different3'>
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
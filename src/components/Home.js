import React from "react"; 
import "./Home.css";
// import logoImage from '../images/hadiya.png';
import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';
import image4 from '../images/kid4.jpeg';
import { AiOutlineSafety, AiOutlineClockCircle, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiGame, BiRun } from "react-icons/bi";

const Home = () => {
    return (
        <>
        <div className='background-image'>
            <div className='title-container'>
                <h1 className='title'>Welcome to Hadiya Home Childcare</h1>
                <h1 className='title-sub'>Where children learn and have fun </h1>
                {/* <p>Caring for the future</p> */}
                <button className='learn-more'>Learn More</button>
            </div>
        </div>

        
        {/* gallery */}
        <section className='gallery'>
            <div className='gallery-box'>
                <h1 className='gallery-title'> PHOTO GALLERY</h1>
                {/* underline */}
                <div className='image-grid'>
                    <img src={image1}  alt='gallery' />
                    <img src={image2}  alt='gallery' />
                    <img src={image3}  alt='gallery' />
                    <img src={image4}  alt='gallery' />
                </div>
            </div>

        </section>
        
        {/* what we offer */}
        <section className='offer-container'>
            <h1 className='offer-title'>What We Offer</h1>
            <div className='offer-box'>
                <div className='offer-icons'>
                    <AiOutlineClockCircle />
                </div>
                <h3 className='offer-title'>24/7 Operation</h3>
            </div>
            <div className='offer-box'>
                <div className='offer-icons'>
                    <AiOutlineUsergroupAdd />
                </div>
                <h3 className='offer-title'>Qualified Childcare Providers</h3>
            </div>
            <div className='offer-box'>
                <div className='offer-icons'>
                    <AiOutlineSafety />
                </div>
                <h3 className='offer-title'>Safety</h3>
            </div>
            <div className='offer-box'>
                <div className='offer-icons'>
                    <BiGame />
                </div>
                <h3 className='offer-title'>activity room</h3>
            </div>
            <div className='offer-box'>
                <div className='offer-icons'>
                    <BiRun />
                </div>
                <h3 className='offer-title'>play area </h3>
            </div>
        </section>

        {/* testimonials - link to google reviews */}
        <section className='testimonials'>
            <h1 className='review-title'> What Parents Say</h1>
            <div className='review-container'>
                {/* socialeKit */}
                <iframe className='frame-box'
                    src='https://widgets.sociablekit.com/google-reviews/iframe/216756'
                    frameBorder='0'
                    width='90%'
                    height='1000'
                    title='Google Reviews Widget'
                ></iframe>
            </div>
        </section>
        </>
    );
}

export default Home;
import React from "react"; 
import "./Home.css";
// import logoImage from '../images/hadiya.png';
import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';
import image4 from '../images/kid4.jpeg';

const Home = () => {
    return (
        <>
        <div className='background-image'>
            <div className='title-container'>
                <h1 className='title'>Hadiya Home Childcare</h1>
                <p>Caring for the future</p>
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
        

        {/* testimonials - link to google reviews */}
        <section className='testimonials'>
            <h1 className='review-title'> Reviews </h1>
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
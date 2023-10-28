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
                <img src={image1} width='450px' height='auto' alt='gallery' />
                <img src={image2} width='450px' height='auto' alt='gallery' />
                <img src={image3} width='450px' height='auto' alt='gallery' />
                <img src={image4} width='450px' height='auto' alt='gallery' />
            </div>

        </section>
        

        {/* testimonials - link to google reviews */}
        <section className='testimonials'>
            <h1> Reviews </h1>
            <div className='review-container'>
                {/* socialeKit */}
                <iframe
                    src='https://widgets.sociablekit.com/google-reviews/iframe/216756'
                    frameBorder='0'
                    width='100%'
                    height='1000'
                    title='Google Reviews Widget'
                ></iframe>
            </div>
        
        </section>
        </>
    );
}

export default Home;
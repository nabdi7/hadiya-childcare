import { Parallax } from "react-scroll-parallax";
import Back from '../images/kid1.jpeg';
import './BackImage.css'


const BackImage = () => {
    <Parallax className='background-image' blur={10} bgImage={Back} strength={800}>
     
            <div className='title-container'>
                <h1 className='title'>Welcome to Hadiya Home Childcare</h1>
                <h1 className='title-sub'>Where children learn and have fun </h1>
                {/* <p>Caring for the future</p> */}
                <button className='learn-more'>Learn More</button>
            </div>
    
    </Parallax>
};

export default BackImage;
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import f1 from '../Assets/f1.jpg';
import f2 from '../Assets/f2.jpg';
import f3 from '../Assets/f3.jpg';
import './ImageCarousel.css'; 
import './Navbar';

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === 2 ? 0 : current + 1); // Assuming there are 3 images
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? 2 : current - 1); // Assuming there are 3 images
  };

  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div className="Carousel">
        <Carousel showThumbs={false} selectedItem={current}>
          <div>
            <img src={f1} alt="f1" />
            <p className="legend">Image 1</p>
          </div>
          <div>
            <img src={f2} alt="f2" />
            <p className="legend">Image 2</p>
          </div>
          <div>
            <img src={f3} alt="f3" />
            <p className="legend">Image 3</p>
          </div>
        </Carousel>
        <div className="buttons-container">
          <button className="prev-button" onClick={previousSlide}><i className="arrow left"></i></button>
          <button className="next-button" onClick={nextSlide}><i className="arrow right"></i></button>
        </div>
      </div>
    </div>
  );
}

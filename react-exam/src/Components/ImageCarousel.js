import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import f1 from '../Assets/f1.jpg';
import f2 from '../Assets/f2.jpg';
import f3 from '../Assets/f3.jpg';
import './ImageCarousel'; 

export default function ImageCarousel() {
  return (
    <div className="App">
      <Carousel showThumbs={false}>
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
    </div>
  );
}

import React, {useState} from 'react'

import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import slideData from '../slidebar/slideData';


const ImageSlider = ({slides}) => {
const [current, setCurrent] = useState(0)
const length = slides.length;

const nextSlide=()=>{
  setCurrent(current === length - 1 ? 0 : current + 1);

};


const prevSlide = () =>{
  setCurrent(current === 0 ? length - 1 : current - 1);
}


  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left" onClick={prevSlide}/>
      <FaArrowAltCircleRight className="right" onClick={nextSlide}/>
     {slideData.map((slide, index)=> {
      return (
      <div 
      className={index === current ? 'slide active' : 'slide'}
      key={index}>
        {index === current && ( 
        <img src={slide.img} alt='images' className='image'/>)}
      </div>
      )
     })}
    </section>
  )
}

export default ImageSlider

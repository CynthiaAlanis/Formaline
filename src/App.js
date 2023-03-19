// 1. IMPORT useState
// import { useState } from "react";
import React from "react";
import "./styles.css";
// import pages from "../page/showpage";

// 2. IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr
import imagesArr from "./imageData.js";
// import BigImage from './BigImage'
import SmallImage from './SmallImage'
import frank from './frank.jpeg'
import ImageSlider from "./slidebar/slider";
import slideData from "./slidebar/slideData";

export default function App() {

  // 3. USE useState TO CREATE  [bigImage, setBigImage]
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY
  // const [bigImage, setBigImage] = useState(imagesArr[0].imgFile);

  // 4. CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
  // const handleClick = (imgUrl) => {
  //   setBigImage(imgUrl);
  // };

  // 5. CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL
  const images = imagesArr.map((image, index) => {
    return (
  <div className="img">
      <SmallImage
      className={image.class}
      src={image.img}
      alt={image.alt}
      // handleClick={handleClick}
      key={index}
      />
      </div>
    );
  });
  return (
    <div className="App">
  <div class="personal">
  <ul class="upper-tabs">
    <li><a class="top-box" href="#about">About</a></li>
  <li><a class="top-box" href="#proj">Projects</a></li>
  <li><a class="top-box" href="#skill">Our Services</a></li>
  <li><a class="top-box" href="#con">Contact</a></li>
  {/* <li><a class="top-box href={pages}</li></a></li> */}
  </ul>
</div>

      <h1 class="formaline">Formaline Design & Construction, Inc.</h1>
     
      <div id="proj">
      <div id="wrapper">
        {/* 6. RENDER THE IMAGES ARRAY  */}
        <div id="thumbnails">{images}</div>
        {/* 7. THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        {/* <img src={bigImage} id="bigimage" alt="bigImage" /> */}
        {/* <BigImage imageURL={bigImage}/> */}
      </div>
      <br/>
      <>
      <ImageSlider slides={slideData}/>
     </>
     <br/>
      </div>
      <div class="divider"><span></span><span>About</span><span></span></div>
  <div id="about">
  <div class="aboutme"></div>
  <img src={frank} alt="frank" class="frank"/>
  <h1 class="my-name">Frank Ramirez</h1>
  <h3>Contractor</h3>
<p>Formaline Design and Construction Inc. is your design and remodel center.  
General Contractor License #B449242 Serving Orange County since 1983.We specialize in complete home remodels.
<br/>
<br/>
Contact our owner Frank directly for in home computer designed custom cabinets for kitchen and bath, windows, doors, and everything in between.</p>

    <br/>
    <div class="divider"><span></span><span>Services</span><span></span></div>

    <div class='container'>
<ul id='skill'>
  <h3> Our services include:</h3>
  <li> ◈ Fireplace built-in cabinets</li>
  <li> ◈ Custom Kitchen Cabinets</li>
  <li> ◈ Custom Bathroom Cabinets</li>
  <li> ◈ Entire Home Remodels</li>
  <li> ◈ Custom wood windows</li>
  <li> ◈ Custom wood doors</li>
  <li> ◈ Media Center Installations</li>
  <li> ◈ Built-in speaker & Sound Systems</li>
  <li> ◈ Appliance Installations</li>
</ul>
<img src='https://i.imgur.com/RSqK9pJ.jpeg' alt='images' class='imageK'/>
</div>
<p>We are your one stop shop for a trusted source when you're ready to freshen up your home.  Whether it's a small or large project.  We are committed to providing the highest quality service and product to our community.</p>
<p>
Contact us for FREE in home estimates, and we look forward to speaking with you.</p>
</div>

<div class="divider"><span></span><span>Contact Us</span><span></span></div>
{/* contacts */}
<div id="con">
  <h2 class="Contact">Contact</h2>
  <ul id="links">
    <li>Phone Number: (714) 434-1428</li>
    <br/>
    <li><a href="mailto:kitchencabdesign@aol.com">Email: kitchencabdesign@aol.com</a></li>
    <br/>
    <li>Address: 17150 Newhope Street Unit 1110
Fountain Valley, CA 92708
</li>
   <br/>
   <br/>
  </ul>
</div>
    </div>
  );
}

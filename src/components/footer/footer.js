import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './footer.css';

const Foooter = () => {
  return (
    <div>
      <div class = "bottom">
        <a class = "last" href="about.html"> About Us </a><br/>
        <a  class = "last" href= "career.html"> Career</a> <br/>
        <a class = "last"  href= "blog.html"> Blog</a> <br/>
        <a  class = "last" href= "faq.html"> faq</a> <br/>
        <a  class = "last" href="contact.html">Contact Us</a><br/>
      
        <a href =" https://www.facebook.com/">   <img  src=" https://image.flaticon.com/icons/svg/179/179319.svg" class = "social"/>  </a>
           
        <a href =" https://www.linkedin.com/ ">    <img  src=" https://image.flaticon.com/icons/svg/179/179330.svg" class = "social"/>  </a>
           
              
        <a href ="https://www.instagram.com/ ">    <img  src=" https://image.flaticon.com/icons/svg/2111/2111463.svg" class = "social"/>  </a>
        <p id="legal"> 
               
           &#169; 2020 Ridesgo | All Right Reserved</p>
       </div>
    </div>
  );
}

export default Foooter;
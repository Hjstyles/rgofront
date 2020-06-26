import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <div class="contact"><p> Contact Us</p></div>
    
    <div class="text"><p>Got a question?<br/>
You can contact us through these platforms,<br/> we will get in touch with you at the earliest.</p></div>
    
      <div class = "horizontal">   
        <div class="item">
        <img src= "  https://image.flaticon.com/icons/svg/1946/1946488.svg " class="image2"/>
              <p class="hi">  Reach us <br/><div class="safe21"> Mahavir Enclave, New Delhi- 110045 <br/> <a href="https://goo.gl/maps/EdzPk8FqJkWBdKRr9"> view on map</a></div> </p>
            </div>  
          
           <div class="item">
        <img src="  https://image.flaticon.com/icons/png/512/455/455604.png "  class="image2"/>
               <p class="hi">Call us<br/><div class="safe21">+91 83770 55197 || +91 99109 02375 </div></p>
            </div>  
    
    
     
           <div class="item">
        <img src="  https://image.flaticon.com/icons/svg/481/481659.svg  "  class="image2"/>
               <p class="hi">Write to us <br/><div class="safe21"> teamrides05@gmail.com</div></p>
            </div> 

        </div>
    
       
    </div>
  );
}

export default Contact;
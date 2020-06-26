import React from 'react';
import './home.css';
import overloading from './overloading.png';
import pin from './pin.png';
import speedometer from './speedometer.png';
import videocamera from './video-camera.png';

const Home = () => {
  return (
    <div>
       <h1><strong> Safe School Rides at your <br/> Doorstep</strong>
            
           
            
        
        <div class="vijay">
        We provide Smart & Safe School Cabs for your  little champs !
        </div>
            
        <a href= "https://fordelgroup.com/wp-content/uploads/2019/08/cogs.gif">  <img src=" https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"  alt="playstore icon" class="okay" /> </a>  
        
       </h1> 
    
       <a href="https://wa.me/918377055197?text=Hi RidesGo Team,%20I%20have%20some%20queries%20regarding..." >
      
         <img  src=" https://image.flaticon.com/icons/svg/2111/2111728.svg" class="whatsapp" />

       </a>
      
   
        
        
     
        
       
     
       <div class="ridesgo"><span class="ridesgo1" >What Ridesgo offer</span></div>

        <div class = "horizontal2">
            
            
           
          <div class="item">
              <img src={overloading} class="image"/>
              <p class="hi">No Ovderloading <br/><div class="safe21">Our Cabs have One cab Eight children's  Policy<br/> as per as Government rule. so that your<br/>  child can travel comfortably</div> </p>
          </div>  
          
           <div class="item">
               <img src=" https://image.flaticon.com/icons/svg/1161/1161388.svg " class="image "  class="image" />
               <p class="hi">Safe Ride's <br/> <div class="safe21"> Safety Cutting edge technologies to ensure <br/>your kids are safe. Because safety of your <br/>kids is our utmost priority</div></p>
           </div>  
     
        
     
            <div class="item">

                <img src="https://image.flaticon.com/icons/svg/733/733361.svg " class="image" />
                <p class="hi">Affordable Cabs<br/><div class="safe21"> Yay! you are heard it right. Our rides are cost<br/> effective so that every parents can afford <br/> it for their child</div></p>
            </div> 
            
            <div class="item">
                  <img class="image" src=" https://image.flaticon.com/icons/svg/2922/2922686.svg"/>
                  <p class="hi">Verified Drivers<br/><div class="safe21"> We onboard our ridesgo drivers after their strict<br/>background check by our team and followed<br/> by police verification.</div></p>
            </div>  
                
        </div> 
        
         
        
        
      

        <hr/>
      <div class="plus">
          <p class="app">How all it Works !</p>
        
          <div class = "horizontal3">
            
              <div class="  item3">
               <img src=" https://image.flaticon.com/icons/svg/254/254638.svg "  class="image3a"/>
               <p class="   hi3">    Download the App & login<br/></p>
              </div>  
     
              <div class="item3">
               <img src=" https://image.flaticon.com/icons/svg/983/983901.svg " class="image3b"/>
               <p class="   hi3"> Add a Ride for your children<br/></p>
              </div>  
     
              <div class="item3">
               <img src= " https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/car-128.png" class="image3c"/>
               <p class="   hi3"> School cab will reach on time<br/></p>
              </div>  
          
                
                
          </div>  
        
            
        <div class="your">
          <p>Your child safety comes<br/> first ... always !
          <br/> 
            <div class="all" >All our vehicles are comprised of various tech-oriented safety features with strictly verified drivers.<br/>

                Now track your kids location & watch the live video of your kid rides. </div></p>
        </div>
        
        
      </div>
        
    
       
      <div class="corona">
         How ridesgo ensure <span class="corona1">Student Safety !</span>
      </div>
       
     
       
     
           <div class = "horizontal">   
              <div class="item">
                  <img src= {pin} class="image2"/>
                  <p class="hi">    Live Location <br/><div class="safe21"> We help you with our live GPS tracking system <br/> to trackevery move of the cab your <br/> kid is traveling. </div> </p>
              </div>  
          
              <div class="item">
                   <img src={speedometer}  class="image2"/>
                   <p class="hi">Speed Tracker<br/><div class="safe22"> Live Speed of your kid's cab will be shown to <br/> you. Incase of overspeeding, an alert is send <br/>to the Driver</div></p>
              </div>  

            </div>
       
        <div class = "horizontal">   
            <div class="item">
             <img src= {videocamera} class="image2"/>
              <p class="hi"> Live Visuals <br/><div class="safe22">You can even watch the Live visuals of inside <br/>the ridesgo cab from which your child <br/> is travelling.</div> </p>
            </div>  
          
           <div class="item">
               <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNnk3NSeaSJy3CR9yc4mkHeO1nQ63RkfMIZ09O8zdtliCftG6G&usqp=CAU "  class="image2"/>
               <p class="hi">GeoFencing<br/><div class="safe22">We can always be notified if the driver takes an<br/> off-route from the prescribed route marked <br/>by us for a ride. </div></p>
           </div>  
        </div>
      
    </div>
  );
}

export default Home;
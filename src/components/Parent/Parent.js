import React from 'react';
import './Parent.css';

const Parent = () => {
  return (
    <div>
      <div class="sum">
    <div class="are">

    <p>Are you worried about your<br/> child safety during their school  transportation !</p>
    
    </div>
    
    <div class="understand"><p>We have a simple & effective platform specifically designed to keep our riders safe and give a relaxed experience to their parents.</p></div>
        
        </div>
    
    
   
    <div class="how">
        <img src="data:image/png;base64,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" class="err"/>
    <p> Certified Drivers  </p>
    </div>
    
    <div class="driver">
    <p>We onboard our drivers after a step vise verification process which includes their background check by our team and police verification. </p>
    </div>
          
       
            <div class = "horizontal">   
        <div class="item">
        <img src= "  https://cdn4.iconfinder.com/data/icons/core-ui-outlined-rounded/32/outlined_rounded_button_tick-128.png" class="image2"/>
              <p class="hi"> Ridesgo Verification <br/><div class="safe21"> We onboard the drivers after various filtration <br/>process which include traffic violation,Valid<br/> driver's license, Qualification  .</div> </p>
            </div>  
          
           <div class="item">
        <img src="https://image.flaticon.com/icons/svg/150/150510.svg"  class="image2"/>
               <p class="hi">Police Verification<br/><div class="safe21">All the ridesgo drivers go through Police  Verificati<br/>on of the drivers to check their background and  <br/>criminal record before onboarding them.

  </div></p>
            </div> 
    
        </div>
    </div>
  );
}

export default Parent;
import React from 'react';
import './Career.css';
import a from './a.png';
import b from './b.png';
import c from './c.png';
import d from './d.png';
import e from './e.png';

const Career = ({ onRouteChange}) => {
  return (
    <div>
        <div class="ready">
    <p> Ready to create something <br/>
big ?</p> </div> 
   
    
    <div class="we">
    <p>We are always looking to hire smart people who have the zeal to learn and can work with <br/>passion</p> </div>
    
    
  <div class="perks">  <span class="perks1">Perks of joining our team</span></div>
    
      <div class = "horizontal">  
          
              
        <div class="item">
        <img src={a} class="perks2" />
              <p class="hi">  High potential for
career growth
  </p>
            </div>  
       
           <div class="item">
           <img src={b} class="perks2" />
               <p class="hi">Be a part of a early stage startup</p>
            </div>  
    
    
        
        <div class="item">
        <img src={c} class="perks2" />
              <p class="hi">  Meet like-minded peers
  </p>
            </div>  
          
          

        </div>
    
    
    <div class = "horizontal">   
        
    
        
        
           <div class="item">
      
       <img src={d} class="perks2" />
               <p class="hi">Flat organizational
structure</p>
            </div>  
    
     <div class="item">
       <img src={e} class="perks2" />
               <p class="hi">Flexible timings &
work from home
 </p>
            </div> 
    

        </div>
    
    
    <hr/>
     <div class="check">
   <p> Check out our open positions !</p> </div>
    
    
    
    
      <div class = "horizontal">  
          
          
    
    <div class="card">
   <img src="https://www.aaditritechnology.com/images/content-writing.gif" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Content Writer</h5>
    <p class="card-text">Type : Internship <br/> Duration : 3 Months </p> 
    <a onClick={() => onRouteChange('intern')} class="btn btn-primary">Apply</a>
  </div>
</div>

    
    
      <div class="card">
  <img src="https://www.bigbraincreation.com/bigbrain-images/bigbrain-about/Digital-Marketing.gif" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Social Media Marketing</h5>
    <p class="card-text">Type : Internship <br/> Duration : 3 Months</p>
    <a onClick={() => onRouteChange('intern')} class="btn btn-primary">Apply</a>
  </div>
</div>
    
    
      <div class="card">
  <img src="https://cdn.dribbble.com/users/3158731/screenshots/6230349/life-of-a-ux-designer-800x600.gif" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Graphic Designer</h5>
   <p class="card-text">Type : Internship <br/> Duration : 3 Months</p>
   
    <a onClick={() => onRouteChange('intern')} class="btn btn-primary">Apply</a>
  </div>
</div>
          
          
    </div>
       
    </div>
  );
}

export default Career;


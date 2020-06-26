import React from 'react';
import brain from './IMG-20200606-WA0007.jpg';

const Navigation = ({ onRouteChange}) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light  style=background-color: white; ">
  <a class="navbar-brand" href="index.html" >
<img src={brain}/></a>
            
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul class="navbar-nav navbar-right " >
      <li class="nav-item active">
        <a onClick={() => onRouteChange('home')} class="nav-link ">Home <span class="sr-only">(current)</span></a>
      </li>
        
      <li class="nav-item active">
        <a onClick={() => onRouteChange('school')} class="nav-link" >School <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a onClick={() => onRouteChange('parent')} class="nav-link" >Parents <span class="sr-only">(current)</span></a>
      </li>
          <li class="nav-item active">
        <a onClick={() => onRouteChange('career')} class="nav-link" >Career<sup>We are hiring !</sup> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a onClick={() => onRouteChange('contact')} class="nav-link" >Contact Us <span class="sr-only">(current)</span></a>
      </li>
    </ul>
   
  </div>
</nav>
      );
}

export default Navigation;
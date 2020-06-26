import React, { Component } from 'react';
//import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Home from './components/home/home';
import Intern from './components/intern/intern';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Foooter from './components/footer/footer';
import School from './components/School/School';
import Parent from './components/Parent/Parent';
import Career from './components/Career/Career';
import Contact from './components/Contact/Contact';
import './App.css';
import brain from './IMG-20200606-WA0007.jpg';
import overloading from './overloading.png';
import pin from './pin.png';
import speedometer from './speedometer.png';
import videocamera from './video-camera.png';



class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      route: 'home',
      isSignedIn: false,
    }
  }  

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  /*onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            })

        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }*/

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    const { route} = this.state;
    return (
      /*<div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
          ? <div>
              <Logo />
              <Rank
                name={this.state.user.name}
                entries={this.state.user.entries}
              />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition box={box} imageUrl={imageUrl} />
            </div>
          : (
             route === 'signin'
             ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
             : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
        }
      </div>*/
   <div>
        
        <Navigation onRouteChange={this.onRouteChange}/>
        { route === 'home'
          ? <Home/>
          : (
             route === 'school'
             ? <School onRouteChange={this.onRouteChange}/>
             : (
                route === 'parent'
                ? <Parent/>
                : (
                   route === 'career'
                   ? <Career onRouteChange={this.onRouteChange}/>
                   : (
                      route === 'contact'
                      ? <Contact/>
                      : <Intern onRouteChange={this.onRouteChange}/>
                      )
                  )
               )
            )
        }       
   
        <Foooter/>
       
       
   </div>
   );
  }
}

export default App;
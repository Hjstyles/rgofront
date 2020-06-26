import React from 'react';

class Intern extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: '',
      phoneno: '',
      year: '',
      collegename: '',
      name: '',
      exp: ''

    }
  }

  onCollegeNameChange = (event) => {
    this.setState({collegename: event.target.value})
  }

  onYrChange = (event) => {
    this.setState({year: event.target.value})
  }

  onPhoneChange = (event) => {
    this.setState({phoneno: event.target.value})
  }
  onPosChange = (event) => {
    this.setState({position: event.target.value})
  }
  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }
  onExpChange = (event) => {
    this.setState({exp: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://git.heroku.com/frozen-retreat-23211.git/intern', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        position: this.state.position,
        phoneno: this.state.phoneno,
        year: this.state.year,
        collegename: this.state.collegename,
        name: this.state.name,
        exp: this.state.exp
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.phoneno) {
           this.props.onRouteChange('home');
        }
      })
  }

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Apply to be a part of RidesGo</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Position you applying for</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="position"
                  id="position"
                  onChange={this.onPosChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Contact no</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="phoneno"
                  id="phoneno"
                  onChange={this.onPhoneChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">college Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="collegename"
                  id="collegename"
                  onChange={this.onCollegeNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Year & Course</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="year"
                  id="year"
                  onChange={this.onYrChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Previous Experience</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="exp"
                  id="exp"
                  onChange={this.onExpChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn} 
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Submit"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Intern;
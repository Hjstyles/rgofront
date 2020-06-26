import React from 'react';

class Schoolform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poc: '',
      phoneno: '',
      address: '',
      schoolname: ''
    }
  }

  onNameChange = (event) => {
    this.setState({schoolname: event.target.value})
  }

  onAddChange = (event) => {
    this.setState({address: event.target.value})
  }

  onPhoneChange = (event) => {
    this.setState({phoneno: event.target.value})
  }
  onPocChange = (event) => {
    this.setState({poc: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://frozen-retreat-23211.herokuapp.com/schoolform', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        poc: this.state.poc,
        phoneno: this.state.phoneno,
        address: this.state.address,
        schoolname: this.state.schoolname
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
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">School Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="school-name"
                  id="school-name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Address</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="address"
                  id="address"
                  onChange={this.onAddChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Phone no</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="phoneno"
                  id="phoneno"
                  onChange={this.onPhoneChange}
                />
              </div><div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Person of Contact</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="poc"
                  id="poc"
                  onChange={this.onPocChange}
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

export default Schoolform;
import React, { Component } from "react";
import './singin.css';
// import { useState } from "react";
import axios from "axios";
export default class Signin extends Component {
  x
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMobileNumber = this.onChangeMobileNumber.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Name: '',
      Email: '',
      Password: '',
      MobileNumber: ''
    }

  }
  onChangeName(e) {
    this.setState({
      Name: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      Email: e.target.value
    });
  }

  onChangeMobileNumber(e) {
    this.setState({
      MobileNumber: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      Password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      Name: this.state.Name,
      Email: this.state.Email,
      MobileNumber: this.state.MobileNumber,
      Password: this.state.Password
    };
    axios.post('http://localhost:8000/users', user)
      .then(res => console.log(res.data));

    this.setState({
      Name: '',
      Email: '',
      MobileNumber: '',
      Password: ''
    })
  }
  render() {
    return (
      <div className="form" >
        <form onSubmit={this.onSubmit}>
          <center>
          <img src="images/signup-image.jpg" alt="signup" />
          <div className="fadeIn first" id="input-with-icon-div"  style={{ marginBottom: "3px" }}
            variant="standard">
            <input type="text" class="fadeIn second" placeholder="User Name"
              value={this.state.Name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="fadeIn first">
            <input placeholder="Email" type="text" class="fadeIn second" value={this.state.Email}
              onChange={this.onChangeEmail} />
          </div>
          <div className="fadeIn first">
            <input placeholder="Your Phone Number" type="text" class="fadeIn second" value={this.state.MobileNumber}
              onChange={this.onChangeMobileNumber} />
          </div>
          <div className="fadeIn first">
            <input placeholder="Password" type="Password" class="fadeIn second" value={this.state.Password}
              onChange={this.onChangePassword} />
          </div>
          <div  className="fadeIn first">
            <input type="submit" value="Register User" className="btn btn-primary" />
          </div>
          <div id="formFooter">
                 <p>
                   Have already an account?
                   <a href="/#" class="underlineHover">
                     Sign in here
                   </a>
                 </p>
             </div>
          </center>
        </form>
      </div>

    );
  }
}

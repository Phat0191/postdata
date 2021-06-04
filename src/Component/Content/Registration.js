import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom'
class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
          sucess: false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    async handleChange(evt) {
      await this.setState({ [evt.target.name]: evt.target.value });
  }
  async registration(e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let pw = document.getElementById("password").value;
    let check = [];
    await axios({
        method: 'GET',
        url: `http://localhost:8080/api/users?email=${email}&&password=${pw}`,
        data: null
    }).then(res => {
      check = res.data
      console.log(check);
        if (check.length != 0) {
            document.getElementById("error-mes").style.color = "red";
            document.getElementById("error-mes").innerHTML = "Please choose other mail ! Your mail is subed !";
        }
        else {
            document.getElementById("error-mes").style.color = "green";
            document.getElementById("error-mes").innerHTML = "Success create an accout ! Thank you for choosing my service !";
            let acc = {
              name:  document.getElementById("name").value,
              email: document.getElementById("email").value,
              user: document.getElementById("user").value,
              password: document.getElementById("password").value,
              phone: document.getElementById("phone").value,
              location: document.getElementById("location").value,
              status: "unlock",
              checkStatus: true
          }
          axios({
            method: 'POST',
            url: 'http://localhost:8080/api/users',
            data: acc
        });
          this.setState({
            sucess: true
          }, ()=> console.log(this.state.sucess))            
        }
    }).catch((err) => { console.log(err); });
}
    render() {
      if(this.state.sucess === true){
        return (<Redirect to="trending" />); 
    }
        return (
            <React.StrictMode>
            <h2 className="h5 text-uppercase mb-4">Registration Account</h2>
        <div className="row">
        <form onSubmit={this.registration}>
          <div className="col-lg-8">
              <div className="row">

                <div className="col-lg-6 form-group">
                  <label className="text-small text-uppercase">Your name</label>
                  <input className="form-control form-control-lg" required name="name" id="name" type="text" placeholder="duong de thuong" onChange={this.handleChange}/>
                </div>
                
                <div className="col-lg-6 form-group">
                  <label className="text-small text-uppercase">Email address</label>
                  <input className="form-control form-control-lg" id="email" type="email" placeholder="duong.a22@student.passerellesnumeriques.org" onChange={this.handleChange}/>
                </div>

                <div className="col-lg-12 form-group">
                  <label className="text-small text-uppercase">User name</label>
                  <input className="form-control form-control-lg" id="user" type="text"  placeholder="duong cute" onChange={this.handleChange}/> 
                </div>
                <div className="col-lg-6 form-group">
                  <label className="text-small text-uppercase">Password</label>
                  <input className="form-control form-control-lg" id="password" type="password" placeholder="Your password"  onChange={this.handleChange}/>
          
                </div>
                <div className="col-lg-6 form-group">
                  <label className="text-small text-uppercase">Number phone</label>
                  <input className="form-control form-control-lg" id="phone" name="phone"  type="text" placeholder="Your number phone" onChange={this.handleChange}/>
                </div>
                <div className="col-lg-12 form-group">
                  <label className="text-small text-uppercase">Location</label>
                  <input className="form-control form-control-lg" id="location" name="location" type="text" placeholder="Your address" onChange={this.handleChange}/>
                </div>

                <div className="col-lg-12 form-group">
                  <button className="btn btn-dark" type="submit">Finish</button>
                </div>
                <div id="error-mes"></div>
              </div>
              
          </div>
          </form>
        </div>
        </React.StrictMode>
        );
    }
}

export default Registration;
import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.Login = this.Login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    async Login(e) {
        e.preventDefault();
        let email = document.getElementById("email").value;
        let pw = document.getElementById("password").value;
        console.log(email);
        let check = [];
        await axios({
            method: 'GET',
            url: `http://localhost:8080/api/users?email=${email}&&password=${pw}`,
            data: null
        }).then(res => {
            check = res.data
            if (check.length === 0) {
                document.getElementById("error-mes").style.color = "red";
                document.getElementById("error-mes").innerHTML = "Account password is incorrect! Please check again !";
            }
            else {
                check.map((val) => {
                    localStorage.setItem("currenrUser", JSON.stringify(val))
                })
                window.location.reload(false);
                
            }

        }).catch((err) => { console.log(err); });

    }
    componentDidMount(){
        
    }
    render() {
        if(localStorage.getItem('currenrUser')){
            return (<Redirect to="trending" />); 
        }
        return (
            <div>
                <h2 className="h5 text-uppercase mb-4">Login</h2>
                <form onSubmit={this.Login}>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-8 form-group">
                                <label className="text-small text-uppercase">Email</label>
                                <input className="form-control form-control-lg" required autofocus name="email" id="email" type="text" placeholder="Enter your user name" onChange={this.handleChange} />
                                <div id="error-mes"></div>
                            </div>

                            <div className="col-lg-8 form-group">
                                <label className="text-small text-uppercase" htmlFor="password">Password</label>
                                <input className="form-control form-control-lg" required name="password" id="password" type="password" placeholder="Enter your password" onChange={this.handleChange} />
                            </div>

                            <div className="col-lg-6 form-group">
                                    <button className="btn btn-dark" type="submit">
                                        Login
                                    </button>
                            </div>
                            <div className="col-lg-6 form-group">
                                    <button className="btn btn-dark" type="submit">
                                        Forget Password
                                    </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}

export default Login;
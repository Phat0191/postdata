import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Trending from '../Content/Trending';
import Registration from '../Content/Registration'
import Searching from '../Content/Searching'
import Detail from '../Content/Detail'
import Login from '../Content/Login';
import ItemCard from '../Content/Item_card';;
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      user: {}
    }
  }

  hideModal = () => {
    this.setState({
      open: false
    })
    console.log(this.state.open);
  };
  showModal = () => {
    this.setState({
      open: true
    })
    console.log(this.state.open);
  };
  logOut(){
    localStorage.clear();
    window.location.reload(false);
}
  componentDidMount(){
    if(localStorage.getItem('currenrUser')){
      const haha = JSON.parse(localStorage.getItem('currenrUser'));
    this.setState({
      user: haha
    },)
    }
  }
  render() {
    return (
      <Route>
        <React.Fragment>
          <header className="header bg-white">
            <div className="container px-0 px-lg-3">
              <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0"><a className="navbar-brand" href="index.html"><span className="font-weight-bold text-uppercase text-dark">ME:U</span></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <a className="nav-link active"><Link to="/">Home</Link></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"><Link to="/trending">Menu</Link></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"><Link to="/searching">Searching</Link></a>
                    </li>
                  </ul>
                  <ul className="navbar-nav ml-auto">
                  {(() => {
                            if (localStorage.getItem('currenrUser')){
                                return <React.Fragment><li className="nav-item"><a className="nav-link" href="cart.html"> <i className="fas fa-dolly-flatbed mr-1 text-gray" /><Link to="/Cart">Cart</Link></a></li>
                               <li className="nav-item"><a className="nav-link" > <i className="fas fa-user-alt mr-1 text-gray" />Hello, {this.state.user['name']}</a></li>
                                <button onClick ={this.logOut}><li className="nav-item"><a className="nav-link" > <i className="fas fa-user-alt mr-1 text-gray" /><Link to="/trending">Log out</Link></a></li></button></React.Fragment>
                            }
                            else {
                              return <React.Fragment><li className="nav-item"><a className="nav-link" > <i className="fas fa-user-alt mr-1 text-gray" /><Link to="/login">Login</Link></a></li>
                              <li className="nav-item"><a className="nav-link" > <i className="fas fa-user-alt mr-1 text-gray" /><Link to="/registration">Create New Account</Link></a></li></React.Fragment>
                            }
                        })()}
                    

                  </ul>
                </div>
              </nav>
              <Switch>
                <Route exact path="/">
                </Route>

                <Route exact path="/searching">
                  <Searching />
                </Route>

                <Route exact path="/detail/:id">
                    <Detail></Detail>
                </Route>

                <Route path="/trending">
                  <Trending />

                </Route>
                <Route path="/registration">
                  <Registration />
                </Route>

                <Route path="/login">
                  <Login />
                </Route>

                <Route path="/Cart">
                <ItemCard />
                </Route>

              </Switch>
            </div>
          </header>
        </React.Fragment>
      </Route>
    );
  }
}

export default Navbar;

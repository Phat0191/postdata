import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom'
class Comment extends Component {
    constructor(props){
        super(props);
        this.state = {
          shop:{},
          comment: [],
            user:{}
        }
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    async Cmt(e) {
        e.preventDefault();
        let haha = JSON.parse(localStorage.getItem('currenrUser'));
        console.log(haha['id']);
        let newCmt={
            user: [
                {id: haha['id'],
                name: haha['name']
            }
            ],
            content: document.getElementById("cmt").value
        }
        await axios({
            method: 'POST',
            url: 'http://localhost:8080/api/comments/',
            data: newCmt
        });

    }
      componentDidMount() {
        var productid = window.location.pathname;
        productid = productid.split("Detail/");
          axios({
          method: 'GET',
          url: 'http://localhost:8080/api/coffeeShop?nameShop=CUTEST DAY',
          data: null
      }).then(res => {
        this.setState({shop: res.data[0]}, ()=> axios({
            method: 'GET',
            url: 'http://localhost:8080/api/comments',
            data: null
          }).then(res => {
          this.setState({comment: res.data}, ()=> console.log(this.state.comment));
          }));
    });
      }
    render() {
        return (
            <div>
                {/* DETAILS TABS*/}
                <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
                  <li className="nav-item"><a className="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">About ME:U</a></li>
                  <li className="nav-item"><a className="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="true">Reviews</a></li>
                </ul>
                <div className="tab-content mb-5" id="myTabContent">
                  <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                    <div className="p-4 p-lg-5 bg-white">
                      <h6 className="text-uppercase">From: {[this.state.shop['nameShop']]} Company</h6>
                      <p className="text-muted text-small mb-0">Mail: {[this.state.shop['gmail']]}</p>
                      <p className="text-muted text-small mb-0">Number phone: {[this.state.shop['numberphone']]}</p>
                      <p className="text-muted text-small mb-0">Address: {[this.state.shop['address']]}</p>
                    </div>
                  </div>
                  {
                          
                          this.state.comment.map(item=>{
                            return <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                            <div className="p-4 p-lg-5 bg-white">
                              <div className="row">
                                <div className="col-lg-8">
                                  <div className="media mb-3"><img className="rounded-circle" src="img/customer-1.png" alt="" width={50} />
                                    <div className="media-body ml-3">
                                      <h6 className="mb-0 text-uppercase">{item['user'].map(user=>{ return user.name})}</h6>
                                      <p className="small text-muted mb-0 text-uppercase">ID: {item.id}</p>
                                      <p className="text-small mb-0 text-muted">{item['content']}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>;
                          })
                         }
                         {(() => {
                            if (localStorage.getItem('currenrUser')){
                                return <React.Fragment><form onSubmit={this.Cmt}>
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-lg-8 form-group">
                                            <label className="text-small text-uppercase">Give us your comment</label>
                                            <input className="form-control form-control-lg" required autofocus name="cmt" id="cmt" type="text" placeholder="Your comment" onChange={this.handleChange} />
                                            <div id="error-mes"></div>
                                        </div>
                                        <div className="col-lg-6 form-group">
                                                <button className="btn btn-dark" type="submit">
                                                    SUBMIT
                                                </button>
                                        </div>
                                    </div>
                                </div>
                            </form></React.Fragment>
                            }
                            else {
                              return <React.Fragment><li className="nav-item"><a className="nav-link" > <i className="fas fa-user-alt mr-1 text-gray" /><Link to="/login">Login</Link></a></li>
                              <li className="nav-item"><a className="nav-link" > <i className="fas fa-user-alt mr-1 text-gray" /><Link to="/registration">Create New Account</Link></a></li></React.Fragment>
                            }
                        })()}
                  
                </div>
            </div>
        );
    }
}

export default Comment;
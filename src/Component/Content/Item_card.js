// import Item from 'antd/lib/list/Item';
import React, { Fragment, Component } from 'react';
import axios from 'axios';

// process.env.REACT_APP_NAME_VARIABLE=window.Item; (lấy dữ liệu all)
window.total = 0;
window.discuont = 0;
export default class ItemCard extends Component {

  shoppingCart = [];
  constructor(prop) {
    super(prop);
    this.state = {
      id:'',
      status:'',
      username:'',
      reload: false,
    }
  }
  componentWillMount() {
    this.getDate();
  }
  getDate = () => {
    var getItem = JSON.parse(localStorage.getItem('ShoppingCart'));
    if(localStorage.getItem('currenrUser')){
    var getUser = JSON.parse(localStorage.getItem('currenrUser'));
    this.setState({
      username:getUser['name'],
      status:'Chờ Xác Nhận',
    }, ()=> console.log(this.state.username));
  }
    this.shoppingCart = getItem;
  }

  // Plus Product
  plusPro=(index)=>{
    this.shoppingCart[index].quantity= this.shoppingCart[index].quantity + 1;
    localStorage.setItem('ShoppingCart',JSON.stringify(this.shoppingCart))
    this.setState({
      reload: !this.state.reload,
    })
  }

  // Minus product
  misusPro=(index)=>{
    if(this.shoppingCart[index].quantity > 1){
      this.shoppingCart[index].quantity= this.shoppingCart[index].quantity - 1;
      localStorage.setItem('ShoppingCart',JSON.stringify(this.shoppingCart))
      this.setState({
        reload: !this.state.reload,
      })
    }
  }

  // Delete a product
  deletePro=(id)=>{
    this.shoppingCart.splice(id,1);
    localStorage.setItem('ShoppingCart',JSON.stringify(this.shoppingCart))
    this.setState({
      reload: !this.state.reload,
    })
    alert("Removed!")
  }

  // Push Data into JSON
  postDataCart=()=>{
 let cart = JSON.parse(localStorage.getItem('ShoppingCart'));
    let newDrink={
      username:this.state.username,
      drink:cart,
      status:this.state.status,
      reminder:'',
      total:window.total
    }
    axios({
      method: 'POST',
      url: 'http://localhost:8080/api/orders',
      data: newDrink
  }).then(res => {}).catch(err => { });
  localStorage.clear();
  // window.location.reload();
}


  render() {
    window.total = 0;
    window.discuont = 0;
    if (this.shoppingCart == null) {
      return (
        <Fragment>
          <table style={{ width: '100%' }}>
            <thead style={{ backgroundColor: '#0d0c0c', color: '#faf9f7' }}>
              <tr>
                <th style={{ padding: '10px 65px' }}>Img</th>
                <th style={{ padding: '10px' }}>Product</th>
                <th style={{ padding: '10px' }}>Price</th>
                <th style={{ padding: '10px' }}>Quantity</th>
                <th style={{ padding: '10px', columnCount: '2' }}></th>
                <th></th>
              </tr>
            </thead>
          </table>
        </Fragment>
      )
    }

    else {
      return (
        <Fragment>
          <table style={{ width: '100%' }}>
            <thead style={{ backgroundColor: '#0d0c0c', color: '#faf9f7' }}>
              <tr>
                <th style={{ padding: '10px 65px' }}>Img</th>
                <th style={{ padding: '10px' }}>Product</th>
                <th style={{ padding: '10px' }}>Price</th>
                <th style={{ padding: '10px' }}>Quantity</th>
                <th style={{ padding: '10px', columnCount: '2' }}>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                    {
                      this.shoppingCart.map((Product, index) => {
                        window.total = window.total + Product.quantity * Product.price;
                        window.discuont = window.discuont + Product.quantity * Product.sale;
                        return (
                          console.log(window.total),
                          <Fragment>
                            <tr style={{ borderBottom: '3px solid #8a8987' }}>
                              <td style={{ paddingTop: '5px', paddingBottom: '5px'}}>
                                <img src={Product.detail_image} style={{ width: '150px', height: '120px' }}></img></td>
                              <td>{Product.name}</td>
                              <td>$ &nbsp;{Product.price}</td>
                              <td>
                                <i className="fas fa-minus" style={{ color: 'red', paddingRight: '9px' }} onClick={() => this.misusPro(index)} ></i>
                                <input type="text" value={Product.quantity} style={{ width: '35px', paddingLeft: '8px' }} />
                                <i className="fas fa-plus" style={{ color: 'red', paddingLeft: '8px' }} onClick={() => this.plusPro(index)} ></i>
                              </td>
                              <td>$ &nbsp;{Product.quantity * Product.price}</td>
                              <td><i className="far fa-trash-alt" style={{ color: 'red' }} onClick={() => this.deletePro(index)}> </i></td>
                            </tr>
                          </Fragment>
                        );
                      })
                    }
            </tbody>
          </table>
          <div className="row" style={{ marginTop: '40px' }}>

            <div className='col-sm-3' style={{ marginLeft: '0px' }}>
              <div style={{ border: '2px solid #c9c8c3', width: '220px', }}>
                <div className='row'>
                  <div className='col-sm-6' style={{ padding: '10px' }}>
                    <p1 style={{ paddingLeft: '20px' }} >DISCOUNT</p1>
                  </div>
                  <div className='col-sm-6' style={{ padding: '10px' }}>
                    <p1 style={{ paddingLeft: '25px' }}>$ &nbsp;{window.discuont} </p1>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-sm-3' style={{ marginLeft: '0px' }}>
              <div style={{ border: '2px solid #c9c8c3', width: '220px', }}>
                <div className='row'>
                  <div className='col-sm-6' style={{ padding: '10px' }}>
                    <p1 style={{ paddingLeft: '25px' }}>DELIVERY</p1>
                  </div>
                  <div className='col-sm-6' style={{ padding: '10px' }}>
                    <p1 style={{ paddingLeft: '30px' }}>$ &nbsp;0.00 </p1>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-sm-3' style={{ marginLeft: '0px' }}>
              <div style={{ border: '2px solid #c9c8c3', width: '220px', }}>
                <div className='row'>
                  <div className='col-sm-6' style={{ padding: '10px' }}>
                    <p1 style={{ paddingLeft: '20px' }}>SUBTOTAL</p1>
                  </div>
                  <div className='col-sm-6' style={{ padding: '10px' }}>
                    <p1 style={{ paddingLeft: '20px' }}>${window.total} </p1>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-sm-3' style={{ marginLeft: '0px' }}>
              <div style={{ border: '2px solid #c9c8c3', width: '220px', }}>
                <div className='row'>
                  <div className='col-sm-6' style={{ padding: '10px' }}>
                    <p1 style={{ paddingLeft: '25px' }}>TOTAL</p1>
                  </div>
                  <div className='col-sm-6' style={{ padding: '10px' }}>
                    <p1>$ &nbsp;{window.total - window.discuont} </p1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button style={{ marginLeft: '85.5%', marginBottom: '20px', marginTop: '30px' }} type="submit" onClick={() => this.postDataCart()} className='btn btn-outline-success'>Check out</button>
        </Fragment>
      );
    }
  }
}
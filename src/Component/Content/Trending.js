import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Card from '../Content/Card';
import axios from 'axios';
import { fixControlledValue } from 'antd/lib/input/Input';
export class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading:false,
      _drink:[],
      _user:[],
      _searching:[],
      value: null,
      data:[],
    }
  }
  getDataDrink = () => {
    axios({
        method: 'GET',
        url: 'http://localhost:8080/api/products',
        data: null
    }).then(res => {
        this.setState({ 
          loading:true,
          _drink: res.data,
        });

    }).catch(err => { });
    
}


  componentDidMount(){
    this.getDataDrink();
  }


  render() {
    const {loading,_drink} = this.state;
    if(!loading){
       return(
          <h1>Loading...</h1>
       )
    }
    
    return (
      <div>
      <div className="col-lg-12 form-group">
      <h2 className="h5 text-uppercase mb-4">MENU</h2>
      </div>
      <section className="py-5">
              <div className="row">
                        { 
                            this.state._drink.map(item=>{
                              return (<Card name={item.name} detail_image={item.detail_image} price={item.price} id={item.id} star={item.star} sale={item.sale}></Card>);
                            })
                             
                           }
                    
                     </div>

            </section>
            </div>
    )
  }
}
 
export default Product;

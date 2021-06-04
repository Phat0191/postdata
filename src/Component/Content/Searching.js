import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';

export class Searching extends Component {
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
    this.filterData= this.filterData.bind(this);
  }
   filterData(e) {
    console.log(this.state._drink);
    this.setState({value: e.target.value.trim()});
    console.log(this.state.value);
    if (this.state.value === null)
      { 
        this.setState({
        data: this.state._drink
      }, ()=> console.log(this.state.data));}
    else {
      let filtered = this.state._drink.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(this.state.value)));
      console.log(filtered);
      this.setState({
        data: filtered.data
      });
      this.setState({
        data: filtered
      }, ()=> console.log(this.state.data))
      
    }
    ;
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
      <h2 className="h5 text-uppercase mb-4">SEARCHING IN MENU</h2>
        <input className="form-control form-control-lg" id="addressalt" type="text" placeholder="Apartment, Suite, Unit, etc (optional)" onChange={this.filterData}/>
      </div>
      <section className="py-5">
              <div className="row">
                        { 
                          
                            this.state.data.map(item=>{
                              return (<Card name={item.name} detail_image={item.detail_image} price={item.price}></Card>);
                            })
                             
                           }
                    
                     </div>
            </section>
            </div>
    )
  }
}
 
export default Searching;

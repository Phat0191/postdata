import React, {Fragment, Component} from 'react';

const Content_service=()=>{
    return(
        <Fragment>
            <div className="row row_services">
                <div className="col-md-4">
                    <div className="services_content" >
                        <i style={{color:'#9D4633', paddingTop:'50px'}} className="fa fa-truck fa-3x" aria-hidden="true"></i>
                        <h3 style={{paddingBottom:'20px', paddingTop:'15px'}}>FASTEST DELIVERY</h3>
                        <p>Even the all-powerful Pointing has no control</p>
                        <p>about the blind texts it is an almost</p>
                        <p style={{paddingBottom:'45px'}}> orthographic.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="services_content">
                        <i style={{color:'#9D4633', paddingTop:'50px'}} className="fa fa-id-card-o fa-3x" aria-hidden="true"></i>
                        <h3 style={{paddingBottom:'20px', paddingTop:'15px'}}>EASY TO ORDER</h3>
                        <p>Even the all-powerful Pointing has no control</p>
                        <p>about the blind texts it is an almost</p>
                        <p style={{paddingBottom:'45px'}}>orthographic.</p> 
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="services_content" >
                        <i style={{color:'#9D4633',paddingTop:'50px'}} className="fa fa-coffee fa-3x" aria-hidden="true"></i>
                        <h3 style={{paddingBottom:'20px', paddingTop:'15px'}}>QUALITY COFFEE</h3>
                        <p>Even the all-powerful Pointing has no control</p>
                        <p>about the blind texts it is an almost</p>
                        <p style={{paddingBottom:'45px'}}>orthographic.</p> 
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Content_service;

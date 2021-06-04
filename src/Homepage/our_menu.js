import React, { Fragment, Component } from "react";

const Our_menu = () => {
  return (
    <Fragment>
      <div className="row_menu">
    <div className="container">
      <div className="row">
          <div className="col-md-6">
            <p className="menu_font_mt">Discover</p>
            <p className="menu_font_our">OUR MENU</p>
            <p style={{fontSize: '15px'}}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.Separated they
              live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <button className="menu_button menu_button1">View Full Menu</button>
          </div>
          <div className="col-md-3">
            <img src="https://images.unsplash.com/photo-1523942839745-7848c839b661?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9jY2F8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" style={{width:'250px',height:'200px', marginTop:'60px'}}></img>
            <img src="img/img_cafe.jpg" style={{width:'240px',height:'240px',marginTop:'60px',marginLeft:'30px'}}></img>
          </div>
          <div className="col-md-3">
            <img src="img/img_cafe5.jpg" style={{width:'240px',height:'300px' ,marginTop:'100px', marginLeft:'60px'}}></img>
           </div>
          </div>
        </div> 
      </div>
    
    </Fragment>
  );
};

export default Our_menu;

import React,{Fragment} from 'react';

const Caffee_sell=()=>{
    return(
        <Fragment>
            <div className="caffee_sell">
                <div className="container">
                    <p className="caffee_sell_mt">Discover</p>
                    <p style={{fontSize: '40px'}}>BEST COFFEE SELLERS</p>
                    <p style={{marginBottom: '0px',fontSize: '15px'}}>Far far away, behind the word mountains, far from the countries Vokalia and</p>
                    <p>Consonantia, there live the blind texts.</p>
                    <div className="row" style={{paddingTop:'50px'}}>
                        <div className="col-md-3">
                            <img src="img/sell_cafe3.jpg" style={{width:'255px',height:'290px'}}></img>
                            <p className="sell_cafe_name">MILK COFFEE</p>
                            <p style={{fontSize: '15px', marginBottom:'0px'}}>A small river named Duden flows</p>
                            <p style={{fontSize: '15px', marginBottom:'15px'}}>by their place and supplies</p>
                            <p style={{fontSize: '15px', marginBottom:'15px'}}>$6.90</p>
                            <button className="sell_button sell_button1">See More Products...</button>
                        </div>                  
                        <div className="col-md-3">
                            <img src="img/sell_cafe1.jpg" style={{width:'255px',height:'290px'}}></img>
                            <p className="sell_cafe_name">MILK COFFEE</p>
                            <p style={{fontSize: '15px', marginBottom:'0px'}}>A small river named Duden flows</p>
                            <p style={{fontSize: '15px', marginBottom:'15px'}}>by their place and supplies</p>
                            <p style={{fontSize: '15px', marginBottom:'15px'}}>$5.90</p>
                            <button className="sell_button sell_button1">See More Products...</button>
                        </div>
                        <div className="col-md-3">
                            <img src="img/sell_cafe2.jpg" style={{width:'255px',height:'290px'}}></img>
                            <p className="sell_cafe_name">MILK COFFEE</p>
                            <p style={{fontSize: '15px', marginBottom:'0px'}}>A small river named Duden flows</p>
                            <p style={{fontSize: '15px', marginBottom:'15px'}}>by their place and supplies</p>
                            <p style={{fontSize: '15px', marginBottom:'15px'}}>$8.90</p>
                            <button className="sell_button sell_button1">See More Products...</button>
                        </div>
                        <div className="col-md-3">
                            <img src="img/sell_cafe4.jpg" style={{width:'255px',height:'290px'}}></img>
                            <p className="sell_cafe_name">MILK COFFEE</p>
                            <p style={{fontSize: '15px', marginBottom:'0px'}}>A small river named Duden flows</p>
                            <p style={{fontSize: '15px', marginBottom:'15px'}}>by their place and supplies</p>
                            <p style={{fontSize: '15px', marginBottom:'15px'}}>$7.90</p>
                            <button className="sell_button sell_button1">See More Products...</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}


export default Caffee_sell;
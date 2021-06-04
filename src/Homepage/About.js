import React,{Fragment} from 'react';

const About =()=>{
    return (
        <Fragment>
            <div className='row row_about'>
                <div className='col-md-6' style={{paddingLeft:'0px'}}>
                    <img src="./img/img_about.jpg" ></img>
                </div>
                <div className='col-md-6'>
                  <div className='about_background'>
                      <p className='about_font_mt' >Discover</p>
                      <p className='about_font_mt1'>OUR STORY</p>
                      <div className='about_content'>
                        <p style={{marginBottom:'0px'}}>On her way she met a copy. The copy warned the Little Blind Text,</p>
                        <p style={{marginBottom:'0px'}}>that where it came from it would have been rewritten a thousand times</p>
                        <p style={{marginBottom:'0px'}}>and everything that was left from its origin would be the word "and"</p> 
                        <p style={{marginBottom:'0px'}}>and the Little Blind Text should turn around and return to its own, safe country.</p>    
                        <p style={{marginBottom:'0px'}}>But nothing the copy said could convince her and so it didn’t take long until</p>
                        <p style={{marginBottom:'0px'}}>a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole </p>
                        <p >and dragged her into their agency, where they abused her for their.</p>
                      </div>
                  </div>
                </div>
            </div>
        </Fragment>
    );
}

export default About;
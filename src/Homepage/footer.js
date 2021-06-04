import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  About,
  About_styles,
  Contact,
  Contact_styles,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <About>
            <Heading>About Us</Heading>
            <About_styles>
              {" "}
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Praesentium dolores alias ipsa vel hic tempore exercitationem
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Praesentium dolores alias ipsa vel hic tempore exercitationem
                Andsfgsfd
              </p>
            </About_styles>
          </About>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Drinking</FooterLink>
            <FooterLink href="#">Deliver</FooterLink>
            <FooterLink href="#">Quality Drink</FooterLink>
            <FooterLink href="#">Mixed</FooterLink>
          </Column>

          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <span style={{ hyphens: "auto" }}>
                <i class="fa fa-facebook" style={{ marginRight: "10px" }}></i>
                Facebook
              </span>
            </FooterLink>
            <FooterLink href="#">
              <span>
                <i class="fa fa-instagram" style={{ marginRight: "10px" }}></i>
                Instagram
              </span>
            </FooterLink>
            <FooterLink href="#">
              <span>
                <i class="fa fa-twitter" style={{ marginRight: "10px" }}></i>
                Twitter
              </span>
            </FooterLink>
            <FooterLink href="#">
              <span>
                <i class="fa fa-youtube" style={{ marginRight: "10px" }}></i>
                Youtube
              </span>
            </FooterLink>
          </Column>

          <Contact>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">
              <span style={{ hyphens: "auto" }}>
                <i class="fa fa-map-marker" style={{ marginRight: "10px" }}></i>
                269 Núi Thành, Hoà Cường Bắc, Hải Châu, Đà Nẵng 550000
              </span>
            </FooterLink>
            <FooterLink href="#">
              <span style={{ hyphens: "auto" }}>
                <i class="fa fa-phone" style={{ marginRight: "10px" }}></i>
                +84 123 456 789
              </span>
            </FooterLink>
            <input type="email" class="form__field" placeholder="Your Email" />

            <button
              type="button"
              class="btn btn-info"
              role="button"
              style={{marginTop: "15px" }}
            >
              Sign Up
            </button>
          </Contact>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;










// import React ,{Fragment} from 'react';
// import './footer.css';
// import { Button } from './Button';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// function Footer() {
//   return (
//       <Fragment>
//           <Router>
//     <div className='footer-container'>
//       <section className='footer-subscription'>
//         <p className='footer-subscription-heading'>
//           Join the Adventure newsletter to receive our best vacation deals
//         </p>
//         <p className='footer-subscription-text'>
//           You can unsubscribe at any time.
//         </p>
//         <div className='input-areas'>
//           <form>
//             <input
//               className='footer-input'
//               name='email'
//               type='email'
//               placeholder='Your Email'
//             />
//             <Button buttonStyle='btn--outline'>Subscribe</Button>
//           </form>
//         </div> 
//       </section>
//       <div class='footer-links'>
//         <div className='footer-link-wrapper'>
//           <div class='footer-link-items'>
//             <h2>About Us</h2>
//             <Link to='/sign-up'>How it works</Link>
//             <Link to='/'>Testimonials</Link>
//             <Link to='/'>Careers</Link>
//             <Link to='/'>Investors</Link>
//             <Link to='/'>Terms of Service</Link>
//           </div>
//           <div class='footer-link-items'>
//             <h2>Contact Us</h2>
//             <Link to='/'>Contact</Link>
//             <Link to='/'>Support</Link>
//             <Link to='/'>Destinations</Link>
//             <Link to='/'>Sponsorships</Link>
//           </div>
//         </div>
//         <div className='footer-link-wrapper'>
//           <div class='footer-link-items'>
//             <h2>Videos</h2>
//             <Link to='/'>Submit Video</Link>
//             <Link to='/'>Ambassadors</Link>
//             <Link to='/'>Agency</Link>
//             <Link to='/'>Influencer</Link>
//           </div>
//           <div class='footer-link-items'>
//             <h2>Social Media</h2>
//             <Link to='/'>Instagram</Link>
//             <Link to='/'>Facebook</Link>
//             <Link to='/'>Youtube</Link>
//             <Link to='/'>Twitter</Link>
//           </div>
//         </div>
//       </div>
//       <section class='social-media'>
//         <div class='social-media-wrap'>
//           <div class='footer-logo'>
//             <Link to='/' className='social-logo'>
//              COFFEE
//               <i class='fab fa-typo3' />
//             </Link>
//           </div>
//           <small class='website-rights'></small>
//           <div class='social-icons'>
//             <Link
//               class='social-icon-link facebook'to='/'target='_blank'aria-label='Facebook'><i class='fab fa-facebook-f' />
//             </Link>
//             <Link
//               class='social-icon-link instagram'to='/'target='_blank'aria-label='Instagram'><i class='fab fa-instagram' />
//             </Link>
//             <Link
//               class='social-icon-link youtube'  to='/'target='_blank' aria-label='Youtube'><i class='fab fa-youtube' />
//             </Link>
//             <Link
//               class='social-icon-link twitter'to='/'target='_blank'aria-label='Twitter'><i class='fab fa-twitter' />
//             </Link>
//             <Link
//               class='social-icon-link twitter' to='/' target='_blank' aria-label='LinkedIn'>
//               <i class='fab fa-linkedin' />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//     </Router>
//     </Fragment>
//   );
// }

// export default Footer;

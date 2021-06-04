import React, {Fragment, useState, useEffect } from 'react';
import { Button } from './Button';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton(); 
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <Fragment>
    <Router>
      <nav className='navbar fixed-top'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            C O F F E E <br/> 
            &emsp;BLEND
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <input type="search" className="form-control" placeholder="Type query"
            aria-label="Search" />
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div className="search">
           
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/menu'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                MENU
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SERVICES
              </Link>
            </li> 
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link>
            </li>
          </ul>

          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} 
               
        </div>
      </nav>
      </Router>
    </Fragment>
  );
}

export default Navbar;

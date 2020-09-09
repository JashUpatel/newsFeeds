import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

function Header(){
    return(
        <div className="container-fluid" style={{backgroundColor:"#ee6e73"}}>
  
        <nav className="navbar row">
          <div className="col-sm-12 col-lg-6 text-center justify-content-center">
          <NavLink to="/" style={{border:"none",borderBottom:"none !important",textDecoration:"none !important"}}>
          <a className="navbar-brand headerColor align-middle" href="#"><h3><i class="fa fa-rss-square" aria-hidden="true"></i> NewsFeeds</h3></a>
          </NavLink>
          </div>
  
          <div className="col-sm-12 col-lg-6">
            <ul class="nav justify-content-center text-center">
            <li class="nav-item">
             <NavLink activeClassName="active" to="/tech">
              <a class="nav-link headerColor" href="#"><h5 className="navText">TechCrunch</h5></a>
              </NavLink>
            </li>
            <li class="nav-item">
            <NavLink to="/apple" activeClassName="active">
            
              <a class="nav-link headerColor" href="/apple"><h5 className="navText">Apple</h5></a>
          </NavLink>
            </li>
            {/* <li class="nav-item">
            <NavLink to="/bitcoin" activeClassName="active">
            
              <a class="nav-link headerColor " href="#"><h5 className="navText">Bitcoin</h5></a>
            </NavLink>
            </li> */}
            <li class="nav-item">
            <NavLink to="/wallstreet" activeClassName="active">
        
              <a class="nav-link headerColor" href="#"><h5 className="navText">Global</h5></a>
            </NavLink>
            </li>
          </ul>
          </div>
  
  
  
        </nav>
  
      </div>);
}

export default Header;
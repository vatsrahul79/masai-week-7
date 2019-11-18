import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import Card from './Card.js';

function Footer() {
    return(
    <div className="jumbotron jumbotron-fluid mt-5">
    
    <div className="row">
    <div className="container col-md-2">
    <h5 className="display-6">What's new</h5>
    <p><small>Surface Go</small></p>
    <p><small>Surface Pro</small></p>
    <p><small>Windows 10 apps</small></p>
    <p><small>Office apps</small></p>
    </div>


    <div className="container col-md-2">
    <h5 className="display-6">Microsoft Store</h5>
    <p><small>Profile</small></p>
    <p><small>Download Center</small></p>
    <p><small>Microsoft Store Support</small></p>
    <p><small>Returns</small></p>
    <p><small>Order Tracking</small></p>
    </div>
   
    
    <div className="container col-md-2">
    <h5 className="display-6">Education</h5>
    <p><small>Microsoft in education</small></p>
    <p><small>Office for students</small></p>
    <p><small>Office 365 for schools</small></p>
    <p><small>Microsoft Azure in education</small></p>
    </div>
   
    <div className="container col-md-2"> 
   
    <h5 className="display-6">Enterprise</h5>
    <p><small>Azure</small></p>
    <p><small>AppSource</small></p>
    <p><small>Automotive</small></p>
    <p><small>Government</small></p>
    <p><small>Healthcare</small></p>
    <p><small>Manufacturing</small></p>
    <p><small>Financial services</small></p>
    <p><small>Retail</small></p>
    </div>
    <div className="container col-md-2">
    <h5 className="display-6">Developer</h5>
    <p><small>Microsoft Visual Studio</small></p>
    <p><small>Developer Network</small></p>
    <p><small>TechNet</small></p>
    <p><small>Channel 9</small></p>
    <p><small>Office Dev Center</small></p>
    </div>
    <div className="container col-md-2">
    <h5 className="display-6">Company</h5>
    <p><small>Careers</small></p>
    <p><small>About Microsoft</small></p>
    <p><small>Company news</small></p>
    <p><small>Privacy at Microsoft</small></p>
    <p><small>Investors</small></p>
    <p><small>Security</small></p>
    </div>
   </div> 
   </div> 


    )   
}
export default Footer;
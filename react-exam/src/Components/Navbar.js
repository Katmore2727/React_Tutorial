import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


export default function Navbar() {

    return (
      <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand text-dark" href="#">Projects</a>
        </div>
        <ul className="nav navbar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/image carousel">ImageCarousel</Link></li>
          <li><Link to="/accordion">Accordion</Link></li>
          <li><Link to="/quote">Quote</Link></li>
          <li><Link to="/search">Search</Link></li>
          {/* <li><Link to="/video">Video</Link></li> */}
          <li><Link to="/bmi">Bmi</Link></li>

        </ul>
        {/* <form className="navbar-form navbar-left" action="/action_page.php">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" name="search" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
          
        
        </form> */}
       
      </div>
    </nav>
    );
}

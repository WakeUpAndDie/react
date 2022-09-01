import React from "react";
import { Link } from "react-router-dom";
import '../assets/nav.css'

export default function Nav (){
return(
    <>
    <nav id="mainav"   className="fl_right">
        <ul   className="clear">
          <li   className="active"><Link to="/">Home</Link></li>
          <li><Link className="drop" to="/pages">Pages</Link>
            <ul>
              <li><Link to="pages/gallery">Gallery</Link></li>
              <li><Link to="pages/full-width">Full Width</Link></li>
              <li><Link to="pages/sidebar-left">Sidebar Left</Link></li>
              <li><Link to="pages/sidebar-right">Sidebar Right</Link></li>
              <li><Link to="pages/basic-grid">Basic Grid</Link></li>
            </ul>
          </li>
          <li><Link  className="drop" to="/dropdown">Dropdown</Link>
            <ul>
              <li><Link to="#">Level 2</Link></li>
              <li><Link  className="drop" to="#">Level 2 + Drop</Link>
                <ul>
                  <li><Link to="#">Level 3</Link></li>
                  <li><Link to="#">Level 3</Link></li>
                  <li><Link to="#">Level 3</Link></li>
                </ul>
              </li>
              <li><Link to="#">Level 2</Link></li>
            </ul>
          </li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </nav>
    </>
);
}
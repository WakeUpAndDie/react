import React from "react";
import "../assets/footer.css"
import { Link } from "react-router-dom";

const NAV_LINKS = [

    { name: 'Contact', to: '/contact' },

    { name: 'Home', to: '/' },
  
    { name: 'About Us', to: '/about' },
  
    { name: "FAQ", to: '/faq' },
  
    { name: 'Support', to: '/support' },
  
  ]

function Footer (){
    return(
        <div>
        <div className="wrapper row4">
  <footer id="footer"  className="hoc clear"> 
     
    <div  className="one_third first">
      <h6  className="heading">Potenti proin congue</h6>
      <p  className="nospace btmspace-30">Ornare erat a ultricies odio vestibulum nec curabitur at lacinia sapien.</p>
      <form method="post" action="#">
        <fieldset>
          <legend>Newsletter:</legend>
          <input  className="btmspace-15" type="text" value="" placeholder="Name"/>
          <input  className="btmspace-15" type="text" value="" placeholder="Email"/>
          <button type="submit" value="submit">Submit</button>
        </fieldset>
      </form>
    </div>
    <div  className="one_third">
      <h6  className="heading">Vehicula consectetur erat</h6>
      <ul  className="nospace linklist">
        <li>
          <article>
            <h2  className="nospace font-x1"><a href="#">Sed dictum quisque non</a></h2>
            <time  className="font-xs block btmspace-10" datetime="2045-04-06">Friday, 6<sup>th</sup> April 2045</time>
            <p  className="nospace">Dolor et posuere pretium nulla fermentum eros tincidunt sodales porttitor [&hellip;]</p>
          </article>
        </li>
        <li><a href="#">Sollicitudin ante in dignissim</a></li>
        <li><a href="#">Leo dui at molestie sem</a></li>
      </ul>
    </div>
    <div  className="one_third">
      <h6  className="heading">Ullamcorper commodo</h6>
      <ul  className="nospace btmspace-30 linklist contact">
        <li><i  className="fa fa-map-marker"></i>
          <address>
          Street Name &amp; Number, Town, Postcode/Zip
          </address>
        </li>
        <li><i  className="fa fa-phone"></i> +00 (123) 456 7890</li>
        <li><i  className="fa fa-envelope-o"></i> info@domain.com</li>
      </ul>
      <ul  className="faico clear">
        <li><a  className="faicon-facebook" href="#"><i  className="fa fa-facebook"></i></a></li>
        <li><a  className="faicon-twitter" href="#"><i  className="fa fa-twitter"></i></a></li>
        <li><a  className="faicon-dribble" href="#"><i  className="fa fa-dribbble"></i></a></li>
        <li><a  className="faicon-linkedin" href="#"><i  className="fa fa-linkedin"></i></a></li>
        <li><a  className="faicon-google-plus" href="#"><i  className="fa fa-google-plus"></i></a></li>
        <li><a  className="faicon-vk" href="#"><i  className="fa fa-vk"></i></a></li>
      </ul>
    </div>
     
  </footer>
</div>
 
 
 
<div  className="wrapper row5">
  <div id="copyright"  className="hoc clear"> 
     
    <p  className="fl_left">Copyright &copy; 2017 - All Rights Reserved - <a href="#">Domain Name</a></p>
    <p  className="fl_right">Template by <a target="_blank" href="http://www.os-templates.com/" title="Free Website Templates">OS Templates</a></p>
     
  </div>
</div>
 
 
 
<a id="backtotop" href="#top"><i  className="fa fa-chevron-up"></i></a>
        </div>
    );
}

export default Footer;
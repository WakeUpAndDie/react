import React from "react";
import Images from "./Images";

export default function SectionTwo () {
return(
    <>
    <div  className="wrapper bgded overlay light mybgtwo">
  <section  className="hoc container clear"> 
     
    <ul  className="nospace group">
      <li  className="one_quarter first">
        <h3  className="heading">Massa donec</h3>
        <p>Erat felis tempus at placerat eget elementum sit amet justo nunc luctus mattis iaculis vestibulum convallis.</p>
        <footer><a  className="btn" href="#">Urna pharetra</a></footer>
      </li>
      <li  className="one_quarter">
        <figure><a href="#"><Images className="btmspace-30" src={require("../assets/img/demo/222x100.png")}/></a>
          <figcaption>
            <h6  className="heading font-x1">Sit amet consectetur</h6>
            <footer><a href="#">View Details</a></footer>
          </figcaption>
        </figure>
      </li>
      <li  className="one_quarter">
        <figure><a href="#"><Images className="btmspace-30" src={require("../assets/img/demo/222x100.png")}/></a>
          <figcaption>
            <h6  className="heading font-x1">Enim luctus integer</h6>
            <footer><a href="#">View Details</a></footer>
          </figcaption>
        </figure>
      </li>
      <li  className="one_quarter">
        <figure><a href="#"><Images className="btmspace-30" src={require("../assets/img/demo/222x100.png")}/></a>
          <figcaption>
            <h6  className="heading font-x1">Tristique odio in</h6>
            <footer><a href="#">View Details</a></footer>
          </figcaption>
        </figure>
      </li>
    </ul>
     
  </section>
</div>
    </>
    
    );
    
}
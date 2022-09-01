import React from "react";
import Images from "./Images";

export default function SectionThree () {
return(

    <>
    <div   className="wrapper row3">
  <section   className="hoc container clear"> 
     
    <div   className="sectiontitle">
      <h6   className="heading">Ante venenatis purus</h6>
      <p>Bibendum ante neque ultrices eros ac luctus sapien</p>
    </div>
    <div   className="group">
      <figure   className="one_quarter first"><a href="#"><Images className="btmspace-30" src={require("../assets/img/demo/320x220.png")}/></a>
        <figcaption>
          <h6   className="heading font-x1">C. Name</h6>
          <em   className="font-xs">Duis euismod egestas risus</em>
          <footer>
            <ul   className="faico clear">
              <li><a   className="faicon-twitter" href="#"><i   className="fa fa-twitter"></i></a></li>
              <li><a   className="faicon-linkedin" href="#"><i   className="fa fa-linkedin"></i></a></li>
              <li><a   className="faicon-google-plus" href="#"><i   className="fa fa-google-plus"></i></a></li>
              <li><a   className="faicon-vk" href="#"><i   className="fa fa-vk"></i></a></li>
            </ul>
          </footer>
        </figcaption>
      </figure>
      <figure   className="one_quarter"><a href="#"><Images className="btmspace-30" src={require("../assets/img/demo/320x220.png")}/></a>
        <figcaption>
          <h6   className="heading font-x1">D. Name</h6>
          <em   className="font-xs">Vel lobortis nulla pulvinar</em>
          <footer>
            <ul   className="faico clear">
              <li><a   className="faicon-twitter" href="#"><i   className="fa fa-twitter"></i></a></li>
              <li><a   className="faicon-linkedin" href="#"><i   className="fa fa-linkedin"></i></a></li>
              <li><a   className="faicon-google-plus" href="#"><i   className="fa fa-google-plus"></i></a></li>
              <li><a  className="faicon-vk" href="#"><i  className="fa fa-vk"></i></a></li>
            </ul>
          </footer>
        </figcaption>
      </figure>
      <figure  className="one_quarter"><a href="#"><Images className="btmspace-30" src={require("../assets/img/demo/320x220.png")}/></a>
        <figcaption>
          <h6  className="heading font-x1">E. Name</h6>
          <em  className="font-xs">Et aliquam laoreet sollicitudin</em>
          <footer>
            <ul  className="faico clear">
              <li><a  className="faicon-twitter" href="#"><i  className="fa fa-twitter"></i></a></li>
              <li><a  className="faicon-linkedin" href="#"><i  className="fa fa-linkedin"></i></a></li>
              <li><a  className="faicon-google-plus" href="#"><i  className="fa fa-google-plus"></i></a></li>
              <li><a  className="faicon-vk" href="#"><i  className="fa fa-vk"></i></a></li>
            </ul>
          </footer>
        </figcaption>
      </figure>
      <figure  className="one_quarter"><a href="#"><Images className="btmspace-30" src={require("../assets/img/demo/320x220.png")}/></a>
        <figcaption>
          <h6  className="heading font-x1">F. Name</h6>
          <em  className="font-xs">Dolor sit amet luctus velit</em>
          <footer>
            <ul  className="faico clear">
              <li><a  className="faicon-twitter" href="#"><i  className="fa fa-twitter"></i></a></li>
              <li><a  className="faicon-linkedin" href="#"><i  className="fa fa-linkedin"></i></a></li>
              <li><a  className="faicon-google-plus" href="#"><i  className="fa fa-google-plus"></i></a></li>
              <li><a  className="faicon-vk" href="#"><i  className="fa fa-vk"></i></a></li>
            </ul>
          </footer>
        </figcaption>
      </figure>
    </div>
     
    <div  className="clear"></div>
  </section>
</div>
    </>
    
    );
    
}
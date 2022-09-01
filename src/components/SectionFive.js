import React from "react";
import Images from "./Images";
export default function SectionFive () {
return(

    <>
    <div className="wrapper row3">
  <section className="hoc container clear"> 
   
    <div className="sectiontitle">
      <h6 className="heading">Amet elementum neque</h6>
      <p>Turpis egestas praesent a condimentum leo sit</p>
    </div>
    <div className="group latest">
      <article className="one_third first">
        <figure><a href="#"><Images src={require("../assets/img/demo/100x100.png")}/></a>
          
        </figure>
        <div className="txtwrap">
          <h4 className="heading">Mauris blandit nibh non</h4>
          <ul className="nospace meta">
            <li><i className="fa fa-user"></i> <a href="#">Admin</a></li>
            <li><i className="fa fa-tag"></i> <a href="#">Category Name</a></li>
          </ul>
          <p>Sollicitudin condimentum lacus morbi vitae sapien ornare rhoncus purus vel fermentum massa nunc vitae metus risus habitant [&hellip;]</p>
          <footer><a href="#">Read More &raquo;</a></footer>
        </div>
      </article>
      <article className="one_third">
        <figure><a href="#"><Images src={require("../assets/img/demo/100x100.png")}/></a>
          
        </figure>
        <div className="txtwrap">
          <h4 className="heading">Congue cras diam est</h4>
          <ul className="nospace meta">
            <li><i className="fa fa-user"></i> <a href="#">Admin</a></li>
            <li><i className="fa fa-tag"></i> <a href="#">Category Name</a></li>
          </ul>
          <p>Morbi tristique senectus et netus et malesuada fames ac turpis egestas nunc eget nibh et ante finibus lacinia integer [&hellip;]</p>
          <footer><a href="#">Read More &raquo;</a></footer>
        </div>
      </article>
      <article className="one_third">
        <figure><a href="#"><Images src={require("../assets/img/demo/100x100.png")}/></a>
          
        </figure>
        <div className="txtwrap">
          <h4 className="heading">Volutpat in eros sit amet</h4>
          <ul className="nospace meta">
            <li><i className="fa fa-user"></i> <a href="#">Admin</a></li>
            <li><i className="fa fa-tag"></i> <a href="#">Category Name</a></li>
          </ul>
          <p>Neque sem vulputate id lacus vitae venenatis dignissim enim quisque non justo vitae eros sodales varius suspendisse [&hellip;]</p>
          <footer><a href="#">Read More &raquo;</a></footer>
        </div>
      </article>
    </div>
    <div className="clear"></div>
  </section>
</div>
    </>
    
    );
    
}
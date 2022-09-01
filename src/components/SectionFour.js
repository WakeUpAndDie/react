import React from "react";
import Images from "./Images";

export default function SectionFour () {
return(

    <>
    <div className="wrapper bgded overlay coloured mybgfour">
  <div className="hoc container testimonials clear"> 

    <div className="sectiontitle">
      <h6 className="heading">Sollicitudin quis leo</h6>
      <p>Laoreet id etiam erat ex congue eu tincidunt a</p>
    </div>
    <article className="one_half first"><Images src={require("../assets/img/demo/100x100.png")}/>
      <blockquote>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae phasellus iaculis nisl sed ex lobortis bibendum quis eget nunc vivamus viverra tellus.</blockquote>
      <h6 className="heading">G. Name</h6>
      <em>Senectus et netus et</em></article>
    <article className="one_half"><Images src={require("../assets/img/demo/100x100.png")}/>
      <blockquote>Ac nisl faucibus nec viverra eros varius donec interdum erat eu erat dictum ut rhoncus mauris in imperdiet felis turpis id accumsan nisl tempor vitae habitant morbi tristique.</blockquote>
      <h6 className="heading">H. Name</h6>
      <em>Malesuada fames ac</em></article>
   
  </div>
</div>
    </>
    
    );
    
}
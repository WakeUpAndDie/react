import React from "react";
import '../assets/header.css';
import Nav from './Nav';

function Header (){
    return(
        <>
    <div  className="bgded"> 
   
  <div  className="wrapper row1">
    <header id="header"  className="hoc clear"> 
       
      <div id="logo"   classNameName="fl_left">
        <h1><a href="index.html">Gogopo</a></h1>
      </div>
      <Nav/>
      
    </header>
  </div>
 
  <div  className="wrapper">
    <article id="pageintro"  className="hoc clear"> 
      
      <div  className="transbox">
        <h3  className="heading">Congue ut tempor magna</h3>
        <p>In sem convallis vitae ullamcorper ex sagittis suspendisse suscipit enim ut blandit auctor felis orci ornare eros consectetur sollicitudin lectus mi in magna.</p>
      </div>
      <footer><a  className="btn" href="#">Donec molestie blandit</a></footer>
      
    </article>
  </div>
   
</div>
        </>
    );
}

export default Header;
import React from "react";
import Home from "./route/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Contact from "./route/Contact";
import FAQ from "./route/FAQ";
import './assets/styles/layout.css';
import Dropdown from "./route/Dropdown";
import Pages from "./route/Pages";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/pages" element = {<Pages/>} />
            <Route path="/" element = {<Home/>} />
            <Route path="/contact" element = {<Contact/>} />
            <Route path="/dropdown" element = {<Dropdown/>} />
            <Route path="/FAQ" element = {<FAQ/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );

}

export default App;

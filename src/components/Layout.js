import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({children}){
    return(
        <>
        <Header/>
       <div>{children}</div>
        <Footer />
        </>
    );
}
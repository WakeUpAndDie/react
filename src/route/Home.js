import React from "react";
import Layout from "../components/Layout";
import "../assets/home.css"
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import SectionFive from "../components/SectionFive";
import SectionSix from "../components/SectionSix";

function Home (){
    return(
        <>
        <Layout>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <SectionSix/>
        </Layout>
        </>
    );
}

export default Home;
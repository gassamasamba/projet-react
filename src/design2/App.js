import React from "react";
import Content from "../design1/Content";
import FooterBar from "../design1/FooterBar";
import HeaderBar from "../design1/HeaderBar";
import Card from "./Card";

export default function App() {
    return(
        <>
        <HeaderBar ></HeaderBar>
    <Content>
        <Card/>
        <Card/>
        <Card/>

       
    </Content>
    <FooterBar></FooterBar>
        
        </>


    )
}
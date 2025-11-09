"use client";
import React from 'react';
import { Typography } from "antd";

const { Title }= Typography
const About = () => {
    return (
        <div className="mainSlide">
            <div className="aboutContainer">
                <img src="ME.jpg" className="aboutPic"/>
                <div className="aboutContent">
                    <Title color="rgb(255,255,255)">À propos de moi</Title>
                    <p>Hola ! Je m'appelle Yarelly, je viens du pays des llamas, du ceviche et du Mashtou Pishtou. <br></br><br></br>
                        Immergée dans le monde de l'hôtellerie de luxe pendant des années, je me suis rendue compte que le rythme de l'hôtellerie ne me convenais plus. <br></br><br></br>
                        Les week-ends et jours fériés loin de la famille, ça finit par peser !<br></br><br></br>
                        Alors… comment suis-je passée au code ? Glissez pour découvrir l'histoire !
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
"use client";

import { React, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard, Pagination, Navigation } from 'swiper/modules';
import { Typography } from "antd";
import Slide from "./Slide";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const { Title }= Typography



const ProjectsCarousel = () => {
    const [slides, setSlides] = useState()

    useEffect(() => {
        setSlides([
            {
                image: "cvonline2.gif",
                title: "CV Online (HTML & CSS)",
                description : "Site web avec un design responsive et un double carrousel vertical pour une navigation originale."
            },
            {
                image: "stanley.gif",
                title: "JobBoard - Stanley Jobs (Vue.js, Node/Express, MariaDB)",
                description : "Développement d'une plateforme de job board : gestion des offres, candidature via un formulaire dynamique, espace administrateur avec authentification et opérations CRUD."
            },
            {
                image: "portfolio.gif",
                title: "Portfolio (Next.js, Ant Design)",
                description : "Portfolio développé afin de mettre en avant mes projets et compétences. Design ergonomique, clair et évolutif, avec téléchargement de CV intégré."
            },
            {
                image: "game.gif",
                title: "Jeu 2D : Pac-Man",
                description : "En cours. Revenez le 9 décembre pour voir le résultat !"
            }
        ])
    }, [])
    
    if (!slides)
        return null;

    return (
        <div className="mainSlide">
            <div className="projectsContainer">
                <div className="titleContent">
                        <Title>Mes Projets</Title>
                </div>
                <Swiper
                    navigation={true} modules={[Pagination, Navigation]} className="mySwiper" 
                    slidesPerView={3}
                    spaceBetween={0}
                    // keyboard={{
                    //     enabled: true,
                    // }}
                    // mousewheel={true}
                    pagination={{
                    clickable: true,
                    }}
                    // modules={[Keyboard]}
                >
                    {slides.map((slide, index) => (

                        <SwiperSlide>
                        <Slide key={index} {...slide}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default ProjectsCarousel
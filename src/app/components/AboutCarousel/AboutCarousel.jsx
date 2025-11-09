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



const AboutCarousel = () => {
    const [slides, setSlides] = useState()

    useEffect(() => {
        setSlides([
            {
                image: "2010.3.jpg",
                title: "2010 : Premier contact avec l'informatique",
                description : "J'ai adoré mon cours de HTML d'aujourd'hui… Et si je faisais un site avec nos photos de vacances ? Comme ça, tata pourra les voir !"
            },
            {
                image: "2014.jpg",
                title: "2014-2019 : Études universitaires à Lima, Pérou",
                description : "Trop hâte de commencer cette nouvelle étape ! Vais-je m'orienter vers le tourisme ou l'hôtellerie ? Les deux me passionnent tellement…"
            },
            {
                image: "2018.jpg",
                title: "2018 : Première expérience en organisation d'événements",
                description : "Et penser que j'ai eu ce job parce que j'ai raté mon avion pour partir en vacances ! Comme quoi, parfois, les détours mènent à de belles opportunités ✨"
            },
            {
                image: "2019.jpg",
                title: "2019 : Obtention du diplôme en Tourisme et Hôtellerie",
                description : "Quelle fierté ! Cinq années intenses, des projets passionnants et des rencontres. Prête pour le grand saut !"
            },
            {
                image: "2020.jpeg",
                title: "2020–2022 : Séjours linguistiques en France",
                description : "Ohlala ! Les gens parlent tellement vite 😅 Mais quelle joie de pouvoir faire mes premiers échanges en français ! Et tout ça avec un niveau A1, pas mal non ? 🇫🇷"
            },
            {
                image: "2022.2.jpg",
                title: "2022 : Déménagement en France",
                description : "Nouvelle vie, nouveau pays, nouvelle aventure. Un peu de stress, beaucoup d'enthousiasme, et la certitude d'être au bon endroit."
            },
            {
                image: "2022INTER2.jpg",
                title: "2022–2025 : Expérience à l'Intercontinental Marseille *****",
                description : "Premiers pas dans un palace ! Je n'avais aucune expérience dans l'hôtellerie de luxe, mais au fond de moi je savais que j'étais à la hauteur… Je me souviens encore de ce mélange d'excitation et de fierté : je vais KILL ce job !"
            },
            {
                image: "2025.jpg",
                title: "2025 : Début de mes études à Epitech Montpellier",
                description : "Reconnexion avec ma passion d'enfance 💻. À 10 ans déjà, je faisais des sites web sans savoir ce qu'était une “balise HTML” ! Aujourd'hui, je reprends ce rêve pour en faire ma carrière."
            },
            {
                image: "image.jpg",
                title: "Demain",
                description : "Mon objectif : devenir développeuse Full Stack capable de créer des solutions innovantes à impact humain."
            }
        ])
    }, [])
    
    if (!slides)
        return null;


    return (
        <div className="mainSlide">
            <div className="aboutCarouselContainer">
                <div className="titleContent">
                    <Title>Mon Parcours</Title>
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

export default AboutCarousel
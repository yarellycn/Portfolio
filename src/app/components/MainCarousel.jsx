"use client";
import { Carousel, ConfigProvider } from "antd";
import { useCallback, useEffect, useRef } from "react";
import { Home, About, AboutCarousel, Skills, ProjectsCarousel, Contact } from "."
import { useApp } from "@/app/store/App";

const MainCarousel = (props) => {
    const carousel = useRef()
    const scrollTimeout = useRef(null); // for scroll throttling
    const {navSlide, setNavSlide} = useApp()

    const handleWheel = useCallback((event) => {
        event.preventDefault(); // prevent normal page scrolling

        if (!carousel.current) return;

        // simple throttle to prevent rapid firing
        if (scrollTimeout.current)
            return;
        scrollTimeout.current = setTimeout(() => {
            scrollTimeout.current = null;
        }, 800); // adjust timing as needed

        if (event.deltaY > 0) {
            carousel.current.next(); // scroll down -> next slide
        } else if (event.deltaY < 0) {
            carousel.current.prev(); // scroll up -> previous slide
        }
    }, []);

    useEffect(() => {
        window.addEventListener("wheel", handleWheel)
        return () => window.removeEventListener("wheel", handleWheel)
    }, [handleWheel])
    
    useEffect(() => {
        if (!navSlide)
            return

        let slideIndex
        switch(navSlide) {
            case "home":
                slideIndex = 0;
                break;
            case "about":
                slideIndex = 1;
                break;
            case "projects":
                slideIndex = 4;
                break;
            case "contact":
                slideIndex = 5;
                break;
            default:
                slideIndex = 0;
        }

        carousel.current.goTo(slideIndex)
        setNavSlide(null)
    }, [navSlide])

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: "rgba(255, 255, 255, 1)",
                }
            }}    
            >
        <Carousel dots={false} infinite={false} vertical ref={carousel} className="main-carousel-container" adaptiveHeight>
            <Home {... props}/>
            <About {... props}/>
            <AboutCarousel {... props}/>
            <Skills {... props}/>
            <ProjectsCarousel {... props}/>
            <Contact {... props}/>
        </Carousel>
        </ConfigProvider>
    )
}

export default MainCarousel
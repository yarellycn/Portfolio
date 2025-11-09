"use client";
import { Typography } from "antd";

const { Title, Text }= Typography
const Home = () => {
    return (
        <div className="mainSlide">
            <div className="homeContainer">
                <div className="homeContent">
                    <Title>Yarelly Berger</Title>
                    <Text>Étudiante à Epitech | Coder, apprendre, progresser — Full Stack in progress</Text>
                </div>
            </div>
        </div>
    )
}

export default Home;
"use client";
import React from 'react';
import { Typography, ConfigProvider, Button, Flex } from "antd";
import { DownloadOutlined } from '@ant-design/icons';

const { Title, Text }= Typography
const Skills = (props) => {
    return (
        <div className="mainSlide">
            <div className="skillsContainer">
                <ConfigProvider
                    theme={{
                        token: {
                            fontSize: 15,
                        },
                        components: {
                            Button: {
                                defaultBg: "rgb(74, 94, 97)",
                                defaultHoverBorderColor: "white",
                                defaultHoverColor: "rgb(36, 50, 52)",
                            },
                        },
                    }}
                >
                    <div className="titleContainer">
                        <Title>Mes Super-Pouvoirs</Title>
                        <Text>(Techniques) <br></br><br></br></Text>
                        <Text>Voici mon arsenal secret : des lignes de code propres, des interfaces qui donnent envie de rester et des projets qui ne s'écroulent pas dès qu'on clique trop vite. <br></br>
                            Fiable, scalable, et toujours un peu magique ✨ <br></br><br></br>
                        </Text>
                        <Button variant="solid" icon={<DownloadOutlined />} size={"medium"} target="_blank" href="BERGERCV.pdf" download="BERGERCV.pdf">
                            Télécharger mon CV
                        </Button>
                    </div>
                    <div className="skillsContent">
                        <Text>Langages</Text>
                        <Flex wrap gap="small">
                            <Button>Python</Button>
                            <Button>HTML</Button>
                            <Button>CSS</Button>
                            <Button>JavaScript</Button>
                            <Button>PHP</Button>
                            <Button>SQL</Button>
                            <Button>Java</Button>
                        </Flex><br/>
                        <Text>Frontend</Text>
                        <Flex wrap gap="small">
                            <Button>React</Button>
                            <Button>Next.js</Button>
                            <Button>Vue.js</Button>
                        </Flex><br/>
                        <Text>Backend</Text>
                        <Flex wrap gap="small">
                            <Button>Node.js</Button>
                            <Button>Express</Button>
                        </Flex><br/>
                        <Text>Bases de données & Outils</Text>
                        <Flex wrap gap="small">
                            <Button>MariaDB</Button>
                            <Button>Git</Button>
                            <Button>GitHub</Button>
                            <Button>Figma</Button>
                        </Flex>
                    </div>
                </ConfigProvider>
            </div>
        </div>
    )
}

export default Skills;
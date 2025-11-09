"use client";
import { Row, Space, Typography, Avatar, Button, ConfigProvider } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { useApp } from "@/app/store/App";
import { useCallback } from "react";

const { Text } = Typography;
const NavBar = () => {
    const {setNavSlide} = useApp()
    const navigate = useCallback((slide) => {
        if (slide)
            setNavSlide(slide)
    }, [])

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: "rgba(255, 255, 255, 1)",
                },
                components: {
                    Button: {
                        contentFontSize: 14.5,
                        textHoverBg: "rgb(74, 94, 97)",
                    },
                },
            }}
            >
            <Row justify="space-between" align="center" className="navBar">
                <Space align="center">
                    <Avatar size={50} icon={<UserOutlined />} src="ME.jpg"/>
                    <Text style={{marginBottom:0}}>Yarelly Berger</Text>
                </Space>
                <Space align="center">
                    <Button type="text" onClick={() => navigate("home")}>Accueil</Button>
                    <Button type="text" onClick={() => navigate("about")}>Profil</Button>
                    <Button type="text" onClick={() => navigate("projects")}>Projets</Button>
                    <Button type="text" onClick={() => navigate("contact")}>Contact</Button>
                </Space>
            </Row>
        </ConfigProvider>
    )
}

export default NavBar;
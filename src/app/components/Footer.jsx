"use client";
import { Space, Typography, Divider, Flex } from "antd";
import { GithubOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';

const { Text } = Typography;

const Footer = () => {
    return (
        <div className="footerContent" align="center">
            <Divider style={{borderColor: "#798478"}} size="small"/>
            <Flex justify="center" align="center" vertical gap={"medium"}>
                <Space direction="vertical" align="center">
                    <Space>
                        <a
                            href="https://www.linkedin.com/in/yarelly-cotrina-navarro/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: '30px', color: "white", display: 'inline-flex', alignItems: 'center' }}
                        >
                            <LinkedinOutlined className="iconSocial" />
                        </a>
                        <a
                            href="https://github.com/yarellycn"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: '30px', color: "white", display: 'inline-flex', alignItems: 'center' }}
                        >
                            <GithubOutlined className="iconSocial" />
                        </a>
                        <a
                            href="https://instagram.com/yarellycn"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: '30px', color: "white", display: 'inline-flex', alignItems: 'center' }}
                        >
                            <InstagramOutlined className="iconSocial" />
                        </a>
                    </Space>
                </Space>
                <Space>
                    <Text>© Yarelly Berger | 2025</Text>
                </Space>
            </Flex>
        </div>
    )
}

export default Footer;
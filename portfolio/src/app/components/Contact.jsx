"use client";
import { Row, Typography, Button, Form, Input, Tag, ConfigProvider } from "antd";
import React, { useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import Footer from "./Footer";

const customizeRequiredMark = (label, { required }) => (
  <>
    {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
    {label}
  </>
);

const { Title }= Typography
const Contact = () => {
    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState('optional');
    const onRequiredTypeChange = ({ requiredMarkValue }) => {
        setRequiredMarkType(requiredMarkValue);
    };

    return (
        <div className="mainSlide">
            <div className="contactContainer">
                <div className="titleContent">
                    <Title>Contact</Title>
                </div>
                <div>
                    <Title level={3}>On travaille ensemble ?</Title>
                    <newText>N'hésitez pas à me contacter en soumettant le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.</newText><br></br>
                    <newText>Envoyez-moi un message !</newText>
                </div>
                <div className="formContent">
                    <Form
                        form={form}
                        layout="vertical"
                        initialValues={{ requiredMarkValue: requiredMark }}
                        onValuesChange={onRequiredTypeChange}
                        requiredMark={requiredMark === 'customize' ? customizeRequiredMark : requiredMark}
                    >
                        <Row justify={"space-around"}>
                            <Form.Item label="Nom" type="text" required tooltip="This is a required field" >
                                <Input placeholder="Nom *" />
                            </Form.Item>

                            <Form.Item label="Prénom" type="text" required tooltip="This is a required field">
                                <Input placeholder="Prénom *" />
                            </Form.Item>
                        </Row>

                        <Row justify={"space-around"}>
                            <Form.Item label="Email" type="email" required tooltip="This is a required field">
                                <Input placeholder="Saissisez votre mail *" />
                            </Form.Item>

                            <Form.Item label="Entreprise" type="text" required tooltip="This is a required field">
                                <Input placeholder="Saissisez votre entreprise *" />
                            </Form.Item>
                        </Row>

                        <Form.Item label="Votre message :" type="text" required tooltip="">
                            <Input.TextArea placeholder="Saissisez votre message *"
                            tooltip={{ title: 'This is a required field', icon: <InfoCircleOutlined /> }}
                            />
                        </Form.Item>

                        <ConfigProvider
                            theme={{
                                components: {
                                    Button: {
                                        defaultBg: "rgb(74, 94, 97)",
                                        colorBgTextActive: "rgb(36, 50, 52)",
                                        defaultHoverBorderColor: "rgb(74, 94, 97)",
                                        defaultHoverColor: "rgb(36, 50, 52)",
                                    },
                                },
                            }}
                        >
                            <Form.Item>
                                <Button>Submit</Button>
                            </Form.Item>
                        </ConfigProvider>
                    </Form>
                </div>
                <div className="footerContainer">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    )
}

export default Contact;
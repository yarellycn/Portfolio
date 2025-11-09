import React from 'react';
import { Card, ConfigProvider, Flex, Tag } from 'antd';
const { Meta } = Card;

const Slide = (props) => {
    const {image, title, description} = props
    return (
        <div className="cardWrapper">
            <ConfigProvider
                theme={{
                    token: {
                    colorTextDescription: "rgba(164, 164, 164, 1)",
                    },
                }}
            >
                <Card
                    className="aboutCard"
                    hoverable
                    style={{
                        backgroundColor: "rgba(54, 71, 72, 1)",
                        border: 0}}
                    cover={
                        <img
                            draggable={true}
                            alt="example"
                            src={image}
                        />
                    }
                >
                    <Meta title={title} description={description} />
                </Card>
            </ConfigProvider>
        </div>
    )
}

export default Slide
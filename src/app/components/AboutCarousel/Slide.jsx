import React from 'react';
import { Card, ConfigProvider } from 'antd';
const { Meta } = Card;

const Slide = (props) => {
    const {image, title, description} = props
    return (
        <div className="cardWrapper">
            <ConfigProvider
                theme={{
                    token: {
                    colorTextDescription: "rgba(164, 164, 164, 1)",
                    // hoverable: boxShadow="5px 5px 5px 3px rgba(26, 28, 29, 0.37)"
                    },
                }}
            >
                <Card
                    className="aboutCard"
                    hoverable
                    style={{
                        backgroundColor: "rgba(54, 71, 72, 1)", 
                        borderColor: "rgba(18, 18, 18, 0.37)", 
                        boxShadow: "4px 4px 10px 2px rgba(26, 28, 29, 0.37)"
                    }}
                    cover={
                        <img
                            draggable={false}
                            alt="example"
                            src={image}
                            style={{height: 330}}
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
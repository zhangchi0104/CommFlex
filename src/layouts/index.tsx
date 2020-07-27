import React from 'react';
import {
    Layout,
    Row,
    Col,
} from 'antd';
const { Content, Header } = Layout

export default (props:any) => {
    console.log(props.routes)
    console.log(props)
    return (
        
        <Layout className="layout" style={{ minHeight: "100vh" }}>
            <Header>
                <Row align="middle" >
                    <Col><h1 style={{ color: "white" }}>CommFlex</h1></Col>
                </Row>
            </Header>
            <Content> { props.children }
            </Content>
        </Layout>
    )
}
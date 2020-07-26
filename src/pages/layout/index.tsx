import React from 'react';
import {
    Layout,
    Row,
    PageHeader,
    Col,
    Button,
    Steps,
} from 'antd';
import Card from '../registration/card'
const { Content, Header } = Layout
const { Step } = Steps

import { Link } from 'umi';

import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1967146_fttok1o9zut.js',
});

export default (props:any) => {
    console.log(props.children)
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
import React from 'react'
import {
    Layout,
    Row,
    PageHeader,
    Col,
    Button,
    Steps,
} from 'antd';
import Card from '../card'
const { Content, Header } = Layout
const { Step } = Steps

import { Link } from 'umi';

import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1967146_fttok1o9zut.js',
});
export default () => {

    return (
        <div>
            <PageHeader
                title="Registration"
                subTitle="Gather information" />
            <Layout>
                <Content style={{ margin: "auto 30px" }}>
                    <div style={{ margin: "10px 15vw" }}>
                        <Steps current={1} labelPlacement="vertical">
                            <Step title="Info" />
                            <Step title="Data" />
                            <Step status="wait" title="Result" />
                        </Steps>
                    </div>
                    <Row align="top" justify="space-around" gutter={[16, 16]}>
                        <Col>
                            <Card
                                title="Open Banking API"
                                img={<IconFont type="icon-bank"
                                    style={{
                                        fontSize: 200
                                    }} />}
                                description='Banking Data' />
                        </Col>
                        <Col>
                            <Card
                                title="Xero"
                                img={<IconFont type="icon-xero"
                                    style={{
                                        fontSize: 160,
                                        padding: "20px 20px"
                                    }} />}
                                description='Getting your ledger' />
                        </Col>
                        <Col>
                            <Card
                                title="Amazon"
                                img={<IconFont type="icon-amazon"
                                    style={{
                                        fontSize: 160,
                                        padding: "20px 20px"
                                    }} />}
                                description='shopping history on Amazon' />
                        </Col>
                        <Col>
                            <Card
                                title="Ebay"
                                img={<IconFont type="icon-ebay"
                                    style={{
                                        fontSize: 160,
                                        padding: "20px 20px"
                                    }} />}
                                description='Shopping history on Amazon' />
                        </Col>
                    </Row>
                    <Row justify="center" gutter={[16, 16]}>
                        <Col>
                            <Button shape="round">Prev</Button>
                        </Col>
                        <Col>
                            <Button type="primary" shape="round"><Link to='/register/result'>Next</Link></Button>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </div>
    )
}
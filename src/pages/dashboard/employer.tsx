import React from 'react';
import { Row, Col, Layout, PageHeader, Card, Statistic } from 'antd';

const { Content } = Layout;

import LoanProgress from '@/components/LoanPie'
export default () => {
  return (
    <div>
      <PageHeader title="Dashboard" />
    <Layout>
      <Content style={{margin: "50px, 10vw"}}>
       <Row style={{margin: "auto 10vw"}} justify='space-around'>
         <Col span={10}>
            <Card title="Repayment Info">
              <Row justify='space-around'>
                <Col><Statistic title="Next Repayment" value="$1,234" /></Col>
                <Col><Statistic title="Repayment due" value="23 Jul 2020" /></Col>
              </Row>
            </Card>
         </Col>
         <Col span={12}>
          <Card title="Loan Info">
            <Row justify="space-around">
              <Col>
                <LoanProgress percent={0.8} />
              </Col>
              <Col>
                <Statistic title="Interest Rate" value="1.25%"/>
              </Col>
              <Col>
                <Statistic title="Total" value="$7,000"/>
              </Col>
              <Col>
                <Statistic title="Remaining" value="$5,600"/>
              </Col>
            </Row>
          </Card>
         </Col>
       </Row>
      </Content>
    </Layout>
    </div>
  )
}


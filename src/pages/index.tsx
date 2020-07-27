import React from "react"
import { Typography, Row, Col, Button } from 'antd'
import { Link } from 'umi';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography
export default () => {
  return (
    <div>
      <Row justify="center" style={{ marginTop: "10vh" }}>
        <Col>
          <Title style={{ fontSize: 50, fontWeight: 40 }}>
            CommFlex
               </Title>
        </Col>
      </Row>
      <Row justify="center" style={{}}>
        <Col>
          <Paragraph style={{ fontSize: 25, fontWeight: 50 }}>
            A SaaS solution offered to employers to help reduce the financial stress of their employees
        </Paragraph>
        </Col>
      </Row>
      <Row justify="center" >
        <Button type='primary' shape="round" size="large">
          <Link to='/register'>Get Started{<ArrowRightOutlined />}</Link>
        </Button>
      </Row>
    </div>

  )
}
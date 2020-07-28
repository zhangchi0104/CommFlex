import React from 'react';
import { Row, Col, Layout, PageHeader, Card, Statistic } from 'antd';

const { Content } = Layout;

import { Progress } from 'antd';
interface IState {
  interval: number
  unit: "week"| "day" | "month"
}
class EmployeeDashboard extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      interval: 1,
      unit: "week"
    }
  }

  render() {
    const totalDays = 3;
    return (
      <div>
        <PageHeader title="Dashboard" />
        <Layout>
          <Content style={{ margin: "50px, 10vw" }}>
            <Row style={{ margin: "auto 10vw" }} justify='space-around'>
              <Col span={10}>
                <Card title="Repayment Info">
                  <Row justify='space-around'>
                    <Col><Statistic title="Next payment" value="$100" /></Col>
                    <Col><Statistic title="Flexible Withdraw" value="$100" /></Col>
                  </Row>
                </Card>
              </Col>
              <Col span={10}>
                <Card title="Loan Info">
                  <Row gutter={[16, 16]}>
                    < Col>Days Remaining</Col>
                    <Col span={24}>
                      <Progress
                        percent={33}
                        format={percent => ((100 - percent!) / 100 * totalDays).toPrecision(1) + " days"}
                      />
                    </Col>
                  </Row>
                  <Row justify="space-between">
                    <Col>
                      <Statistic title="Next Payment Date" value="27 Jul 2020" />
                    </Col>
                    <Col>
                      <Statistic title="Payment Frequency" value={`Every ${this.state.interval} ${this.state.unit}(s)`} />
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default EmployeeDashboard;
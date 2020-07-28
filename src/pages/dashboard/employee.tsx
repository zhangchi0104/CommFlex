import React from 'react';
import {
  Row,
  Col,
  Layout,
  PageHeader,
  Card,
  Progress,
  Popover,
  InputNumber,
  Select,
  Statistic,
} from 'antd';

const { Content } = Layout;
const { Option } = Select;
import { SettingFilled } from '@ant-design/icons';

interface IState {
  interval: number;
  unit: 'week' | 'day' | 'month';
}
class EmployeeDashboard extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      interval: 1,
      unit: 'week',
    };
  }

  render() {
    const totalDays = 3;
    return (
      <div>
        <PageHeader title="Dashboard" />
        <Layout>
          <Content style={{ margin: '50px, 10vw' }}>
            <Row style={{ margin: 'auto 10vw' }} justify="space-around">
              <Col span={10}>
                <Card title="Payment Info">
                  <Row justify="space-around">
                    <Col>
                      <Statistic title="Next payment" value="$100" />
                    </Col>
                    <Col>
                      <Statistic title="Flexible Withdraw" value="$100" />
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={10}>
                <Card
                  title="Payment Interval"
                  extra={this.renderPaymentIntervalSettings()}
                >
                  <Row gutter={[16, 16]}>
                    <Col>Days Remaining</Col>
                    <Col span={24}>
                      <Progress
                        percent={33}
                        format={percent =>
                          (((100 - percent!) / 100) * totalDays).toPrecision(
                            1,
                          ) + ' days'
                        }
                      />
                    </Col>
                  </Row>
                  <Row justify="space-between">
                    <Col>
                      <Statistic
                        title="Next Payment Date"
                        value="27 Jul 2020"
                      />
                    </Col>
                    <Col>
                      <Statistic
                        title="Payment Frequency"
                        value={`Every ${this.state.interval} ${this.state.unit}(s)`}
                      />
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
  renderPaymentIntervalSettings() {
    return (
      <Popover
        placement="right"
        title="How do you want to be paid"
        trigger="click"
        content={this.renderPaymentSettingContent()}
      >
        <SettingFilled />
      </Popover>
    );
  }
  renderPaymentSettingContent() {
    return (
      <Row align="middle" gutter={[5, 0]}>
        <Col>Every</Col>
        <Col>
          <InputNumber
            min={1}
            size="small"
            onPressEnter={e => this.setState({ interval: e.target.value })}
          />
        </Col>
        <Col>
          <Select
            value={this.state.unit}
            onChange={val => this.setState({ unit: val })}
          >
            <Option value="day"> day(s) </Option>
            <Option value="week"> week(s) </Option>
            <Option value="month"> month(s) </Option>
          </Select>
        </Col>
      </Row>
    );
  }
}

export default EmployeeDashboard;

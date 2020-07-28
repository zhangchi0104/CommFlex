import React, { Component } from 'react';
import { Dictionary } from 'lodash';
import {
  Result,
  Layout,
  PageHeader,
  Row,
  Col,
  Button,
  Popover,
  Radio,
} from 'antd';
import { LoadingOutlined, SettingFilled } from '@ant-design/icons';

import Steps from '@/components/StepsBar';
import { history } from 'umi';
const { Content } = Layout;

interface IState {
  status: 'waiting' | 'success' | 'fail';
  msg: string;
}

const prompt = {
  waiting: 'Wait a sec, we are fetching your data ...',
  fail: 'Sorry, we cannot pass your application',
  success: `Congrates, your loan was granted @1.25% / month`,
};
const status: Dictionary<
  | 'success'
  | 'error'
  | 'info'
  | 403
  | 404
  | 500
  | '403'
  | '404'
  | '500'
  | 'warning'
  | undefined
> = {
  waiting: 'info',
  fail: 'error',
  success: 'success',
};
class ApplicationStatus extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      status: 'waiting',
      msg: 'We are processing your request',
    };
  }

  continueOnClick() {
    switch (this.state.status) {
      case 'success':
        history.push('/dashboard/employer');
        break;
      case 'fail':
        history.push('/');
        break;
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ status: 'success' });
    }, 2000);
  }

  render() {
    const isLoading = this.state.status === 'waiting';
    return (
      <div>
        <PageHeader title="Result" subTitle={this.renderStatusSettings()} />
        <Layout>
          <Content style={{ padding: 'auto 30px' }}>
            <div style={{ padding: '10px 15vw' }}>
              <Steps current={2} />
            </div>
            <Row align="middle" justify="center" gutter={[16, 16]}>
              <Col>
                <Result
                  status={status[this.state.status]}
                  icon={
                    this.state.status === 'waiting' ? (
                      <LoadingOutlined />
                    ) : (
                      undefined
                    )
                  }
                  title={prompt[this.state.status]}
                  extra={
                    <Button
                      type="primary"
                      disabled={isLoading}
                      onClick={() => this.continueOnClick()}
                    >
                      Continue
                    </Button>
                  }
                />
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
  renderStatusSettings() {
    return (
      <Popover placement="bottom" content={this.renderPopOverContent()}>
        <SettingFilled style={{ fontWeight: 20 }} />
      </Popover>
    );
  }

  renderPopOverContent() {
    return (
      <Radio.Group
        onChange={e => {
          this.setState({ status: e.target.value });
        }}
        value={this.state.status}
      >
        <Radio value={'waiting'}>Waiting</Radio>
        <Radio value={'success'}>Success</Radio>
        <Radio value={'fail'}>Fail</Radio>
      </Radio.Group>
    );
  }
}

export default ApplicationStatus;

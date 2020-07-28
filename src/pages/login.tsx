import React from 'react';
import {
  Popover,
  Layout,
  Row,
  Col,
  Typography,
  Input,
  Button
} from 'antd';
import { UserOutlined, InfoCircleOutlined, LockOutlined } from "@ant-design/icons"
import { history } from 'umi';
const { Content } = Layout;

interface IState {
  username: string,
  passowrd: string,
  isWrongUserName: boolean
}

class LoginPage extends React.Component<any, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      passowrd: "",
      isWrongUserName: false
    }
  }
  render() {
    const errorBorderStyle: React.CSSProperties | undefined = this.state.isWrongUserName ? { borderColor: "red" } : undefined;
    return (
      <div>

        <Layout>
          <Content style={{ margin: "10vh 50px" }}>
            <Row justify="center">
              <Typography.Title>Login</Typography.Title>
            </Row>
            <Row justify="center" gutter={[0, 20]}>
              <Col span={6}>
                <Input
                  prefix={<UserOutlined />}
                  style={errorBorderStyle}
                  placeholder="Username"
                  value={this.state.username}
                  onChange={e => this.setState({ username: e.target.value, isWrongUserName:false })}
                  suffix={
                    <Popover
                      title="hint"
                      content="enter 'employer' to show employer dashboard, 'employee' to the employee's "
                    >
                      <InfoCircleOutlined />
                    </Popover>
                  }
                />
              </Col>
            </Row>
            <Row justify="center" gutter={[0, 30]}>
              <Col span={6}>
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
                  value={this.state.passowrd}
                  onChange={e => this.setState({ passowrd: e.target.value })}
                  visibilityToggle={false}
                  iconRender={(_) => {
                    return (<Popover
                      title="hint"
                      content="just type some stuff"
                    >
                      <InfoCircleOutlined />
                    </Popover>)
                  }
                  }
                />
              </Col>
            </Row>
            <Row justify="center" >
              <Col>
                <Button type="primary" shape="round" onClick={() => this.login(this.state.username)}>Login</Button>
              </Col>
            </Row>
          </Content>
        </Layout>

      </div>
    );
  }

  login(username:string) {
    switch (username) {
      case 'employer':
        history.push('/dashboard/employer');
        break;
      case 'employee':
        history.push('/dashboard/employee');
        break;
      default:
        this.setState({
          isWrongUserName:true,
          username:"",
          passowrd: ""
        })
    }
  }
}

export default LoginPage;
import React from 'react';
import {
  Button,
  Modal,
  InputGroup,
  FormControl,
  Row,
  Container,
  Form,
  Col,
} from 'react-bootstrap';
// import './member.css';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      memberData: [],
      m_email: '',
      m_password: '',
      loginUser: '',
      isLogined: false,
      user_id: '',
      Logindb: 'none',
      Logintext: '登入失敗',
      Loginstate: 'alert alert-danger',
    };
  }

  handleModalFormInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });

    console.log({ [name]: value });
  };

  handleModalFormInputSave = async () => {
    const item = {
      m_email: this.state.m_email,
      m_password: this.state.m_password,
    };
    console.log(item);
    const newData = [item, ...this.state.memberData];

    var formData = new FormData();

    formData.append('m_email', this.state.m_email);
    formData.append('m_password', this.state.m_password);

    console.log(formData);

    var sendObj = {
      m_email: this.state.m_email,
      m_password: this.state.m_password,
    };

    if (
      document.querySelector('#m_email').value == '' ||
      document.querySelector('#m_password').value == ''
    ) {
      alert('不可空白');
      return;
    }

    try {
      // const data = item;

      const response = await fetch('http://localhost:5000/login', {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(sendObj),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      });

      const jsonObject = await response.json();

      console.log(jsonObject);

      await this.setState({ memberData: [newData] }, () => {
        // this.handleModalClose();
        if (jsonObject.success) {
          alert('登入成功!');
          this.setState({ Logindb: 'block' });
          this.setState({ Logintext: '登入成功' });
          this.setState({ Loginstate: 'alert alert-success' });
          this.setState({
            loginUser: jsonObject.body.m_email,
            isLogined: true,
            user_id: jsonObject.message.user_id,
          });
          document.location.href = '/';
        } else {
          this.setState({ Logindb: 'block' });
          this.setState({ Logintext: '登入失敗' });
          this.setState({ Loginstate: 'alert alert-danger' });
          alert('帳號或密碼錯誤');
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="member_login">
        <Container>
          <Row>
            <Col>
              <Form>
                <h2 className="text-center">登入</h2>
                <div
                  id="info_bar"
                  className={this.state.Loginstate}
                  style={{ display: `${this.state.Logindb}` }}
                  role="alert"
                  // style={{"display:"}}
                >
                  {this.state.Logintext}
                </div>

                <Row>
                  <Col md={3} />
                  <Col md={6}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>帳號(電子郵件)</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        id="m_email"
                        name="m_email"
                        value={this.state.email}
                        onChange={this.handleModalFormInputChange}
                      />
                      <Form.Text className="text-muted">
                        請輸入你的電子郵件
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>密碼</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="m_password"
                        id="m_password"
                        value={this.state.password}
                        onChange={this.handleModalFormInputChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicChecbox">
                      <div className="m-auto">
                        <span>
                          <a href="">忘記密碼</a>
                        </span>
                      </div>
                    </Form.Group>
                    <Button
                      variant="secondary m-auto d-block"
                      onClick={this.handleModalFormInputSave}
                    >
                      送出
                    </Button>
                  </Col>
                  <Col md={3} />
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;

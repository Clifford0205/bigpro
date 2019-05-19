import React from 'react';
import {
  Button,
  Modal,
  InputGroup,
  FormControl,
  Row,
  Col,
} from 'react-bootstrap';
// import './member.css';
import './LoginModal.scss';

class LoginModal extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleModalFormInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value });

    console.log({ [name]: value });
  };

  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          onHide={this.props.close}
          className="member_Login"
        >
          <Modal.Header closeButton>
            <Modal.Title className="mx-auto">會員登入</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              id="info_bar"
              className={this.state.installstate}
              style={{ display: `${this.state.installdb}` }}
              role="alert"
              // style={{"display:"}}
            >
              {this.state.installtext}
            </div>
            <Row>
              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">
                      E-mail(帳號)
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    name="m_email"
                    value={this.state.email}
                    onChange={this.handleModalFormInputChange}
                  />
                </InputGroup>
                <br />

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">
                      密碼
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    name="m_password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleModalFormInputChange}
                  />
                </InputGroup>
                <br />
              </Col>
            </Row>

            <Row>
              <Col className="d-flex">
                <div className="m-auto">
                  <span>
                    <a href="">忘記密碼</a>
                  </span>
                </div>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary m-auto" onClick={this.props.close}>
              取消
            </Button>

            <Button
              variant="secondary m-auto"
              onClick={this.handleModalFormInputSave}
            >
              登入
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default LoginModal;

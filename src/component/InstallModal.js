import React from 'react';
import {
  Button,
  Modal,
  InputGroup,
  FormControl,
  Row,
  Col,
} from 'react-bootstrap';

class InstallModal extends React.Component {
  constructor() {
    super();
    this.state = {
      memberData: [],
      m_name: '',
      m_mobile: '',
      m_birthday: '',
      m_email: '',
      m_password: '',
      re_password: '',
      installdb: 'none',
      installtext: '註冊失敗',
      installstate: 'alert alert-danger',
    };
  }

  upload = () => {
    document.getElementById('selectImage').click();
  };

  handleModalFormInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    // 注意：id(學號)與生日，需先轉為數字類型再進入state中
    // if (name === 'phone' || name === 'birthday') value = +value;

    this.setState({ [name]: value });

    console.log({ [name]: value });
  };

  handleModalFormInputSave = async () => {
    const item = {
      m_name: this.state.m_name,
      m_mobile: this.state.m_mobile,
      m_birthday: this.state.m_birthday,
      m_email: this.state.m_email,
      m_password: this.state.m_password,
    };

    const newData = [item, ...this.state.memberData];

    try {
      const data = item;

      const response = await fetch('http://localhost:5555/member', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      });

      const jsonObject = await response.json();

      console.log(jsonObject);

      await this.setState({ memberData: newData }, () => {
        // alert('資料已成功新增!');
        // this.handleModalClose();
        if (jsonObject.success) {
          alert('註冊成功!');
          this.setState({ installdb: 'block' });
          this.setState({ installtext: '註冊成功' });
          this.setState({ installstate: 'alert alert-success' });
          return;
        }

        if (!jsonObject.success) {
          this.setState({ installdb: 'block' });
          alert('e-mail重複使用');

          return;
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="mx-auto">會員註冊</Modal.Title>
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
                      姓名
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    name="m_name"
                    value={this.state.name}
                    onChange={this.handleModalFormInputChange}
                  />
                </InputGroup>
                <br />

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">
                      手機號碼
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    name="m_mobile"
                    type="number"
                    value={this.state.phone}
                    onChange={this.handleModalFormInputChange}
                  />
                </InputGroup>
                <br />

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">
                      生日
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    name="m_birthday"
                    type="date"
                    value={this.state.birthday}
                    onChange={this.handleModalFormInputChange}
                  />
                </InputGroup>
                <br />

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
              </Col>
              <Col>
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

                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">
                      確認密碼
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    name="re_password"
                    type="password"
                    value={this.state.re_password}
                    onChange={this.handleModalFormInputChange}
                  />
                </InputGroup>
                <br />

                <InputGroup className="mb-3 d-block text-center">
                  <img src="" alt="" id="myimg" className="m-auto" />
                  <Button variant="secondary mt-3" onClick={this.upload}>
                    上傳圖片
                  </Button>
                  <div>
                    <input
                      type="file"
                      className="m-auto d-none"
                      id="selectImage"
                    />
                  </div>
                </InputGroup>
                <br />
              </Col>
            </Row>

            <Row>
              <Col className="d-flex">
                <div className="m-auto">
                  <input type="checkbox" />
                  <span>我同意The Wheel客戶隱私權政策與客戶服務條款</span>
                </div>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary m-auto"
              onClick={this.handleModalFormInputSave}
            >
              立即註冊
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default InstallModal;

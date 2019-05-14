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
    };
  }

  upload = () => {
    document.getElementById('selectImage').click();
  };

  handleDataSave = () => {
     // 處理新增資料的儲存
  

    const item = {
      id: this.state.id,
      name: this.state.name,
      birth: this.state.birth,
    };

    const newData = [item, ...this.state.studentData];

    try {
      const data = item;

      const response = await fetch('http://localhost:5555/students', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      });

      const jsonObject = await response.json();

      console.log(jsonObject);

      await this.setState({ studentData: newData }, () => {
        alert('資料已成功新增!');
        this.handleModalClose();
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
            <Modal.Title>會員註冊</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">
                      姓名
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    name="id"
                    disabled={this.props.disableIdField}
                    value={
                      /* 因為this.props預設為0，不要該數字0出現，應該是出現空白字串 */
                      this.props.id ? this.props.id : ''
                    }
                    onChange={this.props.handleModalFormInputChange}
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
                    name="name"
                    value={this.props.name}
                    onChange={this.props.handleModalFormInputChange}
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
                    name="name"
                    value={this.props.name}
                    onChange={this.props.handleModalFormInputChange}
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
                    name="name"
                    value={this.props.name}
                    onChange={this.props.handleModalFormInputChange}
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
                    name="name"
                    type="password"
                    value={this.props.name}
                    onChange={this.props.handleModalFormInputChange}
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
                    name="name"
                    type="password"
                    value={this.props.name}
                    onChange={this.props.handleModalFormInputChange}
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
            <Button variant="secondary m-auto" onClick={this.props.handleClose}>
              立即註冊
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default InstallModal;

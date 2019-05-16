import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import InstallModal from './InstallModal';

class Install extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }

  // 開啟註冊視窗
  handleAddModalShow = () => {
    this.setState({
      showModal: true,
    });
  };

  // 關閉註冊視窗
  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <>
        <InstallModal
          show={this.state.showModal}
          close={this.handleModalClose}
        />
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline className="ml-auto">
              <Button
                variant="outline-success ml-auto"
                onClick={this.handleAddModalShow}
              >
                註冊
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Install;

import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import InstallModal2 from './InstallModal2';

class Install extends React.Component {
  render() {
    return (
      <>
        <InstallModal2 show={true} />
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline className="ml-auto">
              <Button variant="outline-success ml-auto">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        ;
      </>
    );
  }
}

export default Install;

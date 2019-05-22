import React from 'react';
// import Install from './component/Install';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
  Redirect,
} from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import InstallModal from './component/InstallModal';
import LoginModal from './component/LoginModal';
import edit from './page/edit';
import password from './page/password';
import product from './page/product';
import news from './page/news';
import course from './page/course';
import road from './page/road';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUser: '',
      isLogined: '',
      showModalIns: false,
      showModalLogin: false,
    };
  }

  saveLoginData = obj => {
    this.setState(obj);
  };

  // 開啟登入視窗
  handleAddModalShowLog = () => {
    this.setState({
      showModalLogin: true,
    });
  };

  // 關閉登入視窗
  handleModalCloseLogin = () => {
    this.setState({ showModalLogin: false });
  };

  // 開啟註冊視窗
  handleAddModalShowIns = () => {
    this.setState({
      showModalIns: true,
    });
  };

  // 關閉註冊視窗
  handleModalCloseIns = () => {
    this.setState({ showModalIns: false });
  };
  render() {
    console.log(this.props.routes);
    return (
      <>
        <LoginModal
          show={this.state.showModalLogin}
          close={this.handleModalCloseLogin}
          saveLoginData={this.saveLoginData}
        />
        <InstallModal
          show={this.state.showModalIns}
          close={this.handleModalCloseIns}
        />
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline className="ml-auto">
              <Button
                variant="outline-success ml-auto mr-5"
                onClick={this.handleAddModalShowLog}
              >
                登入
              </Button>
              <Button
                variant="outline-success ml-auto"
                onClick={this.handleAddModalShowIns}
              >
                註冊
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Router>
          <>
            <Switch>
              {/* {this.state.loginUser !== '' && this.state.isLogined !== '' ? (
                <Route path="/member/edit/:id" component={edit} />
              ) : (
                <Redirect
                  to={{
                    pathname: '/',
                  }}
                />
              )} */}
              {/* <Route path="/member/edit/:id" component={edit} />
              <Redirect
                from={`${this.props.match.path}/story`}
                to={{
                  pathname: `${this.props.match.url}/his`,
                  search: '?hey=UCCU',
                  state: { name: 'Referrer' },
                }} */}

              {/* <Route path="/member/edit/:id" component={edit} /> */}
              <Route path="/member/password/:id" component={password} />
              <Route path="/member/product/:id" component={product} />
              <Route path="/member/course/:id" component={course} />
              <Route path="/member/news/:id" component={news} />
              <Route path="/member/road/:id" component={road} />
            </Switch>
          </>
        </Router>
      </>
    );
  }
}

export default App;

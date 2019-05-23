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
  Dropdown,
} from 'react-bootstrap';
import InstallModal from './component/InstallModal';
import LoginModal from './component/LoginModal';
import edit from './page/edit';
import password from './page/password';
import product from './page/product';
import news from './page/news';
import course from './page/course';
import road from './page/road';
import Login from './page/Login';
import './App.scss';

// function PrivateRoute({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         fakeAuth.isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: props.location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUser: '',
      isLogined: '',
      user_id: '',
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

  //查看是否登入
  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:5555/is_logined', {
        method: 'GET',
        credentials: 'include',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      });

      // if (!response.ok) throw new Error(response.statusText);

      const jsonObject = await response.json();

      console.log(jsonObject);
      await this.setState({
        loginUser: jsonObject.loginUser,
        isLogined: jsonObject.isLogined,
        user_id: jsonObject.user_id,
      });
    } catch (e) {
      console.log(e);
    } finally {
    }
  }

  //登出
  logOut = async () => {
    try {
      const response = await fetch('http://localhost:5555/logout', {
        method: 'GET',
        credentials: 'include',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      });
      const jsonObject = await response.json();
      console.log(jsonObject);
      await this.setState({
        loginUser: jsonObject.loginUser,
        isLogined: jsonObject.isLogined,
        user_id: jsonObject.user_id,
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    // console.log(this.props.routes);
    console.log(this.state);
    return (
      <div className="myMember-App">
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

              <Nav.Link href="/logine">登入</Nav.Link>
              <Button
                variant="outline-success ml-auto mr-5"
                onClick={this.handleAddModalShowIns}
              >
                註冊
              </Button>

              <Dropdown>
                <Dropdown.Toggle
                  variant=""
                  id="dropdown-basic"
                  className="d-flex personal-btn"
                >
                  <div className="littlePhoto">
                    <img src={this.props.src} className="originPhoto" />
                  </div>
                  <span className="align-middle navbar-username">
                    愛騎單車的本地居民
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href={`/member/edit/${this.state.Id}`}>
                    會員資料
                  </Dropdown.Item>
                  <Dropdown.Item href={`/member/road/${this.state.Id}`}>
                    路線列表
                  </Dropdown.Item>
                  <Dropdown.Item href={`/member/news/${this.state.Id}`}>
                    收藏文章
                  </Dropdown.Item>
                  <Dropdown.Item href={`/member/course/${this.state.Id}`}>
                    我的課程
                  </Dropdown.Item>
                  <Dropdown.Item href={`/member/product/${this.state.Id}`}>
                    商品管理
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="3"
                    onClick={this.logOut}
                    className="logout-btn"
                  >
                    登出
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Router>
          <>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/member/edit/:id" component={edit} />
              <Route path="/member/password/:id" component={password} />
              <Route path="/member/product/:id" component={product} />
              <Route path="/member/course/:id" component={course} />
              <Route path="/member/news/:id" component={news} />
              <Route path="/member/road/:id" component={road} />
            </Switch>
          </>
        </Router>
      </div>
    );
  }
}

export default App;

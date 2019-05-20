import React from 'react';
// import { data } from '../data/data';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Modal,
  InputGroup,
  FormControl,
  Row,
  Col,
} from 'react-bootstrap';
// import PathNow from '../component/PathNow';
import './Sidebar.scss';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // m_photo: '',
      // m_name: '',
    };
  }

  // async componentDidMount() {
  //   try {
  //     let id = this.props.match.params.id;
  //     console.log(id);
  //     const response = await fetch(`http://localhost:5555/member/${id}`, {
  //       method: 'GET',
  //       headers: new Headers({
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       }),
  //     });

  //     // if (!response.ok) throw new Error(response.statusText);

  //     const jsonObject = await response.json();

  //     console.log(jsonObject);
  //     await this.setState({
  //       myMemberData: jsonObject,
  //       m_photo: jsonObject[0].m_photo,
  //       m_name: jsonObject[0].m_name,
  //       old_password: jsonObject[0].m_password,
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //   }
  // }

  // handleFormInputChange = event => {
  //   let value = event.target.value;
  //   const name = event.target.name;

  //   this.setState({ myMemberData: [{ [name]: value }] }, () =>
  //     console.log(this.state)
  //   );

  //   this.setState({ [name]: value });
  //   // this.newMyemberData[name] = value;
  //   // console.log('newMyemberData');
  //   // console.log(this.newMyemberData);
  // };

  render() {
    return (
      <>
        <Col sm={4} className="member-sidebar">
          <div className="myPhoto">
            <img src={this.props.src} className="originPhoto" />
          </div>

          <div className="userName">{this.props.name}</div>

          <ul className="list-unstyled">
            <li>
              <Link>編輯會員資料</Link>
              <ul className="list-unstyled">
                <li>
                  <Link to={`/member/${this.props.myId}`}>個人檔案</Link>
                </li>
                <li>
                  <Link to={`/password/${this.props.myId}`}>密碼</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link>路線列表</Link>
            </li>

            <li>
              <Link>收藏文章</Link>
            </li>

            <li>
              <Link>我的課程</Link>
            </li>

            <li>
              <Link>商品管理</Link>
            </li>
          </ul>
        </Col>
      </>
    );
  }
}

export default Sidebar;

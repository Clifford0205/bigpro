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
  Nav,
} from 'react-bootstrap';
// import PathNow from '../component/PathNow';
import Sidebar from '../component/Sidebar';
import DetailNav from '../component/DetailNav';
import './edit.scss';
import { NONAME } from 'dns';

class road extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NavTitle1: '我收藏的路線',
      NavTitle2: '我發起的路線',
      NavTitle3: '我騎過的路線',
      NavTitle4: '所有路線',
      nowPage: false,
      dpType: 'none',
    };
  }

  async componentDidMount() {
    try {
      let id = this.props.match.params.id;
      console.log(id);
      this.setState({ id: id });
      const response = await fetch(`http://localhost:5555/member/${id}`, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      });

      // if (!response.ok) throw new Error(response.statusText);

      const jsonObject = await response.json();

      console.log(jsonObject);
      await this.setState({
        myMemberData: jsonObject,
        m_photo: jsonObject[0].m_photo,
        m_name: jsonObject[0].m_name,
        old_password: jsonObject[0].m_password,
      });
    } catch (e) {
      console.log(e);
    } finally {
    }
  }

  handleTitleClick = () => {
    this.setState({ nowPage: true });
    document.querySelector('.dataArea1').classList.add('show');
  };

  render() {
    return (
      <>
        <Container className="member_edit">
          <Row>
            <Sidebar
              src={this.state.m_photo}
              name={this.state.m_name}
              myId={this.state.id}
            />

            <Col style={{ marginTop: '200px' }}>
              <DetailNav
                title1={this.state.NavTitle1}
                title2={this.state.NavTitle2}
                title3={this.state.NavTitle3}
                title4={this.state.NavTitle4}
                handleTitleClick={this.handleTitleClick}
              />

              <div className="dataArea1" style={{ display: this.state.dbType }}>
                123456
              </div>

              <div className="dataArea1">987654321</div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default road;

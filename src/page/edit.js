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
import './edit.scss';

const edit = () => (
  <>
    <Container className="member_edit">
      <Row>
        <Col sm={4}>
          <div className="myPhoto">
            <img src="" />
          </div>

          <div className="userName">我的名字</div>

          <ul className="list-unstyled">
            <li>
              <Link>編輯會員資料</Link>
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

        <Col sm={8}>
          <div className="member-title">
            <h4>我的個人檔案</h4>
          </div>
        </Col>
      </Row>
    </Container>
  </>
);

export default edit;

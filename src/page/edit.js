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

class edit extends React.Component {
  constructor() {
    super();
    this.state = {
      memberData: [],
    };
  }

  async componentDidMount() {
    try {
      let id = this.props.location.pathname.slice(8);
      // let id = this.props.location.href.split('/')[4];

      const response = await fetch(`http://localhost:5555/member/${id}`, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      });

      if (!response.ok) throw new Error(response.statusText);

      const jsonObject = await response.json();

      console.log(jsonObject);
      await this.setState({ memberData: jsonObject });
    } catch (e) {
      console.log(e);
    } finally {
    }
  }

  upload = () => {
    document.getElementById('selectImage').click();
  };

  handlepicChange = e => {
    // console.log(e.target.files[0]);
    console.log(e.target.files[0]);
    this.fileInfo(e.target.files[0]);
    this.setState({ m_photo: e.target.files[0] });
  };

  fileInfo(theFile) {
    var reader = new FileReader();
    reader.readAsDataURL(theFile);
    reader.addEventListener('loadend', function(event) {
      //console.log(event.target.result);
      //<img src="" class="" />
      var photo = document.querySelector('.thumb2');
      photo.setAttribute('src', event.target.result);
      // console.log(event.target.result);
    });
  }

  render() {
    return (
      <>
        <Container className="member_edit">
          <Row>
            <Col sm={4} className="sidebar">
              <div className="myPhoto">
                <img src="" className="" />
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
              <div className="myProfile">
                <div className="member-title">
                  <h4 className="p-1">我的個人檔案</h4>
                </div>

                <div className="d-flex">
                  <ul className="list-unstyled textpart flex-grow-1">
                    <li>
                      姓名 <input type="text" />
                    </li>
                    <li>
                      手機號碼 <input type="number" />
                    </li>

                    <li>
                      帳號(電子郵件) <input type="text" />
                    </li>
                    <li>
                      生日 <input type="date" />
                    </li>
                    <li>
                      城市 <input type="text" />
                    </li>
                    <li>
                      地區 <input type="text" />
                    </li>
                    <li>
                      路段 <textarea name="" id="" cols="30" rows="10" />
                    </li>
                  </ul>

                  <div className="flex-grow-1 text-center">
                    <div className="myPhoto mx-auto">
                      <img src="" className="thumb2" />
                    </div>

                    <Button variant="secondary mt-5" onClick={this.upload}>
                      上傳圖片
                    </Button>

                    <div className="mt-3">檔案限制: .JPEG, .PNG</div>
                    <div>
                      <input
                        type="file"
                        onChange={this.handlepicChange}
                        name="avatar"
                        className="m-auto d-none"
                        id="selectImage"
                        ref={el => (this.input = el)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default edit;

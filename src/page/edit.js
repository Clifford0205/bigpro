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
import TWzipcode from 'react-twzipcode';

class edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myMemberData: [{}],

      m_name: '',
      m_mobile: '',
      m_email: '',
      m_birthday: '',
      m_city: '',
      m_town: '',
      m_address: '',
      m_photo: '',
    };
    this.newMyemberData = {};
  }

  async componentDidMount() {
    try {
      let id = this.props.match.params.id;
      console.log(id);
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
        m_name: jsonObject[0].m_name,
        m_mobile: jsonObject[0].m_mobile,
        m_email: jsonObject[0].m_email,
        m_birthday: jsonObject[0].m_birthday2,
        m_city: jsonObject[0].m_city,
        m_town: jsonObject[0].m_town,
        m_address: jsonObject[0].m_address,
        m_photo: jsonObject[0].m_photo,
      });
    } catch (e) {
      console.log(e);
    } finally {
    }
  }

  upload = () => {
    document.getElementById('selectImage').click();
  };

  handleFormInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({ [name]: value }, () => console.log(this.state));
    // this.newMyemberData[name] = value;
    // console.log('newMyemberData');
    // console.log(this.newMyemberData);
  };

  handlepicChange = e => {
    // console.log(e.target.files[0]);
    console.log(e.target.files[0]);
    this.fileInfo(e.target.files[0]);
    this.setState({ new_photo: e.target.files[0] });
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

  handleChange = data => {
    this.setState({ m_city: data.county });
    this.setState({ m_town: data.district });
    console.log(this.state);
  };

  render() {
    return (
      <>
        <Container className="member_edit">
          <Row>
            <Col sm={4} className="sidebar">
              <div className="myPhoto">
                <img src={this.state.m_photo} className="originPhoto" />
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
                      姓名
                      <input
                        type="text"
                        value={this.state.m_name}
                        name="m_name"
                        onChange={this.handleFormInputChange}
                      />
                    </li>
                    <li>
                      手機號碼
                      <input
                        type="text"
                        value={this.state.m_mobile}
                        name="m_mobile"
                        onChange={this.handleFormInputChange}
                      />
                    </li>

                    <li>
                      帳號(電子郵件){' '}
                      <input
                        type="text"
                        value={this.state.m_email}
                        name="m_email"
                        onChange={this.handleFormInputChange}
                      />
                    </li>
                    <li>
                      生日{' '}
                      <input
                        type="date"
                        value={this.state.m_birthday}
                        name="m_mobile"
                        onChange={this.handleFormInputChange}
                      />
                    </li>
                    <li>
                      城市{' '}
                      <input
                        type="text"
                        value={this.state.m_city}
                        name="m_city"
                        onChange={this.handleFormInputChange}
                      />
                    </li>
                    <li>
                      地區{' '}
                      <input
                        type="text"
                        value={this.state.m_town}
                        name="m_town"
                        onChange={this.handleFormInputChange}
                      />
                    </li>
                    <div>
                      <TWzipcode
                        css={[
                          'form-control county-sel mb-3',
                          'form-control district-sel',
                          'form-control zipcode',
                        ]}
                        handleChangeCounty={this.handleChange}
                        handleChangeDistrict={this.handleChange}
                        handleChangeZipcode={this.handleChange}
                        countyValue={this.state.m_city}
                        districtValue={this.state.m_town}
                      />
                    </div>

                    <li>
                      路段
                      <input
                        name=""
                        id=""
                        value={this.state.m_address}
                        name="m_address"
                        onChange={this.handleFormInputChange}
                      />
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
                <div className="text-center">
                  <Button
                    variant="secondary m-auto"
                    onClick={this.handleModalFormInputSave}
                  >
                    修改資料
                  </Button>
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

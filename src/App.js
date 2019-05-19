import React from 'react';
import Install from './component/Install';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import edit from './page/edit';
import password from './page/password';
import product from './page/product';
import news from './page/news';
import course from './page/course';
import road from './page/road';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Install />

        <Router>
          <>
            <Switch>
              <Route path="/member/:id" component={edit} />
              <Route path="/password/:id" component={password} />
              <Route path="/product/:id" component={product} />
              <Route path="/course/:id" component={course} />
              <Route path="/news/:id" component={news} />
              <Route path="/road/:id" component={road} />
            </Switch>
          </>
        </Router>
      </>
    );
  }
}

export default App;

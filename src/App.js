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
              <Route path="/member" component={edit} />
            </Switch>
          </>
        </Router>
      </>
    );
  }
}

export default App;

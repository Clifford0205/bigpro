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

class App extends React.Component {
  render() {
    return (
      <>
        <Install />

        <Router>
          <>
            <Switch>
              <Route exact path="/member" component={edit} />
            </Switch>
          </>
        </Router>
      </>
    );
  }
}

export default App;

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import {CoreLayout} from 'app/layouts';
import {Home} from 'app/modules';

class AppRoutes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={CoreLayout}>
          <IndexRoute component={Home}/>
        </Route>
      </Router>
    );
  }
}

export default AppRoutes;

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { store, history } from './store/prepare-base';
import AppRoutes from './route';
import './style/style.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider>
        <AppRoutes history={history}/>
      </Provider>
    );
  }
}

ReactDOM.render(<Main/>, document.getElementById('app-container'));

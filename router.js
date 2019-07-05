import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Main from './components/Main';
import Details from './components/Details';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="main" component={Main} title="IMDB" initial />
        <Scene key="details" component={Details} />
      </Scene>
    </Router>
  );
};

  export default RouterComponent;

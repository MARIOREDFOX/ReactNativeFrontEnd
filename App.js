import React from 'react';
import Navigator from './src/Navigator';
import Login from './src/Screens/Login/Login';
import Signup from './src/Screens/Signup/Signup';


export default class App extends React.Component {
  render() {
    return(
      <Navigator />
    )
  }
}


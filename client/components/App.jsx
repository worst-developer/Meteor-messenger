import 'normalize.css/normalize.css';
import React, { Component } from 'react';
import Header from './Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Header/>
      </MuiThemeProvider>
);
  }
}

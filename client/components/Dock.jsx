import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';

export default class Dock extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  render() {
    return(
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    )
  }
}

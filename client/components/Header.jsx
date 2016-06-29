import React, { Component } from 'react';
import { AppBar, IconButton } from 'material-ui/AppBar';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

export default class Header extends Component {
  constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}
handleClick(e) {
  e.preventDefault();
  window.console.log('clicked');
}

  // handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
        <AppBar
        title="Title"
        iconElementLeft={ <IconButton onTouchTap={ this.handleClick }  >
                  <MoreVertIcon/>
                     </IconButton> }
        />
);
  }
}

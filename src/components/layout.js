import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

// edit

export default Layout; 
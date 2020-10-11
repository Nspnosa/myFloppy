import React from 'react';

class FileOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xPos: '0px',
      yPos: '0px',
      showMenu: false,
    };
  }
  render() {
    if (!this.state.showMenu) {
      return null;
    }

    return <div></div>;
  }
}

export default FileOptions;

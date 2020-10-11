import React from 'react';
import './File.css';

class File extends React.Component {
  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickHandlerDelete = this.onClickHandlerDelete.bind(this);
    this.state = {
      downloading: false,
      deleting: false,
    };
  }

  _arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  onClickHandler(event) {
    this.setState(() => {
      return { downloading: true };
    });
    fetch(`api/data/${this.props.fileId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.props.authorization}`,
      },
    })
      .then((data) => {
        const fileName = data.headers
          .get('content-disposition')
          .split('; ')[1]
          .split('"')[1];
        const fileType = data.headers.get('content-type');
        return Promise.all([fileName, data.arrayBuffer(), fileType]);
      })
      .then(([fileName, data, fileType]) => {
        const link = document.createElement('a');
        link.setAttribute(
          'href',
          `data:${fileType};base64,` + this._arrayBufferToBase64(data)
        );
        link.setAttribute('download', fileName);
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        this.setState((prevState) => {
          return { downloading: false };
        });
      })
      .catch((error) => {
        this.setState(() => {
          return { downloading: false };
        });
      });
  }

  onClickHandlerDelete(event) {
    this.setState(() => {
      return { deleting: true };
    });
    fetch(`api/data/${this.props.fileId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${this.props.authorization}`,
      },
    })
      .then((data) => {
        return Promise.all([data.json(), data.status]);
      })
      .then(([data, status]) => {
        this.props.updateComp();
      })
      .catch(() => {
        this.setState(() => {
          return { deleting: true };
        });
      });
  }

  render() {
    return (
      <div className="file-container-class">
        {/* <div className="file-container-logo-container"></div> */}
        <div
          style={{
            display:
              this.state.downloading || this.state.deleting ? '' : 'none',
            width: 140,
          }}
          className="file-container-info-container"
        >
          <p>
            <strong>
              {this.state.downloading ? 'Downloading' : 'Deleting'}
            </strong>
          </p>
        </div>
        <div className="file-container-info-container">
          <p className="file-container-info-label">
            <strong>Name:</strong> {this.props.fileName.split('.')[0]}
          </p>
          <p className="file-container-info-label">
            <strong>Extension:</strong> {this.props.fileName.split('.')[1]}
          </p>
          <p className="file-container-info-label">
            <strong>Size:</strong> {this.props.fileSize} B
          </p>
          <p className="file-container-info-label">
            {/* Uploaded on: {this.props.uploadedOn.split('T')[0]} */}
            <strong>Uploaded on:</strong> {this.props.uploadedOn.split('T')[0]}
          </p>
        </div>
        <div className="file-container-button-container">
          <button
            onClick={this.onClickHandler}
            disabled={this.state.downloading || this.state.deleting}
          >
            download
          </button>
          <button
            onClick={this.onClickHandlerDelete}
            disabled={this.state.downloading || this.state.deleting}
          >
            delete
          </button>
        </div>
      </div>
    );
  }
}

export default File;

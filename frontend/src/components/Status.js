import React from 'react';
import './Status.css';

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.state = {
      file: '',
      uploading: false,
      percentage: 0,
      errorMessage: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  handleClick() {
    document.getElementById('status-file-upload-button').click();
  }
  onChangeHandler(event) {
    const files = Array.from(event.target.files);
    const formData = new FormData();
    if (!files[0]) {
      return;
    }
    const inputFile = Array.from(
      document.getElementsByClassName('status-upload-button')
    )[0];
    inputFile.value = null;
    formData.append('file', files[0]);
    this.setState(() => {
      return { uploading: true, errorMessage: '' };
    });
    fetch('api/data/upload', {
      method: 'POST',
      headers: { Authorization: `Bearer ${this.props.authorization}` },
      body: formData,
    })
      .then((data) => Promise.all([data.json(), data.status]))
      .then(([data, status]) => {
        let error = '';
        if (status === 200) {
          this.setState(() => {
            return { errorMessage: '' };
          });
          this.props.updateComp();
        } else {
          error = typeof data.msg === 'object' ? data.msg.message : data.msg;
        }
        this.setState(() => {
          return { uploading: false, errorMessage: error };
        });
      })
      .catch((err) => {
        this.setState(() => {
          return { uploading: false, errorMessage: 'Could not upload file' };
        });
      });
  }

  render() {
    return (
      <div className="status-main-container">
        <div className="status-container">
          <div className="status-header-container">
            <div className="status-header-logo-main-container">
              <div className="status-header-logo-container-outer"></div>
              <div className="status-header-logo-container-inner">
                <h2>💾</h2>
              </div>
            </div>
            <h2>{this.state.uploading ? 'Uploading file' : 'MyFloppy'}</h2>
            <form>
              <input
                type="file"
                className="status-upload-button"
                style={{ visibility: 'hidden' }}
                id="status-file-upload-button"
                onChange={this.onChangeHandler}
              />
              <input
                type="button"
                className="status-upload-button"
                disabled={this.state.uploading}
                onClick={this.handleClick}
                value="+"
              />
            </form>
          </div>
          <div className="status-bar-container">
            <div className="status-bar-container-secondary">
              <div className="status-bar-container-outer"></div>
              <div
                className="status-bar-container-inner"
                style={{
                  width: `${Math.floor(
                    (this.props.userUsed / this.props.userLimit) * 100
                  )}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="status-storage-container">
            <div className="status-used-storage">
              <h5>
                {(this.props.userUsed / 1024 / 1000).toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}{' '}
                MB
              </h5>
            </div>
            <div
              className="status-used-storage"
              style={{
                display: this.state.errorMessage === '' ? 'none' : '',
                color: 'white',
              }}
            >
              <h5>{this.state.errorMessage}</h5>
            </div>
            <div className="status-total-storage">
              <h5>
                {(this.props.userLimit / 1024 / 1000).toLocaleString(
                  undefined,
                  { maximumFractionDigits: 2 }
                )}{' '}
                MB
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Status;

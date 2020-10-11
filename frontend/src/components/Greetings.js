import React from 'react';
import './Signup.css';

class Greetings extends React.Component {
  componentDidUpdate() {
    console.log('updated');
  }
  render() {
    if (!this.props.display) {
      return null;
    }
    return (
      <div className="signup-main-container" style={{ height: 275 }}>
        <div className="login-container">
          <div className="login-container-header">
            <h3 className="login-header-title">Welcome 💾!</h3>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              padding: 20,
            }}
          >
            <h3>
              Enjoy a whopping 1.44MB of free cloud storage and feel like you
              are right back in 1998.
            </h3>
            <h5 style={{ marginTop: 0 }}>
              Have an account? <a href="/login">Log in.</a>
            </h5>
            <h5 style={{ marginTop: 0 }}>
              First time user? <a href="/signup">Sign up.</a>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Greetings;

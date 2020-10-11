import React from 'react';
import Login from './Signup';
import './Signup.css';

class LoginRecovery extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.state = {
      email: '',
      loginError: '',
    };
  }

  onSubmitHandler(event) {
    event.preventDefault();
    fetch('/api/loginrecovery', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
      }),
    })
      .then((data) => Promise.all([data.json(), data.status]))
      .then(([data, status]) => {
        if (status === 200) {
          this.setState(() => {
            return { loginError: '' };
          });
          this.props.history.push('/'); //go to login
        } else {
          return Promise.reject(data.msg);
        }
      })
      .catch((error) => {
        //if data.json was not
        if (typeof error === 'string') {
          this.setState(() => {
            return { loginError: error };
          });
        }
      });
  }

  onChangeHandler(event) {
    const { name, value } = event.target;
    this.setState((prevState, prevProps) => {
      return { [name]: value };
    });
  }

  componentDidMount() {
    if (this.props.userLogged) {
      this.props.history.push('/');
    }
  }

  componentDidUpdate() {
    if (this.props.userLogged) {
      this.props.history.push('/');
    }
  }

  render() {
    const errorMessage = () => {
      if (this.state.loginError !== '') {
        return (
          <p style={{ color: '#d00', fontSize: 'small' }}>
            {this.state.loginError}
          </p>
        );
      }
      return null;
    };

    return (
      <div className="recovery-main-container">
        <div className="login-container">
          <div className="login-container-header">
            <h3 className="login-header-title">Forgot password</h3>
          </div>
          <div className="login-form-container">
            <form className="login-form" onSubmit={this.onSubmitHandler}>
              <div>
                <p className="form-input-label-p">Email:</p>
                <input
                  name="email"
                  type="email"
                  className="form-input-element"
                  required
                  onChange={this.onChangeHandler}
                />
              </div>
              <div>
                <input type="submit" className="form-input-login-button" />
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                {errorMessage()}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginRecovery;

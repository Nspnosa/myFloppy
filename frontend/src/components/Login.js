import React from 'react';
import './Login.css';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.state = {
      password: '',
      email: '',
      loginError: '',
    };
  }

  onSubmitHandler(event) {
    event.preventDefault();
    fetch('api/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((data) => Promise.all([data.json(), data.status]))
      .then(([data, status]) => {
        if (status === 200) {
          localStorage.setItem('myDiskApplicationLoginInfo', data.token);
          this.setState(() => {
            return { loginError: '' };
          });
          this.props.logInUser(data.token); //set login App state
          this.props.history.push('/'); //go to main site
        } else {
          return Promise.reject(data.msg);
        }
      })
      .catch((error) => {
        this.setState(() => {
          return { loginError: error };
        });
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
      <div className="login-main-container">
        <div className="login-container">
          <div className="login-container-header">
            <h3 className="login-header-title">Log in</h3>
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
                <p className="form-input-label-p" required>
                  Password:
                </p>
                <input
                  name="password"
                  type="password"
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
            <button
              onClick={() => this.props.history.push('/loginrecovery')}
              className="login-forgot-password-button"
            >
              Forgot password?
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;

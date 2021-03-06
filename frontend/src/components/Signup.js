import React from 'react';
import './Signup.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.state = {
      password: '',
      email: '',
      name: '',
      'last-name': '',
      loginError: '',
    };
  }

  onSubmitHandler(event) {
    event.preventDefault();
    fetch('api/signup', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        'last-name': this.state['last-name'],
      }),
    })
      .then((data) => Promise.all([data.json(), data.status]))
      .then(([data, status]) => {
        if (status === 200) {
          this.setState(() => {
            return { loginError: '' };
          });
          this.props.history.push('/login'); //go to main site
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
      //go to main site if logged in
      this.props.history.push('/');
    }
  }

  componentDidUpdate() {
    if (this.props.userLogged) {
      //go to main site if logged in
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
      <div className="signup-main-container">
        <div className="login-container">
          <div className="login-container-header">
            <h3 className="login-header-title">Sign up</h3>
          </div>
          <div className="login-form-container">
            <form className="login-form" onSubmit={this.onSubmitHandler}>
              <div>
                <div>
                  <p className="form-input-label-p">Name:</p>
                  <input
                    name="name"
                    type="text"
                    className="form-input-element"
                    required
                    onChange={this.onChangeHandler}
                  />
                </div>
                <p className="form-input-label-p">Last name:</p>
                <input
                  name="last-name"
                  type="text"
                  className="form-input-element"
                  required
                  onChange={this.onChangeHandler}
                />
              </div>
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
                  type="password"
                  name="password"
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

export default Login;

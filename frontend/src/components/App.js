import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Signup from './Signup';
import Login from './Login';
import LoginRecovery from './LoginRecovery';
import NewPass from './NewPass';
import UserData from './UserData';
import Greetings from './Greetings';

import './App.css';
import './UserData.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      authorization: '',
      busy: false,
      credentialsChecked: false,
    };
    this.logOutUser = this.logOutUser.bind(this);
    this.logInUser = this.logInUser.bind(this);
    this.setStateBusy = this.setStateBusy.bind(this);
  }

  setStateBusy(busy) {
    this.setState((prevState, prevProps) => {
      return { busy };
    });
  }

  logOutUser() {
    this.setState((prevState, prevProps) => {
      localStorage.removeItem('myDiskApplicationLoginInfo');
      return { loggedIn: false, authorization: '' };
    });
  }

  logInUser(authorization) {
    this.setState((prevState, prevProps) => {
      return { loggedIn: true, authorization };
    });
  }

  async checkCredentials() {
    try {
      this.setState(() => {
        return { credentialsChecked: false };
      });
      console.log('runnig check credentials');
      const loginData = localStorage.getItem('myDiskApplicationLoginInfo');
      if (loginData) {
        const dataJSON = await fetch('/api/verify', {
          method: 'POST',
          headers: { Authorization: `Bearer ${loginData}` },
        });
        const status = dataJSON.status;
        const data = await dataJSON.json();

        if (status === 200) {
          this.setState(() => {
            return {
              loggedIn: true,
              authorization: loginData,
            };
          });
        } else if (status !== 500) {
          // this could indicate the user is offline
          localStorage.removeItem('myDiskApplicationLoginInfo'); //delete data if invalid
        }
      }
    } catch (error) {}
    this.setState(() => {
      return { credentialsChecked: true };
    });
  }

  componentDidMount() {
    this.checkCredentials();
  }

  render() {
    const getFiles = () => {
      return (
        <Route
          exact
          path="/"
          render={(props) =>
            this.state.loggedIn ? (
              <UserData
                {...props}
                userLogged={this.state.loggedIn}
                authorization={this.state.authorization}
              />
            ) : (
              <Greetings display={this.state.credentialsChecked} />
            )
          }
        />
      );
    };

    return (
      <div>
        <Header userLogged={this.state.loggedIn} logOutUser={this.logOutUser} />
        <div className="app-container">
          <Switch>
            <Route
              exact
              path="/login"
              render={(props) => (
                <Login
                  {...props}
                  logInUser={this.logInUser}
                  userLogged={this.state.loggedIn}
                />
              )}
            />
            <Route
              exact
              path="/signup"
              render={(props) => (
                <Signup {...props} userLogged={this.state.loggedIn} />
              )}
            />
            <Route
              exact
              path="/loginrecovery"
              render={(props) => (
                <LoginRecovery {...props} userLogged={this.state.loggedIn} />
              )}
            />
            <Route
              exact
              path="/resetaccount/:token"
              render={(props) => (
                <NewPass {...props} userLogged={this.state.loggedIn} />
              )}
            />
            {getFiles()}
            <Route
              path="/"
              render={() => {
                return (
                  <div className="user-data-container">
                    <h2>
                      Not Found <a href="/"> click here to go back</a>
                    </h2>
                  </div>
                );
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

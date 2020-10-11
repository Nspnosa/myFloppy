import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(event) {
    this.props.logOutUser();
  }

  render() {
    return (
      <div className="header-main-container">
        <div className="header-container">
          <div className="header-logo-container">
            <Link to="/" className="header-link">
              MyFloppy
            </Link>
            {/* <a href="/" className="header-link">
              MyFloppy
            </a> */}
          </div>
          <div className="header-navigation-container">
            <Link
              to="/login"
              className="header-link"
              style={{
                marginRight: 20,
                display: this.props.userLogged ? 'none' : '',
              }}
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="header-link"
              style={{ display: this.props.userLogged ? 'none' : '' }}
            >
              Sign up
            </Link>
            <Link
              to="/"
              className="header-link"
              style={{ display: this.props.userLogged ? '' : 'none' }}
              onClick={this.onClickHandler}
            >
              Log out
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

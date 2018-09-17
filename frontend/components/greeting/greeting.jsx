import React from 'react';

import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.redirectBookings = this.redirectBookings.bind(this);
  }

  showMenu(e) {
    e.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  handleLogout() {
    this.props.logout();
  }

  redirectBookings() {
    this.props.history.push("/bookings");
  }

  render() {
    const sessionLinks = () => (
      <nav className="header-wrap">
        <img className="root-background" src={window.background} />
        <div className="header-nav">
          <Link className="header-logo" to='/' >
            <img className="localhost-logo" src={window.logoURL} />
          </Link>
          <div className="login-signup">
            <div className="login-signup-button" onClick={() => this.props.openModal('signup')}>Sign up</div>
            <div className="login-signup-button" onClick={() => this.props.openModal('login')}>Log in</div>
          </div>
        </div>
      </nav>
    );

    const greetingLink = () => (
      <nav className="header-wrap">
        <img className="root-background" src={window.background} />
        <div className="header-nav">
        <Link className="header-logo" to='/' >
          <img className="localhost-logo" src={window.logoURL} />
        </Link>
        <section className="login-signup">
          <div className="login-signup-button-prof" onClick={this.showMenu}>
            <img className='profile-picture' src={this.props.currentUser.img_url} />
          </div>

          {
            this.state.showMenu
            ? (
              <div className="dropdown">
                <div className="dropdown-comp">My Profile</div>
                <div className="dropdown-comp" onClick={this.redirectBookings}>Manage Bookings</div>
                <div className="dropdown-comp" onClick={this.handleLogout}> Log Out </div>
              </div>
            )
            : (
              null
            )
          }
        </section>
        </div>
      </nav>
    );
    return this.props.currentUser ? greetingLink() : sessionLinks();
  }
}

export default Greeting;

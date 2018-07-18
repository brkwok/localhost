import React from 'react';

import { Link } from 'react-router-dom';

class ShowNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
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

  render() {
    const sessionLinks = () => (
      <nav className="header-wrap-show">
        <div className="header-nav-other">
          <Link className="header-logo" to='/' >
            <img src={window.logoURL} />
          </Link>
          <div className="login-signup">
            <div className="login-signup-button-other" onClick={() => this.props.openModal('signup')}>Sign up</div>
            <div className="login-signup-button-other" onClick={() => this.props.openModal('login')}>Log in</div>
          </div>
        </div>
      </nav>
    );

    const greetingLink = () => (
      <nav className="header-wrap-show">
        <div className="header-nav-other">
        <Link className="header-logo" to='/' >
          <img src={window.logoURL} />
        </Link>
        <section className="login-signup">
          <div className="login-signup-button-prof-other" onClick={this.showMenu}>
            <img className='profile-picture' src={this.props.currentUser.img_url} />
          </div>

          {
            this.state.showMenu
            ? (
              <div className="dropdown">
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

export default ShowNav;

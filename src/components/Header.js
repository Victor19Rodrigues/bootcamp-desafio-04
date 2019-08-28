import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <img className="logo" src="https://i.imgur.com/KDIDiSE.png" />
          <div>
            <span>Meu perfil</span>
            <img
              className="avatar"
              src="https://randomuser.me/api/portraits/lego/6.jpg"
            />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;

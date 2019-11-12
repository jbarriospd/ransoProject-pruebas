import React from 'react';
import '../assets/styles/components/Header.scss';
// import logo from '../assets/static/logo-platzi-video-BW2.png';
// import userIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className="header">
    <i className="fas fa-bars header__menu"></i>
    <div className="header__search">
      <input className="header__input" placeholder="Buscar..." />
    </div>
    <div className="header__avatar">
      <div className="dropdown">
        <ul className="dropdown__list">
          <li className="dropdown__list-item">
            <span className="dropdown__icon"><i className="far fa-user"></i></span>
            <span className="dropdown__title">Mi Perfil</span>
          </li>
          <li className="dropdown__list-item">
            <span className="dropdown__icon"><i className="fas fa-clipboard-list"></i></span>
            <span className="dropdown__title">Mi Cuenta</span>
          </li>
          <li className="dropdown__list-item">
            <span className="dropdown__icon"><i className="fas fa-sign-out-alt"></i></span>
            <span className="dropdown__title">Cerrar Sesión</span>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;

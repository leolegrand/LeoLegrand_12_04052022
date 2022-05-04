import React from 'react'
import '../../styles/navigation.css'
import logo from '../../assets/img/logo.png'

const Navigation = () => {
  return (
    <div>
      <nav className="main-nav">
        <div className="main-nav__logo">
          <img src={logo} alt="logo" className="main-nav__logo-img" />
          <h1 className="main-nav__logo-title">SportSee</h1>
        </div>
        <ul className="main-nav__list">
          <li className="main-nav__list-item">Accueil</li>
          <li className="main-nav__list-item">Profil</li>
          <li className="main-nav__list-item">Réglage</li>
          <li className="main-nav__list-item">Communauté</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation

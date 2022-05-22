import React from 'react'
import '../../styles/navigation-vertical.css'

import meditating from '../../assets/img/icon_meditating.png'
import swimmer from '../../assets/img/icon_swimmer.png'
import dumbbell from '../../assets/img/icon_dumbbell.png'
import bike from '../../assets/img/icon_bike.png'

const NavigationVertical = () => {
  return (
    <div className="navigation-vertical">
      <nav>
        <ul className="navigation-vertical__list">
          <li className="navigation-vertical__list-item">
            <img src={meditating} alt="" />{' '}
          </li>
          <li className="navigation-vertical__list-item">
            <img src={swimmer} alt="" />{' '}
          </li>
          <li className="navigation-vertical__list-item">
            <img src={bike} alt="" />{' '}
          </li>
          <li className="navigation-vertical__list-item">
            <img src={dumbbell} alt="" />{' '}
          </li>
        </ul>
      </nav>
      <p className="navigation-vertical__copyright">Copyright, SportSee 2020</p>
    </div>
  )
}

export default NavigationVertical

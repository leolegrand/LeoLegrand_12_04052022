import React from 'react'
import '../../styles/keydata.css'
import caloriesIcon from '../../assets/img/icon_calories.png'
import lipidIcon from '../../assets/img/icon_lipid.png'
import glucidIcon from '../../assets/img/icon_glucid.png'
import proteinIcon from '../../assets/img/icon_protein.png'
import PropTypes from 'prop-types'

const KeyData = ({ label, value }) => {
  const stats = [
    {
      label: 'calorieCount',
      frenchTraduction: 'Calories',
      unit: 'kCal',
      icon: caloriesIcon,
    },

    {
      label: 'proteinCount',
      frenchTraduction: 'Proteines',
      unit: 'g',
      icon: proteinIcon,
    },

    {
      label: 'carbohydrateCount',
      frenchTraduction: 'Glucides',
      unit: 'g',
      icon: glucidIcon,
    },

    {
      label: 'lipidCount',
      frenchTraduction: 'Lipides',
      unit: 'g',
      icon: lipidIcon,
    },
  ]

  return stats.map((stat, index) =>
    stat.label === label ? (
      <div className="key-data" key={index}>
        <div className={'key-data__icon key-data__icon--' + label}>
          <img src={stat.icon} alt="cal" />
        </div>
        <div className="key-data__label">
          <h2>
            {value.toLocaleString('en-US')}
            {stat.unit}
          </h2>
          <p>{stat.frenchTraduction}</p>
        </div>
      </div>
    ) : null
  )
}

KeyData.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default KeyData

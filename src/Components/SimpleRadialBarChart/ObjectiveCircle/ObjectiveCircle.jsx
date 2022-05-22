import React from 'react'
import '../../../styles/objectivecircle.css'
import PropTypes from 'prop-types'

const ObjectiveCircle = ({ value }) => {
  return (
    <div className="circle">
      <span className="circle__percentage">{value}%</span>
      <p className="circle__body">de votre objectif</p>
    </div>
  )
}

ObjectiveCircle.propTypes = {
  value: PropTypes.number.isRequired,
}

export default ObjectiveCircle

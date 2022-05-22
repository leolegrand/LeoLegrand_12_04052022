import React from 'react'
import '../../../styles/simplelinecharttooltip.css'
import PropTypes from 'prop-types'

// active : a boolean indicating whether the user's cursor hovers over the data
// payload : the data that should be displayed in the tooltip, by default it is the data coming from the graph
const SimpleLineChartTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="simplebarlinetooltip-wrapper">
        <div className="simplebarlinetooltip-content">
          <p className="simplebarlinetooltip-content__item">
            {payload[0].value} min
          </p>
        </div>
      </div>
    )
  }

  return null
}

SimpleLineChartTooltip.propTypes = {
  value: PropTypes.number,
  active: PropTypes.bool,
}

export default SimpleLineChartTooltip

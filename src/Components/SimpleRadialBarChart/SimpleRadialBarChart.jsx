import React from 'react'
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'

import ObjectiveCircle from './ObjectiveCircle/ObjectiveCircle'

import '../../styles/simpleradialbarchart.css'

const SimpleRadialBarChart = ({ value }) => {
  const score = [
    {
      fill: '#FF0000',
      value: value * 100,
      name: 'Score',
    },
    // The object bellow is invisible on the chart but necessary and serves as a reference point for the value to be displayed
    {
      fill: 'transparent',
      value: 100,
    },
  ]

  return (
    <div className="stats__kpi">
      <ObjectiveCircle value={value * 100} />
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          barSize={15}
          data={score}
          innerRadius="100%"
          startAngle={90}
          endAngle={450}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <RadialBar dataKey="value" cornerRadius={25} />
          <Legend
            dataKey="name"
            verticalAlign="top"
            align="left"
            iconSize={0}
            wrapperStyle={{ color: 'black' }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

SimpleRadialBarChart.propTypes = {
  value: PropTypes.number.isRequired,
}

export default SimpleRadialBarChart

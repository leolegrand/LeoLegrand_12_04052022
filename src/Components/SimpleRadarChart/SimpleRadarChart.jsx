import React from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'

const SimpleRadarChart = ({ data }) => {
  // Formats the polar angle axis to get a kind instead of a number
  const formatPolarAngleAxis = (number) => {
    const abilities = new Array(6)
    abilities[1] = 'Cardio'
    abilities[2] = 'Energie'
    abilities[3] = 'Endurance'
    abilities[4] = 'Force'
    abilities[5] = 'Vitesse'
    abilities[6] = 'Intensité'
    return abilities[number]
  }

  // formatPolarAngleAxis function can be automated, but an eng-fr translation system must be implemented in the project.
  // By choice, this option has not been integrated for the moment.
  // The logic of the code is contained in the comment below
  //
  // const abilities = new Array(6)
  // Object.entries(data.kind).map(([key, value]) => (abilities[key] = value.TRANSLATED))
  //
  // const formatPolarAngleAxis = (number) => {
  //   return abilities[number]
  // }

  return (
    <div className="stats__radar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data.data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={formatPolarAngleAxis}
            dy={3}
            stroke="white"
            tick={{ fontSize: 10 }}
            tickSize={10}
            tickLine={false}
          />

          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

SimpleRadarChart.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SimpleRadarChart

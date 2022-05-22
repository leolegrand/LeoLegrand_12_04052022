import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

import PropTypes from 'prop-types'
import SimpleLineChartTooltip from './SimpleLineChartTooltip/SimpleLineChartTooltip'

import '../../styles/simplelinechart.css'

const SimpleLineChart = ({ data }) => {
  // Formats the x-axis to get the first letter of a day of the week rather than a number
  // 1 = Monday, 2 = Tuesday...
  const formatXAxis = (number) => {
    const weekday = new Array(7)
    weekday[1] = 'L'
    weekday[2] = 'M'
    weekday[3] = 'M'
    weekday[4] = 'J'
    weekday[5] = 'V'
    weekday[6] = 'S'
    weekday[7] = 'D'
    return weekday[number]
  }
  return (
    <div className="stats__goals">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data.sessions}
          margin={{
            top: 15,
            right: 20,
            left: 20,
            bottom: 10,
          }}
        >
          <Tooltip
            content={<SimpleLineChartTooltip />}
            cursor={{
              strokeLinecap: 'square',
              stroke: 'black',
              strokeWidth: 79,
              height: 10000,
              strokeOpacity: 0.1,
            }}
          />
          <Legend
            verticalAlign="top"
            iconSize={0}
            wrapperStyle={{ fontSize: '14px' }}
          />
          <XAxis
            fontSize={12}
            minTickGap={2}
            dataKey="day"
            axisLine={false}
            tickLine={false}
            stroke="white"
            tickFormatter={formatXAxis}
          />

          <Line
            opacity={0.8}
            layout="vertical"
            strokeWidth={1.3}
            type="monotone"
            dataKey="sessionLength"
            name="Durée moyenne des sessions"
            stroke="white"
            dot=""
            activeDot={{
              stroke: 'rgba(255, 255, 255, 0.3)',
              strokeWidth: 10,
              r: 5,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

SimpleLineChart.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SimpleLineChart

import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'
import SimpleBarChartTooltip from './SimpleBarChartTooltip/SimpleBarChartTooltip'

const SimpleBarChart = ({ data }) => {
  // Formats the x-axis from a complete date by retrieving only the day;
  // day.slice can be modified from -1 to -2 to get the whole day number if required.
  const formatXAxis = (day) => {
    return day.slice(-1)
  }

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data.sessions}
          barGap="8"
          margin={{ top: 25, left: 25, right: 25, bottom: 25 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            tickLine={false}
            stroke="#9B9EAC"
            tickMargin={15}
            dataKey="day"
            tickFormatter={formatXAxis}
          />
          <YAxis
            yAxisId="kg"
            domain={['dataMin -2', 'dataMax +1']}
            allowDataOverflow={true}
            dataKey="kilogram"
            stroke="#9B9EAC"
            orientation="right"
            tickCount="4"
            axisLine={false}
            tickLine={false}
            tickMargin={40}
          />
          <YAxis yAxisId="cal" datakey="calories" hide={true} />
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            name="Poids (kg)"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
          <Bar
            yAxisId="cal"
            dataKey="calories"
            name="Calories brûlées (kCal)"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
          <Tooltip
            content={<SimpleBarChartTooltip />}
            cursor={{
              opacity: 0.5,
            }}
          />

          <Legend
            wrapperStyle={{ fontSize: 14 }}
            verticalAlign="top"
            align="right"
            height={100}
            iconType="circle"
            iconSize={8}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

SimpleBarChart.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SimpleBarChart

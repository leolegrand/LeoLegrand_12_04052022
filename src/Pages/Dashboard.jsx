import React from 'react'
import Navigation from '../Components/Navigation/Navigation'
import NavigationVertical from '../Components/NavigationVertical/NavigationVertical'
import SimpleBarChart from '../Components/SimpleBarChart/SimpleBarChart'
import SimpleLineChart from '../Components/SimpleLineChart/SimpleLineChart'
import KeyData from '../Components/KeyData/KeyData'
import SimpleRadarChart from '../Components/SimpleRadarChart/SimpleRadarChart'
import SimpleRadialBarChart from '../Components/SimpleRadialBarChart/SimpleRadialBarChart'
import { useParams } from 'react-router-dom'

import '../styles/dashboard.css'
import { useFetch } from '../services/useFetch'
import Loader from '../Components/Loader/Loader'
import Error404 from './Error404'

const Dashboard = () => {
  // get the user id that was passed as a URL parameter
  const { id: userId } = useParams(':id')

  // fetch the data of the user, using useFetch hook
  const {
    data: user,
    isLoading: userIsLoading,
    error: userNotFound,
  } = useFetch('http://localhost:3001/user/' + userId)

  const { data: activity, isLoading: activityIsLoading } = useFetch(
    'http://localhost:3001/user/' + userId + '/activity'
  )

  const { data: averageSessions, isLoading: averageSessionsIsLoading } =
    useFetch('http://localhost:3001/user/' + userId + '/average-sessions')

  const { data: performance, isLoading: performanceIsLoading } = useFetch(
    'http://localhost:3001/user/' + userId + '/performance'
  )

  // When all user data has been loaded, the page is generated
  if (userNotFound) {
    return <Error404 />
  }
  if (
    !userIsLoading &&
    !activityIsLoading &&
    !averageSessionsIsLoading &&
    !performanceIsLoading
  ) {
    return (
      <div className="div">
        <Navigation />
        <NavigationVertical />
        <section className="dashboard">
          <h2 className="dashboard__hello">
            Bonjour
            <div className="red"> {user.userInfos.firstName}</div>
          </h2>
          <p className="dashboard__recap">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>

          <div className="activies-wrapper">
            <div className="activities__main">
              <div className="weight">
                <h2>Activités quotidiennes</h2>
                <SimpleBarChart data={activity} />
              </div>
              <div className="stats">
                <SimpleLineChart data={averageSessions} />
                <SimpleRadarChart data={performance} />
                <SimpleRadialBarChart value={user.todayScore || user.score} />
              </div>
            </div>
            <div className="activities__key-data">
              {Object.entries(user.keyData).map(([key, value, index]) => (
                <KeyData label={key} value={value} key={key + index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  } else {
    return (
      <div className="div">
        <Navigation />
        <NavigationVertical />
        <Loader />
      </div>
    )
  }
}

export default Dashboard

import React from 'react'
import Loader from '../Components/Loader/Loader'
import Navigation from '../Components/Navigation/Navigation'
import NavigationVertical from '../Components/NavigationVertical/NavigationVertical'
import '../styles/error404.css'

const Error404 = () => {
  return (
    <div>
      <Navigation />
      <NavigationVertical />
      <section className="main">
        <Loader />
        <h1>404</h1>
        <h2>La page que vous cherchez n'existe pas</h2>
      </section>
    </div>
  )
}

export default Error404

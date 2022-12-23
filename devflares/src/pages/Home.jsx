import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Row from '../components/Row'
import requests from '../components/Requests'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      
      <Main />
      <Row title='Upcomig' fetchUrl={requests.requestUpcoming} />
      <Row title='Trending' fetchUrl={requests.requestTrending} />
      <Row title='Top Rated' fetchUrl={requests.requestTopRated} />
      <Row title='Popular' fetchUrl={requests.requestPopular} />
      <Row title='Horror' fetchUrl={requests.requestHorror} />

      <Footer />

    </div>
  )
}

export default Home

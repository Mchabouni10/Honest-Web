import React from 'react'
import Nav1 from './Nav1'
import Buildgift from './Buildgift'
import Holidaygifts from './Holidaygifts'
import TrendingNow from './TrendingNow'



function Home() {
  return (
    <div>
        <Nav1 />
        <Buildgift />
        <Holidaygifts />
        <TrendingNow />
    </div>
  )
}

export default Home
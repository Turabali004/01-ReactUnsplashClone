import React from 'react'
import { Navbar,Tabbar } from '../../components/navBar'
import Hero from '../hero'
import ImageCollection from '../imageCollection'

function Landing() {
  return (
    <div>
      <Navbar />
      <Tabbar/>
      <Hero/>
      <ImageCollection/>
    </div>
  )
}

export default Landing

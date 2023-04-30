import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Welcome from '../components/Welcome'


function Home() {
  return (
    <div>
        <Hero></Hero>
        <Welcome></Welcome>
        <About></About>
    </div>
  )
}

export default Home
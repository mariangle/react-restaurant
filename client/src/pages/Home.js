import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Cards from '../components/Cards'
import Welcome from '../components/Welcome'


function Home() {
  return (
    <div>
        <Hero></Hero>
        <Welcome></Welcome>
        <About></About>
        <Cards></Cards>
    </div>
  )
}

export default Home
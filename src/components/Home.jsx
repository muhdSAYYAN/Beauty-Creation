import React from 'react'
import Carosel from './homeComponents/Carosel'
import Bestsllers from './homeComponents/Bestsllers'
import Category from './homeComponents/Category'
import Footer from './homeComponents/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Carosel/>
      <Bestsllers/>
      <Category/>
      <Footer/>
    </div>
  )
}

export default Home

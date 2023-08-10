import React from 'react'
import './home.css'
import Background from '../../assets/background.png'

const home = () => {
  return (
    <div className='home' id='home'>
      <img src={Background} alt="bg" className='home__img' />
      <div className='container home__container'>

      </div>
    </div>
  )
}

export default home
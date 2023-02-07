import React from 'react'
import Subscibe from '../../components/Subscribe/Subscibe'
import Games from '../../components/Games/Games'
import Players from '../../components/Players/Players'
import Upcomming from '../../components/Upcomming/Upcomming'
import RegistrationFee from '../../components/RegistrationFee/RegistrationFee'
import Esports from '../../components/Esports/Esports'
import Recomended from '../../components/Recomended/Recomended'
import Serives from '../../components/Serives/Serives'
import Hero from '../../components/Hero/Hero'

const Home = () => {
  return (
    <>
      <Hero />
      <Serives />
      <Recomended />
      <Esports />
      <RegistrationFee />
      <Upcomming />
      <Players />
      <Games />
      <Subscibe />
    </>
  )
}

export default Home

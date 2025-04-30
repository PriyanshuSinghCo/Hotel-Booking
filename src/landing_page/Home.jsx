import React from 'react';
import Hero from '../components/Hero.jsx';
import FecturedDestination from "../components/FecturedDestination"
import ExclusiveOffers from "../components/ExclusiveOffers"
import Testimonial from "../components/Testimonial"


function Home() {
  return (
    <>
        <Hero />
        <FecturedDestination/>
        <ExclusiveOffers />
        <Testimonial />
    </>
  )
}

export default Home
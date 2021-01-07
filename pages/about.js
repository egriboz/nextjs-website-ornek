import Layout from '../components/layout'
import Head from 'next/head'

import React from 'react'
import AwesomeSlider from 'react-awesome-slider'

// import withAutoplay from 'react-awesome-slider/dist/autoplay'

// const AutoplaySlider = withAutoplay(AwesomeSlider)

function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>Custom Page Title</title>
      </Head>
      <h1>About</h1>
      {/* <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        <div data-src="https://blog.fotografium.com/wp-content/uploads/2015/09/unsplash.jpg" />
        <div data-src="https://dfuob.com/wp-content/uploads/2018/09/samuel-zeller-62819-unsplash-1200x800.jpg" />
        <div data-src="https://i.redd.it/jotm1t8tymt01.png" />
      </AutoplaySlider> */}
    </Layout>
  )
}

export default AboutPage

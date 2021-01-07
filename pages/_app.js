import '../styles/app.css'
import '../styles/nav.css'

import '../styles/app.scss'

import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/captioned.css'

import 'react-awesome-slider/dist/custom-animations/cube-animation.css'
import 'react-awesome-slider/dist/custom-animations/fall-animation.css'
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css'
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css'
import 'react-awesome-slider/dist/custom-animations/open-animation.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

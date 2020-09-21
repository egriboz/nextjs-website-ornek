import Navigation from '../components/nav'
import Head from 'next/head'

function Layout({ children }) {
  return (
    <React.Fragment>
      <Head>
        <title>Fatih Eğriboz - Global Title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <main>{children}</main>
      <footer>footer</footer>
    </React.Fragment>
  )
}

export default Layout

import Navigation from '../components/nav'

function Layout({ children }) {
  return (
    <React.Fragment>
      <Navigation />
      <main>{children}</main>
      <footer>footer</footer>
    </React.Fragment>
  )
}

export default Layout

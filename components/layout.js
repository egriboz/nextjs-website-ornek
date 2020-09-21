import Nav from "../components/nav";

function Layout ({children}) {
  return <React.Fragment>
    <Nav/>
    <main>
      {children}
    </main>
    <footer>footer</footer>
  </React.Fragment>
}

export default Layout
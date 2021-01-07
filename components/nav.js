import Link from 'next/link'
// Useage css module
import styles from './nav.module.css'
import SiteConfig from '../site.config'

// import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

function Navigation() {
  return (
    // <nav>
    //   <li>
    //     <Link href="/">
    //       <a className={styles.customLink}>Home</a>
    //     </Link>
    //   </li>
    //   <li>
    //     <Link href="/about">
    //       <a className="nav-link">About</a>
    //     </Link>
    //   </li>
    // </nav>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">{SiteConfig.title}</Typography>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation

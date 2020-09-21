import Link from 'next/link'
// Useage css module
import styles from './nav.module.css'

function Navigation() {
  return (
    <nav>
      <li>
        <Link href="/">
          <a className={styles.customLink}>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a className="nav-link">About</a>
        </Link>
      </li>
    </nav>
  )
}

export default Navigation

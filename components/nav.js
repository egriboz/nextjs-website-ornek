import Link from "next/link";

function Nav() {
  return <nav>
    <li>
      <Link href="/">
        <a className="nav-link">Home</a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a className="nav-link">About</a>
      </Link>
    </li>
  </nav>
}

export default Nav;

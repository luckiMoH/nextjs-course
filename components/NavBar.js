import Link from "next/link";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul>
      <style jsx>{`
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          display: inline;
        }
        li:not(:first-child) {
          margin-left: 0.75rem;
        }
      `}</style>
    </nav>
  );
}

export default NavBar;

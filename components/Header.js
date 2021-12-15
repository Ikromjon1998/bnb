import Link from "next/link"

export default function Header() {
    return (
        <div className="nav-contianer">
            <Link href="/">
                <a>
                    <img src="/img/logo3.png" width="4%" height="4%" alt="" />
                </a>
            </Link>

            <nav>
                <ul>
                    <li>
                        <Link href="/register">
                            <a>Sign up</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            <a>Log in</a>
                        </Link>
                    </li>
                </ul>
            </nav>

            <style jsx>{`
        ul {
          margin: 0;
          padding: 0;
        }

        li {
          display: block;
          float: left;
        }

        a {
          text-decoration: none;
          display: block;
          margin-right: 15px;
          color: #333;
        }

        nav a {
          padding: 1em 0.5em;
        }

        .nav-container {
          border-bottom: 1px solid #eee;
          height: 50px;
        }

        img {
          float: left;
        }

        ul {
          float: right;
        }
      `}</style>
        </div>
    )
}
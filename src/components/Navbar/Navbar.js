import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"

const Navbar = () => {
  const [state, setState] = useState({
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      { id: 1, path: "/", text: "Home" },
      {
        id: 2,
        path: "/about",
        text: "About",
      },
    ],
  })

  const navbarHandler = () => {
    state.navbarOpen
      ? setState({
          ...state,
          navbarOpen: false,
          css: "collapse navbar-collapse",
        })
      : setState({
          ...state,
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
      </Link>
      <button className="navbar-toggler" onClick={navbarHandler}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={state.css}>
        <ul className="navbar-nav mx-auto">
          {state.links.map(link => (
            <li key={link.id} className="nav-item">
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
          <li className="nav-item ml--sm-5">tu bedzie ikona</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

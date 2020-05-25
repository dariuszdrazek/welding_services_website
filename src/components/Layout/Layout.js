import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../../styles/bootstrap.min.css"
import "./Layout.css"
import "../../styles/main.css"
import "../../styles/variables.css"
import Navabar from "../Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <Navabar></Navabar>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

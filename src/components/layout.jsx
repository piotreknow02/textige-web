import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "../components/Navbar"
import * as styles from "../styles/Layout.module.scss"
import "../styles/globals.scss"

export default function Layout({children})
{
  return (
    <>
      <Navbar/>
      <main>
        {children}
      </main>
      {/* <Foot/> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

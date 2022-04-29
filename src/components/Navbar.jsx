import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import * as styles from '../styles/Navbar.module.scss'

export default function Navbar() {
  // light - false
  // dark - true
  const [theme, setTheme] = useState(false)
  // if (mounted && window !== undefined) setTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Balsamiq+Sans&family=Lobster&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" />
        <link rel="stylesheet" href={theme ? "./themes/vardark.css" : "./themes/varlight.css"}/>
        <link rel="stylesheet" href={"./themes/var.css"}/>
      </Helmet>
      <div className={styles.navbar}>
        <nav className={styles.navigation}>
          <a href=".">
            <div className={styles.logocontainer}>
              <img className={styles.image} src="./favicon.ico" alt="textige logo" />
              <h1 className={styles.title}>Textige</h1>
            </div>
          </a>
          <div className={styles.actionscontainer}>
            <a href="/register">
              <button className={styles.registerbtn}>Zarejetruj się</button>
            </a>
            <div className={styles.themeswitchbtn}>
              <i className={styles.icon + " fas " + (theme ? "fa-sun" : "fa-moon")} onClick={() => {setTheme(!theme); localStorage.setItem('theme', theme);}}></i>
            </div>
          </div>
        </nav>
        <hr className={styles.separator}/>
      </div>
      <div className={styles.spacer}></div>
    </>
  )
}
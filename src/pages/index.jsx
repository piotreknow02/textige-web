import React from "react"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import LoginForm from '../components/LoginForm'
import GlassImg from "../components/GlassImg"
import * as styles from '../styles/Home.module.scss'

// images
import desktop from "../images/Textige-desktop.png"
import android from "../images/Textige-android.png"
import iphone from "../images/Textige-iphone.png"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Textige - Nowy, lepszy komunikator</title>
        <link rel="shortcut icon" href="./favicon.ico" />
      </Helmet>
      <div className={styles.centerer}>
        <LoginForm/>
        {typeof window != 'undefined' && window.innerWidth < 1165? <br/> : " "}
        <GlassImg name="Textige desktop" img={desktop}/>
        <GlassImg name="Textige android" img={android}/>
        <GlassImg name="Textige iphone" img={iphone}/>
      </div>
    </Layout>
  )
}

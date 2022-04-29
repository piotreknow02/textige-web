import React from "react"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import RegisterForm from "../components/RegisterForm"
import * as styles from "../styles/Register.module.scss"

export default function Register()
{
  return (
    <Layout>
      <Helmet>
        <title>Textige - zarejestruj się</title>
        <link rel="shortcut icon" href="./favicon.ico"/>
      </Helmet>
      <RegisterForm/>
    </Layout>
  )
}
import React from "react"
import qs from "qs"
import Layout from "../components/layout"
import * as styles from "../styles/Welcome.module.scss"
export default function Error({ location }) {
    return (
        <Layout>
            <div className={styles.main}>
                <h3> Niestety nasza strona napotkała na błąd: <b>{qs.parse(location.search, { ignoreQueryPrefix: true }).error || ""}</b></h3>
                Nasi programiści zostali o nim powiadomieni. Przepraszamy za utrudnienia.
            </div>
        </Layout>
    )
}
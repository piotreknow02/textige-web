import React from "react"
import qs from "qs"
import Layout from "../components/layout"
import * as styles from "../styles/Welcome.module.scss"

export default function Welcome({location})
{
    return(
        <Layout>
            <div className={styles.main}>
                <h2 className={styles.title}>
                    Witaj w <i>Textige</i>, {qs.parse(location.search, { ignoreQueryPrefix: true }).username || ""}!
                </h2>
                <p>Rejestracja powiodła się <i class={"fas fa-check-circle " + styles.checkmark}></i></p>
            </div>
        </Layout>
    )
}
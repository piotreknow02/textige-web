import React from "react"
import * as styles from "../styles/GlassImg.module.scss"

export default function GlassImg({img, name})
{
    return(
        <div className={styles.main} title={name}>
            <img className={styles.image} src={img} draggable="false" alt={name}/>
        </div>
    )
}
import React from "react"
import * as styles from '../styles/Checkbox.module.scss'

export default function Checkbox(props) {
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" name={props.name} id={props.name} required/>
      <span className={styles.span}>{props.children}</span>
    </div>
  )
}
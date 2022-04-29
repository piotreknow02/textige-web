import React from "react"
import * as styles from '../styles/Form.module.scss'


export default function LoginForm()
{
  return (
    <form action="api/login" method="post" className={styles.form}>
      <h2 className={styles.h2}>Nowy lepszy komunikator</h2> 
      <div className={styles.input_container}> 
        <input className={styles.input} type="email" name="login" id="login" required/> 
        <label for="name">Login</label>
      </div>
      <br/>
      <div className={styles.input_container}> 
        <input className={styles.input} type="password" name="password" id="password" required/>
        <label for="name">Hasło</label>
      </div>
      <br/>
      <input className={styles.submit} type="submit" value="Zaloguj" id="submit"/>
    </form>
  )
}
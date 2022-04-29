import React from "react"
import * as styles from "../styles/Form.module.scss"
import Checkbox from '../components/Checkbox'

export default function RegisterForm()
{
    return(
        <form className={styles.form} action="api/add-user" method="post">
            <h2 className={styles.h2}>Zarejestruj się</h2>
            <div className={styles.input_container}> 
            <input className={styles.input} type="text" name="username" id="username" required/>
                <label for="name">Nazwa użytkownika</label>
            </div>
            <br/>
            <div className={styles.input_container}> 
                <input className={styles.input} type="email" name="mail" id="mail" required/>
                <label for="name">Mail</label>
            </div>
            <br/>
            <div className={styles.input_container}> 
                <input className={styles.input} type="password" name="password" id="password" required/>
                <label for="name">Hasło</label>
            </div>
            <br/>
            <Checkbox name="agreement">Akceptuje warunki korzystania</Checkbox>
            <input className={styles.submit} type="submit" value="Zaloguj" id="submit"/>
        </form>
    )
}
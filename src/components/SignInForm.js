import {Link} from 'react-router-dom'
import React from 'react'



import styles from './SignInForm.module.css'

export const SignInForm = () => {
    return (
        <form className={styles['form']}>
            <h2>Sign In</h2>
       
        <div className={styles['form-container']}>
            <label htmfor="email">Email:</label>
            <input type="email" placeholder="Email" id="email"/>
        </div>
        <div className={styles['form-container']}>
            <label htmfor="password">Password:</label>
            <input type="password" placeholder="Password" id="password"/>
        </div>
        <div className={styles['form-container']}>
            <button className={styles['btn']} type="submit">Submit</button>
        </div>
        <div className={styles['form-container']}>
            <p className={styles['account-text']} >Don't have an account? <Link to={'signup'}>Sign up</Link></p>
        </div>
    </form>
    )
}

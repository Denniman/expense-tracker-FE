import React from 'react'
import {Link} from 'react-router-dom'


import styles from './SignUpForm.module.css'

export const SignUpForm = () => {
    return (
        <form className={styles['form']}>
            <h2>Sign Up</h2>
        <div className={styles['form-container']}>
            <label htmfor="fname">First name:</label>
            <input type="text" placeholder="First name" id="fname"/>
        </div>
        <div className={styles['form-container']}>
            <label htmfor="lname">Last name:</label>
            <input type="text" placeholder="Last name" id="lname"/>
        </div>
        <div className={styles['form-container']}>
            <label htmfor="email">Email:</label>
            <input type="email" placeholder="Email" id="email"/>
        </div>
        <div className={styles['form-container']}>
            <label htmfor="password">Password:</label>
            <input type="password" placeholder="Password" id="password"/>
        </div>
        <div className={styles['form-container']}>
            <label htmfor="password">Confirm Password:</label>
            <input type="password" placeholder="Password" id="password"/>
        </div>
        <div className={styles['form-container']}>
            <button className={styles['btn']} type="submit">Submit</button>
        </div>
        <div className={styles['form-container']}>
            <p className={styles['account-text']} >Already have an account? <Link to={'login'}>Sign in</Link></p>
        </div>
    </form>
    )
}

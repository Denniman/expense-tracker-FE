import React, {useContext} from 'react'

import AuthContext from '../store/auth-context'
import {Link} from 'react-router-dom'

import styles from './Nav.module.css'


export const Nav = () => {
    const ctx = useContext(AuthContext)
    return (
        <nav className={styles['nav-container']}>
            <Link to="/" className={styles['brand-name']}>
                <h2>Expense Tracker</h2>
            </Link>
            
            <ul className={styles['nav-link']}>

                {ctx.isLoggedIn && (
                    <li><Link to="/login" className={styles['link']}>Login</Link></li>
                )}
                    <li><Link to="/login" className={styles['link']}>Login</Link></li>
                    <li><Link to="/signup" className={styles['link']}>Sign up</Link></li>
            </ul>
            
        </nav>
    )
}
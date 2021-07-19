import React from 'react'
// import {Form} from '../Form'
import {SignUpForm} from '../SignUpForm'

import styles from './SignUpScreen.module.css'

export const SignUpScreen = () => {
    return (
        <div className={styles['form-container']}>
         <SignUpForm />
        </div>
    )
}

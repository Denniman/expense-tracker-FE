import React from 'react'
// import {Form} from '../Form'
import {SignInForm} from '../SignInForm'

import styles from './SignUpScreen.module.css'

export const SignInScreen = () => {
    return (
        <div className={styles['form-container']}>
         <SignInForm />
        </div>
    )
}

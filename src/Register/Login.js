import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { authenticateSignup } from './api';

const accountInitialization = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Login to visit your profile'
    },
    signup: {
        view: 'signup',
        heading: 'Create your Account and Explore',
        subHeading: 'Provide your details and sign up'
    }
}

const signupInitialValues = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    phone: ''
}

const Login = () => {
    const [account, toggleAccount] = useState(accountInitialization.login);

    // storing initial values in a state
    const [signup, setSignup] = useState(signupInitialValues)

    const toggleSignup = () => {
        toggleAccount(accountInitialization.signup)
    }
    const toggleLogin = () => {
        toggleAccount(accountInitialization.login)
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        // console.log(signup);
    }

    const signupUser = async () => {
        let res = await authenticateSignup(signup)
    }

    return (
        <>
            {
                account.view === 'login' ?
                    <div>
                        <h2>{account.heading}</h2>
                        <h3>{account.subHeading}</h3>
                        <input placeholder='enter email'></input>
                        <br />
                        <input placeholder='enter password'></input>
                        <br />
                        <button>Login</button>
                        <br />
                        <p>or</p>
                        <button onClick={() => toggleSignup()}>Create An Account</button>
                    </div>
                    :
                    <div>
                        <h2>{account.heading}</h2>
                        <h3>{account.subHeading}</h3>
                        <br />
                        <input placeholder='enter First Name' onChange={(e) => onInputChange(e)} name="firstName"></input>
                        <input placeholder='enter Last Name' onChange={(e) => onInputChange(e)} name="lastName"></input>
                        <input placeholder='enter User Name' onChange={(e) => onInputChange(e)} name="userName"></input>
                        <input placeholder='enter Email' onChange={(e) => onInputChange(e)} name="email"></input>
                        <input placeholder='enter Password' onChange={(e) => onInputChange(e)} name="password"></input>
                        <input placeholder='enter Phone' onChange={(e) => onInputChange(e)} name="phone"></input>

                        <button onClick={() => signupUser()}>Sign up</button>
                        <button onClick={() => toggleLogin()}>Already a user? Login</button>
                    </div>
            }
        </>
    );
};

export default Login;
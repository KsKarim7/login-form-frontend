import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import { authenticateLogin, authenticateSignup } from './api';
import "./Login.css"
import { faEnvelope, faKey, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

const accountInitialization = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Login with your username and password'
    },
    signup: {
        view: 'signup',
        heading: 'Sign In your Account and Explore',
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

const loginInitialValues = {
    userName: '',
    password: ''
}

const Login = () => {
    const [account, toggleAccount] = useState(accountInitialization.login);
    const [acc, setAcc] = useState('');
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false)

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
        let res = await authenticateSignup(signup);
        if (res) return;
        setAcc(signup.firstName)

    }
    const logoutUser = () => {
        setAcc('')
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const loginUser = async () => {
        let res = await authenticateLogin(login);
        console.log(res);
        if (res.status === 200) {
            setAcc(res.data.data.firstName);
        }
        else {
            setError(true)
        }
    }

    const avatar = 'https://i.ibb.co/p4JsLdh/avatar.png';
    const log = 'https://i.ibb.co/M9BwcW9/login.png';

    return (
        // <button onClick={() => logoutUser()}>Logout</button>
        <>
            {acc ? <p>{acc}</p> && <button onClick={() => logoutUser()}>Logout</button> :
                <div>
                    {
                        account.view === 'login' ?
                            <div className='grid grid-cols-2 gap-12 '>
                                <div className='my-16'>
                                    <h2 className='text-center text-3xl font-semibold'>{account.heading}</h2>
                                    <img className='my-5' src={log} alt="" />
                                </div>
                                <div className='m-auto mt-5'>
                                    <img className='m-auto' style={{ width: '150px' }} src={avatar} alt="" />
                                    <h3 className='py-3 text-2xl'>{account.subHeading}</h3>
                                    <div className='form text-center'>
                                        <div><FontAwesomeIcon icon={faUser} className='pr-5'></FontAwesomeIcon>
                                            <input placeholder='Enter user name' onChange={(e) => onValueChange(e)} name='userName'></input></div>

                                        <div><FontAwesomeIcon icon={faKey} className='pr-5'></FontAwesomeIcon><input placeholder='Enter password' onChange={(e) => onValueChange(e)} type="password" name="password" minlength="8" required></input></div>

                                        <div className='text-center grid my-5'>
                                            <button onClick={() => loginUser()}>Login</button>
                                            {error && <p>Please Enter valid user name or password</p>}
                                            <button onClick={() => toggleSignup()}>Create An Account</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className='grid grid-cols-2 gap-12 '>
                                <div className='my-16'>
                                    <h2 className='text-center text-3xl font-semibold'>{account.heading}</h2>
                                    <img className='my-5' src={log} alt="" />
                                </div>
                                <div className='m-auto mt-5'>
                                    <img className='m-auto' style={{ width: '150px' }} src={avatar} alt="" />
                                    <h3 className='py-3 text-2xl'>{account.subHeading}</h3>

                                    <div className='form text-center'>
                                        <div><FontAwesomeIcon icon={faUser} className='pr-5'></FontAwesomeIcon><input placeholder='Enter First Name' onChange={(e) => onInputChange(e)} name="firstName"></input></div>

                                        <div><FontAwesomeIcon icon={faUser} className='pr-5'></FontAwesomeIcon>
                                            <input placeholder='Enter Last Name' onChange={(e) => onInputChange(e)} name="lastName"></input></div>

                                        <div><FontAwesomeIcon icon={faUser} className='pr-5'></FontAwesomeIcon><input placeholder='Enter User Name' onChange={(e) => onInputChange(e)} name="userName"></input></div>

                                        <div><FontAwesomeIcon icon={faEnvelope} className='pr-5'></FontAwesomeIcon><input placeholder='Enter Email' onChange={(e) => onInputChange(e)} name="email"></input></div>

                                        <div><FontAwesomeIcon icon={faKey} className='pr-5'></FontAwesomeIcon><input placeholder='Enter Password' onChange={(e) => onInputChange(e)} type="password" name="password" minlength="8" required></input></div>

                                        <div><FontAwesomeIcon icon={faPhone} className='pr-5'></FontAwesomeIcon><input placeholder='Enter Phone' onChange={(e) => onInputChange(e)} name="phone"></input></div>
                                    </div>

                                    <div className='text-center grid my-5'>
                                        <button onClick={() => signupUser()}>Sign up</button>
                                        <button onClick={() => toggleLogin()}>Already a user? Login</button>
                                    </div>
                                </div>
                            </div>
                    }
                </div>

            }

        </>
    );
};

export default Login;
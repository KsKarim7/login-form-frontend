import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const accountInitialization = {
    login: {
        view: 'login'
    },
    signup: {
        view: 'signup'
    }
}

const Login = () => {
    const [account, toggleAccount] = useState(accountInitialization.login)

    const toggleSignup = () => {
        toggleAccount(accountInitialization.signup)
    }
    const toggleLogin = () => {
        toggleAccount(accountInitialization.login)
    }

    return (
        <>
            {
                account.view === 'login' ?
                    <div>
                        <input placeholder='enter email'></input>
                        <br />
                        <input placeholder='enter password'></input>
                        <br />
                        <button>Login</button>
                        <br />
                        {/* <Link to='/signup'>New Here? Create an account!</Link> */}
                        <button onClick={() => toggleSignup()}>Create An Account</button>
                    </div>
                    :
                    <div>
                        <button onClick={() => toggleLogin()}>Already a user? Login</button>
                    </div>
            }
        </>
    );
};

export default Login;
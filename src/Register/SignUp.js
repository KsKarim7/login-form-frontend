import React from 'react';
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div>
            <p>Sign Up Here</p>
            <input placeholder='enter First Name'></input>
            <input placeholder='enter Last Name'></input>
            <input placeholder='enter User Name'></input>
            <input placeholder='enter Email'></input>
            <input placeholder='enter Password'></input>
            <input placeholder='enter Phone'></input>
            <button>Login</button>
            <Link to='/'>Already a user?Login here!</Link>
        </div>
    );
};

export default SignUp;
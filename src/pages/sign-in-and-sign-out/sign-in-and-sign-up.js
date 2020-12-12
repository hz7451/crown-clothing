import React from 'react';

import SignIn from '../../../src/components/sign-in/sign-in';
import SignUp from '../../../src/components/sign-up/sign-up';

import './sign-in-and-sign-up.scss';


const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;
import React, { Component } from 'react';

import SignInForm from './signinForm';
import PageTitle from '../pageTitle';

class SignIn extends Component {
    render() {
        return (
            <div className='sign-in'>
                <PageTitle className='sign-in__page-title' title='Login' />
                <SignInForm className='sign-in__form' />
            </div>
        )
    }
}

export default SignIn;
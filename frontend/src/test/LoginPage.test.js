import React from 'react';
import { create } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';


import LoginPage from '../Components/LoginPage';

describe('Login Page Snapshot tests',()=>{
    test(`Login Page matches snapshot`, () => {
        const loginPage = create(LoginPage);
        expect(loginPage.toJSON()).toMatchSnapshot();
    });
});
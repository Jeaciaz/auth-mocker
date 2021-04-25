import React, { useState } from 'react';
import classNames from 'classnames';
import style from './style.module.css';
import iconUser from '../../assets/icon-user.svg';
import iconPassword from '../../assets/icon-password.svg';
import {getFormData} from "../../util";
import {postSignIn} from "../../api/auth";
import {RequestStatuses} from "../../api/api";
import InputText from "../base/input-text/input-text";
import InputCheckbox from "../base/input-checkbox/input-checkbox";
import Button from "../base/button/button";
import {Text, Title} from "../base/typography/typography";

const SignIn = () => {
    const [status, setStatus] = useState(RequestStatuses.IDLE);
    const [message, setMessage] = useState(null)

    const handleAuth = (ev) => {
        ev.preventDefault();
        const data = getFormData(ev, ['username', 'password', 'remember-device']);

        setStatus(RequestStatuses.LOADING)
        postSignIn(data)
            .then(() => {
                setMessage('Logged in!');
                setStatus(RequestStatuses.SUCCESS);
            })
            .catch((err) => {
                setMessage(err.response.data.message);
                setStatus(RequestStatuses.ERROR);
            });
    }

    return (
        <>
            <Title>Sign in</Title>
            <Text>Welcome back to %APPNAME%, please sign in your account to continue.</Text>
            { message !== null && <Text className={classNames(status === RequestStatuses.ERROR && style.error, status === RequestStatuses.SUCCESS && style.success)}>{message}</Text> }
            <form onSubmit={handleAuth}>
                <InputText status={status} icon={iconUser} name="username" placeholder="Type your username">Username</InputText>
                <InputText type="password" status={status} icon={iconPassword} name="password" placeholder="Type your password">Password</InputText>
                <InputCheckbox name="remember-device">Remember this device</InputCheckbox>
                <Button type="submit">Sign in</Button>
            </form>
        </>
    )
}

export default SignIn

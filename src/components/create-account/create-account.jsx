import React, { useState } from 'react';
import classNames from 'classnames';
import style from './style.module.css';
import {Text, Title} from "../base/typography/typography";
import InputText from "../base/input-text/input-text";
import iconFullName from '../../assets/icon-full-name.svg';
import iconEmail from '../../assets/icon-email.svg';
import iconUsername from '../../assets/icon-user.svg';
import iconPassword from '../../assets/icon-password.svg';
import Button from "../base/button/button";
import {clarifyObject, getFormData} from "../../util";
import {RequestStatuses} from "../../api/api";
import {postCreateAccount} from "../../api/auth";

const CreateAccount = () => {
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(RequestStatuses.IDLE);
    const [message, setMessage] = useState(null);

    // In a larger app, a more scalable approach such as Formik should be used. This is simple for demonstration purposes.
    const validate = (fields) => {
        const newErrors = clarifyObject({
            email: !/^.+@.+\..+$/.test(fields['email']) ? 'Invalid email format' : null,
            'confirm-password': fields['password'] !== fields['confirm-password'] ? 'Passwords don\'t match' : null,
            // verify all fields aren't empty
            ...Object.fromEntries(
                Object.entries(fields)
                    .filter(([, value]) => value === '')
                    .map(([key]) => [key, 'This field is required'])
            )
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const data = getFormData(ev, ['full-name', 'email', 'username', 'password', 'confirm-password']);

        if (validate(data)) {
            setStatus(RequestStatuses.LOADING)
            postCreateAccount(data)
                .then(() => {
                    setMessage('Account created!');
                    setStatus(RequestStatuses.SUCCESS);
                })
                .catch((err) => {
                    setMessage(err.response.data.message);
                    setStatus(RequestStatuses.ERROR);
                });
        }
    }

    const getStatus = (fieldName) => {
        return errors[fieldName] != null ? RequestStatuses.ERROR : status;
    }

    return (
        <>
            <Title>Create account</Title>
            <Text>Provide the information to register your %APPNAME% account</Text>
            { message && <Text className={classNames(status === RequestStatuses.ERROR && style.error, status === RequestStatuses.SUCCESS && style.success)}>{message}</Text>}
            <form onSubmit={handleSubmit}>
                <InputText status={getStatus('full-name')} error={errors['full-name']} name="full-name" icon={iconFullName} placeholder="Type your name">Full name</InputText>
                <InputText status={getStatus('email')} error={errors['email']} name="email" icon={iconEmail} placeholder="Type your email" type="email">Email</InputText>
                <InputText status={getStatus('username')} error={errors['username']} name="username" icon={iconUsername} placeholder="Type your username">Username</InputText>
                <InputText status={getStatus('password')} error={errors['password']} name="password" icon={iconPassword} placeholder="Type your password" type="password">Password</InputText>
                <InputText status={getStatus('confirm-password')} error={errors['confirm-password']} name="confirm-password" icon={iconPassword} placeholder="Type your password again" type="password">Confirm password</InputText>
                <Button className={style.btnSubmit} type="submit">Sign up</Button>
            </form>
        </>
    )
}

export default CreateAccount

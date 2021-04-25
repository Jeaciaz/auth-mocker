import React, { useState } from 'react';
import {Text, Title} from "../base/typography/typography";
import InputText from "../base/input-text/input-text";
import Button from "../base/button/button";
import style from './style.module.css';
import iconEmail from '../../assets/icon-email.svg';
import {getFormData} from "../../util";
import {RequestStatuses} from "../../api/api";
import {postResetPassword} from "../../api/auth";
import classNames from "classnames";

const ForgotPassword = () => {
    const [status, setStatus] = useState(RequestStatuses.IDLE);
    const [message, setMessage] = useState(null);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const data = getFormData(ev, ['email']);

        setStatus(RequestStatuses.LOADING);
        postResetPassword(data)
            .then(() => {
                setMessage('If this address exists, we sent it a recovery letter!');
                setStatus(RequestStatuses.SUCCESS);
            })
            .catch((err) => {
                setMessage(err.response.data.message);
                setStatus(RequestStatuses.ERROR);
            })
    }
    return (
        <>
            <Title>Forgot password</Title>
            <Text>Enter your account email to reset the account password</Text>
            {message && <Text className={classNames(status === RequestStatuses.ERROR && style.error, status === RequestStatuses.SUCCESS && style.success)}>{message}</Text>}
            <form onSubmit={handleSubmit}>
                <InputText icon={iconEmail} name="email" status={status}>Email</InputText>
                <Button className={style.btnSubmit}>Reset password</Button>
            </form>
        </>
    )
}

export default ForgotPassword

import React from 'react'
import classNames from "classnames";
import style from "./style.module.css";
import {RequestStatuses} from "../../../api/api";

const InputText = ({ status, name, icon, error, children, ...inputAttrs }) => (
    <>
        { error && (
            <div className={style.errorMessage}>{error}</div>
        )}
        <label className={classNames(style.inputBox, status === RequestStatuses.ERROR && style.error, status === RequestStatuses.LOADING && style.loading)}>
            <img className={style.inputIcon} src={icon} alt={`${name} icon`}/>
            <input className={style.inputText} type="text" name={name} disabled={status === RequestStatuses.LOADING} {...inputAttrs} />
            <span className={style.hint}>{children}</span>
        </label>
    </>
)

InputText.defaultProps = {
    status: RequestStatuses.IDLE,
    placeholder: ' '
}

export default InputText

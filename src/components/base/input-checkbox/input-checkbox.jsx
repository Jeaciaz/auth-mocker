import React from 'react';
import style from "./style.module.css";

const InputCheckbox = ({ name, children, ...inputAttrs }) => (
    <label className={style.inputCheckbox}>
        <input type="checkbox" name={name} {...inputAttrs} />
        <span className={style.inputCheckboxLabel}>{children}</span>
    </label>
)

export default InputCheckbox

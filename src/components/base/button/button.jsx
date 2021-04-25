import React from 'react';
import classNames from 'classnames';
import style from "./style.module.css";

const Button = ({ children, className, ...buttonAttrs }) => (
    <button className={classNames(style.btn, className)} { ...buttonAttrs }>{children}</button>
)

export default Button;

import React from 'react';
import classNames from 'classnames';
import style from './style.module.css';

export const Title = ({ children, className, ...attrs }) => (
    <h2 className={classNames(style.title, className)} {...attrs}>{children}</h2>
)

export const Text = ({ children, className, ...attrs }) => (
    <p className={classNames(style.text, className)} {...attrs}>{children}</p>
)

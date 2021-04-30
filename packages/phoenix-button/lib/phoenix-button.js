import React from 'react';
import cx from 'clsx';
import styles from '../styles/styles.css';

const Button = ({ children, className, variant, ...rest }) => {
    const classes = cx(
        styles.Button,
        className,
        {
            [styles.ButtonSecondary]: variant === 'secondary',
        },
    );
    return (
        <button {...rest} className={classes}>
            {children}
        </button>
    );
};

export { Button };
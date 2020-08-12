import React from 'react';

const TextError = (props) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
};

export default TextError;
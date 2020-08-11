import React from 'react';
import './style.css'; 

const Button = (props) => {
    return (
        <button
            className={`buttonStyleBasic fs-18 ${
                props.className ? props.className : ""
                }`}
            onClick={props.click}
            onSubmit={props.submit}
            type={props.type}
            ref={props.buttonRef}
            disabled={props.disabled}
        >
            {props.btnText}
        </button>
    );
};

export default Button;
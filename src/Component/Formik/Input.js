import React from 'react';
import { Field, ErrorMessage } from "formik";
import TextError from './TextError';

const Input = (props) => {
    const { name,errClass,disabled, ...rest } = props;
    return (
        <div className="form-control">
            <Field id={name} name={name}  {...rest} />
            <ErrorMessage name={name} component={TextError} className={errClass}/>
        </div>
    );
};

export default Input;
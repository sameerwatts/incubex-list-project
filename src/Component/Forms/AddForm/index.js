import React from 'react';
import {Formik, Form} from 'formik';
import '../style.css';

const initialValues = {

}

const validationSchema = {};


const AddForm = (props) => {
    return (
        <div>
            <div className="cardHeadings d-flex justify-between align-center mb-20">
                <h3 className="fw-normal">Add</h3>
                <button type="reset" className="close-button">&times;</button>
            </div>
        </div>
    );
};

export default AddForm;
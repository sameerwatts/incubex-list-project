import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../style.css';
import TextError from '../TextError';
import * as Yup from 'yup';
import Button from '../../Button';

const initialValues = {
    userId: '',
}

const validationSchema = Yup.object({
    userId: Yup.string().required("Required!")
});


const AddForm = (props) => {
    const onSubmit = values => {
        console.log(values);
    }


    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
                <div className="cardHeadings d-flex justify-between align-center mb-20">
                    <h3 className="fw-normal">Add</h3>
                    <button type="reset" className="close-button">&times;</button>
                </div>
                <div className="form-control">
                    <Field type="text" className="fs-14 customInput" id='userId' name='userId' placeholder='Enter user Id' />
                    <ErrorMessage name='userId' component={TextError} className="error addErr" />
                </div>
                <div className="d-flex justify-center">
                    <Button btnText="Add" type="submit" className="buttonWide bg-color-pri buttonTextWhite mb-20" />
                </div>
            </Form>
        </Formik>
    );
};

export default AddForm;
import React from 'react';
import { Formik, Form } from 'formik';
import '../style.css';
import * as Yup from 'yup';
import Button from '../../Button';
import FormikControl from '../../Formik/FormikControl';
import { useToasts } from 'react-toast-notifications'
import axios from 'axios';


const initialValues = {
    userId: '',
    title: '',
    body: ''
}



const validationSchema = Yup.object({
    userId: Yup.number().typeError('You must specify a number').required("Required!"),
    title: Yup.string().required("Required!"),
    body: Yup.string().required("Required!")
});


const UpdateForm = ({ id, popupModalHandler, renderPage, updateError }) => {

    const { addToast } = useToasts()

    const onSubmit = (values) => {
        const {userId, title, body} = values;
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            userId,
            title,
            body,
        })
        .then(res => {
            console.log(res.data);
            popupModalHandler();
            renderPage();
            addToast('Updated Successfully', { appearance: 'success',autoDismiss: true })

        })
        .catch(err => {
            popupModalHandler();
            updateError(err.response.status);
            addToast(err.message, { appearance: 'error',autoDismiss: true })
            console.log(err);
        });
    }


    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form className="form d-flex flex-column justify-between">
                <div>
                    <div className="cardHeadings d-flex justify-between align-center mb-20">
                        <h3 className="fw-normal">Update id: {id} </h3>
                        <button type="reset" className="close-button" onClick={popupModalHandler}>&times;</button>
                    </div>

                    <FormikControl
                        type="text"
                        placeholder="Enter user Id"
                        name="userId"
                        className="fs-14 customInput"
                        control="input"
                        errClass="error"
                    />
                    <FormikControl
                        type="text"
                        placeholder="Title"
                        name="title"
                        className="fs-14 customInput"
                        control="input"
                        errClass="error"
                    />
                    <FormikControl
                        type="text"
                        placeholder="Body"
                        name="body"
                        className="fs-14 customInput"
                        control="textarea"
                        errClass="error"
                    />
                </div>
                <div className="d-flex justify-center" >
                    <Button btnText="Update" type="submit" className="submitFormButton" />
                </div>
            </Form>
        </Formik>
    );
};

export default UpdateForm;
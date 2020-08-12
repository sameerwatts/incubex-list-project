import React from 'react';
import './style.css';
import Button from '../Button';

const DeletePopup = ({ popupModalHandler, id, deletePostById, disabled }) => {
    return (
        <div className="deleteContainer">
            <div className="cardHeadings d-flex justify-between align-center mb-20">
                <h3 className="fw-normal">Delete id: {id} </h3>
                <button type="reset" className="close-button" onClick={() => popupModalHandler('Delete')}>&times;</button>
            </div>
            <div className="DeleteTitle d-flex justify-center align-center">Are you sure?</div>
            <p>Are You sure that you want to delete id: {id}</p>
            <Button btnText='Confirm' className="deleteButton" disabled={disabled} click={() => deletePostById(id)}/>
        </div>
    );
};

export default DeletePopup;
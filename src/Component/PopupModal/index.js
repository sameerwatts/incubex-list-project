import React from 'react';
import "./style.css";

const PopupModal = (props) => {
    return (
        <div className={`overlay full-overlay d-flex justify-center align-center ${props.clicked ? "active" : ""}`}>
            <div className="modal-container">
                {props.children}
            </div>
        </div>
    );
};

export default PopupModal;
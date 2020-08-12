import React from 'react';
import "./style.css";

const PopupModal = (props) => {
    const className = `overlay full-overlay d-flex justify-center align-center ${props.clicked ? "active" : ""}`
    return (
        <div className={className}>
            <div className={`modal-container ${props.type === 'Delete' ? 'deletePopup' : ''}`}>
                {props.children}
            </div>
        </div>
    );
};

export default PopupModal;
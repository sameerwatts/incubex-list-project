import React from 'react';
import loadingGif from "../../../assets/images/loading.gif";

const UpdateForm = () => {
    return (
        <div>
            <div className="cardHeadings d-flex justify-between align-center mb-20">
                <h3 className="fw-normal">Update</h3>
                <div className="d-flex justify-center align-center">
                    <img src={loadingGif} alt="Flowers in Chania"></img>
                </div>
                <button type="reset" className="close-button">&times;</button>
            </div>
        </div>
    );
};

export default UpdateForm;
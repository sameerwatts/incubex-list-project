import React from 'react';
import './style.css';
import UpdateImage from "../../assets/images/pencil.svg";
import DeleteImage from "../../assets/images/trash.svg";

const DataTile = (props) => {
    const { title, userId, body, id } = props.details;

   
    return (
        <div className="data-container">
            <div>
                <div className="userHeading">UserId: {userId}</div>
                <div className="userTitle">{title}</div>
                <div className="userBody">{body}</div>
            </div>
            <div className="buttonsContainter">
                <img src={UpdateImage} alt="Update" className="editButton mr-10 mr-md-20" onClick={() => props.updatePost('Update',id)} />
                <img src={DeleteImage} alt="Delete" className="editButton" onClick={() => props.deletePost('Delete',id)} />
            </div>
        </div>
    );
};

export default DataTile;
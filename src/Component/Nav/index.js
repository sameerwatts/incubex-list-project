import React from 'react';
import './style.css';
import Button from '../Button';

const Nav = (props) => {
    return (
        <div>
            <header className='header'>
                <div className="navbar">
                    <p className="incubex-assignment">Incubex Assignment</p>
                    <div className="get-post-buttons-container">
                        <Button btnText='Get' className='getButton mr-20' disabled={props.clicked} />
                        <Button btnText='Add' click={() => props.popupModalHandler('Add')}  className='postBotton mr-20' disabled={props.clicked} />
                        <Button btnText='Update' click={() => props.popupModalHandler('Update')} className='updateBotton' disabled={props.clicked} />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Nav;
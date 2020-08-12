import React, { useState } from 'react';

import './App.css';
import Nav from './Component/Nav';
import PopupModal from './Component/PopupModal';
import AddForm from './Component/Forms/AddForm';
import UpdateForm from './Component/Forms/UpdateForm';
const App = (props) => {
  const [clicked, setClicked] = useState(false);
  const [formType, setFormType] = useState('');
  const popupModalHandler = (type) => {
    setFormType(type)
    setClicked(prevState => !prevState)
  }
  const formTypeHandler = () => {
    
  }
  return (
    <div className='pageWrapper'>
      <Nav popupModalHandler={popupModalHandler} formType={formTypeHandler} clicked={clicked} />
      <PopupModal clicked={clicked}>
        {formType === 'Add' && <AddForm popupModalHandler={popupModalHandler} /> }
        {formType === 'Update' && <UpdateForm /> }
      </PopupModal>
    </div >
  );
}

export default App;
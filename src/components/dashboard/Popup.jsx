import React from 'react'

import AddUserForm from "./AddUserForm";

const Popup = ({handleClose,setUsers}) => {
    return (
        <div className='pop_fullscreen'>
            <div className="popup">
                <div className="pop_header">
                    <h3>Add New Profile</h3>
                    <div onMouseUp={handleClose}>x</div>
                </div>
                <div className="pop_body">
                    <AddUserForm setUsers={setUsers}/>
                </div>
            </div>
        </div>
    )
}

export default Popup
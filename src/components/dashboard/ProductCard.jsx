import { useState } from "react"
import "./popup.css"
import Popup from "./Popup";
import UserCard from "./UserCard";

const ProductCard = ({ data }) => {
    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className='product_card'>
            <div className="pc__left pc_item">

            </div>
            <div className="pc__right pc_item">

                {
                    users.length ?
                        <UserCard users={users} /> :
                        <>
                            {open && <Popup setUsers={setUsers} open={open} setOpen={setOpen} handleClose={handleClose} />}
                            <div onMouseDown={handleClickOpen} className="plus">
                                +
                            </div>
                            <span>Add Profile</span>
                        </>
                }
                {/*  */}
            </div>
        </div>
    )
}

export default ProductCard
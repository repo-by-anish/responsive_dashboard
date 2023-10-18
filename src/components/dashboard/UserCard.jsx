import { Link } from "react-router-dom"
import "./user_card.css"

const UserCard = ({ users }) => {

    const whats = `+91 ${users[0].phone}`;
    const insta = users[0].insta?.substring(users[0].insta?.indexOf('com/') + 4, users[0]?.insta?.length)?.replace("/", "");
    const yt = users[0].youtube?.substring(users[0].youtube?.indexOf('com/') + 4, users[0]?.youtube?.length)?.replace("/", "");
    console.log(whats, insta, yt);
    console.log(users);

    return (
        <div className='user_card'>
            <div className="uc_top">{users[0].name}</div>
            <div className="uc_bottom">
                <div className="ucci_left">
                    <div className="uc_contact_item">
                        <div style={{ backgroundColor: "#E9F9EB" }} className="social_u_logo">
                            <img style={{ width: "16px" }} src="dashlogos/whats.svg" alt="" />
                        </div>
                        <Link to={`call:${whats}`}>{whats}</Link>
                    </div>

                    <div className="uc_contact_item">
                        <div style={{ backgroundColor: "#EBE6F9" }} className="social_u_logo">
                            <img style={{ width: "16px" }} src="dashlogos/mail.svg" alt="" />
                        </div>
                        <Link to={`mailto:${users[0].email}`}>{users[0].email}</Link>
                    </div>

                </div>
                {
                    (users[0].insta || users[0].youtube) && (
                        <div className="ucci_left">

                            {
                                users[0].insta && (
                                    <div className="uc_contact_item">
                                        <div style={{ backgroundColor: "#FFE9EC" }} className="social_u_logo">
                                            <img style={{ width: "18px" }} src="dashlogos/insta.svg" alt="" />
                                        </div>
                                        <Link to={users[0]?.insta}>{insta}</Link>
                                    </div>
                                )
                            }

                            {
                                users[0].youtube && (
                                    <div className="uc_contact_item">
                                        <div style={{ backgroundColor: "#FFE9E9" }} className="social_u_logo">
                                            <img style={{ width: "20px" }} src="dashlogos/yt.svg" alt="" />
                                        </div>
                                        <Link to={users[0]?.youtube}>{yt}</Link>
                                    </div>
                                )
                            }

                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default UserCard
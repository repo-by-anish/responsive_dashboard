import { useState } from "react"

const AddUserForm = ({setUsers}) => {

  const [toggle, setToggle] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [insta, setInsta] = useState("");
  const [yt, setyt] = useState("");

  const togBasic = () => {
    setToggle(0);
  }

  const finalSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      phone,
      insta,
      youtube: yt
    }
    setUsers(pre => [...pre, user]);
  }

  const toSocial = (e) => {
    e.preventDefault();
    setToggle(1);
  }

  const fBasic =
    <form onSubmit={toSocial} className="f__basic">
      <div className="au__input_item">
        <label htmlFor="a_name">Enter  Name*</label>
        <input required autoComplete="off" value={name} onChange={e => setName(e.target.value)} id="a_name" placeholder="Eg. John Doe" type="text" />
      </div>
      <div className="au__input_item">
        <label htmlFor="a_email">Enter Email*</label>
        <input required autoComplete="off" value={email} onChange={e => setEmail(e.target.value)} placeholder="Eg. John@xyz.com" id="a_email" type="email" />
      </div>
      <div className="au__input_item">
        <label htmlFor="a_phone">Enter Phone*</label>
        <input required autoComplete="off" value={phone===0?"":phone} onChange={e => setPhone(e.target.value)} placeholder="Eg.  9123456789" id="a_phone" type="number" />
      </div>
      <div className="action_button">
        <button type="submit" className="next_button">Next</button>
      </div>
    </form>
  const fSocial =
    <form onSubmit={finalSubmit} className="f__social">
      <div className="au__input_item">
        <label htmlFor="insta">Instagram Link <span>(Optional)</span></label>
        <input autoComplete="off" value={insta} onChange={e => setInsta(e.target.value)} id="insta" placeholder="Eg. ..instagram.com/username" type="text" />
      </div>
      <div className="au__input_item">
        <label htmlFor="ytlink">Youtube Link <span>(Optional)</span></label>
        <input autoComplete="off" value={yt} onChange={e => setyt(e.target.value)} placeholder="Eg. ..youtebe/username" id="ytlink" type="text" />
      </div>
      <div className="action_button">
        <button onClick={togBasic} className="back_button">Back</button>
        <button type="submit" className="next_button">Done</button>
      </div>
    </form>
  const compArr = [fBasic, fSocial]
  return (
    <div className="add_user_main_form">
      <div className="add_u_toggle">
        <div className='aut__left'>
          Basic
          <hr className={toggle === 0 ? "styled_hr" : "hr"} />
        </div>
        <div className='aut__right'>
          Social
          <hr className={toggle === 1 ? "styled_hr" : "hr"} />
        </div>
      </div>
      {compArr[toggle]}
    </div>
  )
}

export default AddUserForm
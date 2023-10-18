import { useState } from "react";
import { Link } from "react-router-dom";

const Register = ({setHaveAccount}) => {
    const [registerData,setRegisterData]=useState({
        name:"",
        email:"",
        password:""
    })
    console.log(registerData);
    return (
        <div className="login_form">
            <div className="social_login">
                <Link className="sl__item f_monts">
                    <img src="logos/google.svg" alt="" />
                    Sign up with Google
                </Link>
                <Link className="sl__item f_monts">
                    <img src="logos/apple.svg" alt="" />
                    Sign up with Apple
                </Link>
            </div>
            <form>
                <div className="input_item">
                    <label className="f_lato" htmlFor="name">Name</label>
                    <input onChange={e=>setRegisterData(prev=>{return{...prev,name:e.target.value}})} required autoComplete ="off" className="f_lato" id="name" type="text" />
                </div>
                <div className="input_item">
                    <label className="f_lato" htmlFor="email">Email Address</label>
                    <input onChange={e=>setRegisterData(prev=>{return{...prev,email:e.target.value}})} required autoComplete ="off" className="f_lato" id="email" type="email" />
                </div>
                <div className="input_item">
                    <label className="f_lato" htmlFor="pwd">Password</label>
                    <input onChange={e=>setRegisterData(prev=>{return{...prev,password:e.target.value}})} required autoComplete ="off" className="f_lato" id="pwd" type="password" />
                </div>
                <button className="f_monts" type="submit">Sign Up</button>
            </form>
            <p className="f_lato">Already have an account? <Link onClick={()=>setHaveAccount(true)} style={{ color: "var(--link_1)" }}>Sign in here</Link></p>
        </div>
    )
}

export default Register
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login = ({ setHaveAccount }) => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const navigate =useNavigate();
    console.log(loginData);
    const login=(e)=>{
        e.preventDefault();
        navigate("/dash");
    }
    return (
        <div className="login_form">
            <h2 className="form_name f_monts">Sign In</h2>
            <p className="f_lato form__para">Sign in to your account</p>
            <div className="social_login">
                <Link className="sl__item f_monts">
                    <img src="logos/google.svg" alt="" />
                    Sign in with Google
                </Link>
                <Link className="sl__item f_monts">
                    <img src="logos/apple.svg" alt="" />
                    Sign in with Apple
                </Link>
            </div>
            <form onSubmit={login}>
                <div className="input_item">
                    <label className="f_lato" htmlFor="email">Email Address</label>
                    <input onChange={e => setLoginData(prev => { return { ...prev, email: e.target.value } })} required autoComplete="off" className="f_lato" id="email" type="text" />
                </div>
                <div className="input_item">
                    <label className="f_lato" htmlFor="pwd">Password</label>
                    <input onChange={e => setLoginData(prev => { return { ...prev, password: e.target.value } })} required autoComplete="off" className="f_lato" id="pwd" type="password" />
                </div>
                <div className="input_item">
                    <Link style={{ color: "var(--link_1)" }} className="f_lato" to="#">Forget Password?</Link>
                    <button className="f_monts" type="submit">Sign In</button>
                </div>
            </form>
            <p className="f_lato">Don’t have an account? <Link onClick={() => setHaveAccount(false)} style={{ color: "var(--link_1)" }}>Register here</Link></p>
        </div>
    )
}

export default Login
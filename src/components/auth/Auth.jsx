import Login from "./Login"
import "./auth.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Register from "./Register";
import { useState } from "react";


const Auth = () => {
    const [haveAccount, setHaveAccount] = useState(true);
    return (
        <div className="auth">
            <div className="auth__left">
                <div className="auth_left_inner">
                    <h2 className="logo f_poppins">LOGO</h2>
                    <p className="board f_monts">Board</p>
                    <div className="social">
                        <GitHubIcon sx={{ width: "44px", height: "44px", marginLeft: "1rem" }} />
                        <TwitterIcon sx={{ width: "46px", height: "46px", marginLeft: "1rem" }} />
                        <LinkedInIcon sx={{ width: "50px", height: "50px", marginLeft: "1rem" }} />
                        <img style={{ width: "44px", height: "44px", marginLeft: "1rem" }} src="logos/discord_icon.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="auth__right">
                <h2 className="resp_logo f_poppins">LOGO</h2>
                {
                    haveAccount ? <Login setHaveAccount={setHaveAccount} /> : <Register setHaveAccount={setHaveAccount} />
                }
            </div>
        </div>
    )
}

export default Auth
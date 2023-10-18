import { useState } from "react"
import BarGraph from "./BarGraph"
import Counter from "./Counter"
import ProductCard from "./ProductCard"
import "./dashboard.css"
const Dashboard = () => {
    const [toggle, setToggle] = useState(false);
    const toggleFunction = () => {
        setToggle(p => !p);
    }
    return (
        <div className="dash__main">
            <div onClick={toggleFunction} className={toggle ? "toggler-o" : "toggler-c"}>
                <div className="t_bar bar-1"></div>
                <div className="t_bar bar-2"></div>
                <div className="t_bar bar-3"></div>
            </div>
            <div className={toggle ? "view_left" : "dash__left"}>
                <div onClick={toggleFunction} className={toggle ? "toggler-o b_t" : "toggler-c b_t"}>
                    <div className="t_bar bar-1 b_b"></div>
                    <div className="t_bar bar-2 b_b"></div>
                    <div className="t_bar bar-3 b_b"></div>
                </div>
                <h2 className="dash_board f_monts">Board</h2>
                <div className="dash_slider">
                    <div className="s_item f_monts" style={{ fontWeight: "700" }}>
                        <img style={{ marginRight: "0.7rem", width: "18px" }} src="dashlogos/dashboard.svg" alt="" /> Dashboard
                    </div>
                    <div className="s_item f_monts">
                        <img style={{ marginRight: "0.7rem", width: "20px" }} src="dashlogos/transactions.svg" alt="" /> Transactions
                    </div>
                    <div className="s_item f_monts">
                        <img style={{ marginRight: "0.7rem", width: "20px" }} src="dashlogos/schdule.svg" alt="" /> Schedules
                    </div>
                    <div className="s_item f_monts">
                        <img style={{ marginRight: "0.7rem", width: "22px" }} src="dashlogos/user.svg" alt="" /> Users
                    </div>
                    <div className="s_item f_monts">
                        <img style={{ marginRight: "0.7rem", width: "18px" }} src="dashlogos/setting.svg" alt="" /> Settings
                    </div>
                </div>
                <div className="dash_left_bottom">
                    <p>Help</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <div className="dash__right">
                <div className="dash_hedder">
                    <div className="dh__left">
                        <h2>Dashboard</h2>
                    </div>
                    <div className="dh__right">
                        <div className="input_search">
                            <input required autoComplete="off" placeholder="Search..." type="text" />
                            <img style={{ width: "22px" }} src="dashlogos/search.svg" alt="search logo" />
                        </div>
                        <img src="dashlogos/bell.svg" alt="" />
                        <img className="user_dp" src="images/user.jpg" alt="user DP" />
                    </div>
                </div>
                <Counter />
                <BarGraph />
                <ProductCard />
            </div>
        </div>
    )
}

export default Dashboard

const Counter = () => {
    return (
        <div className="dash_counter">
            <div className="counter_item">
                <div className="logo_style">
                    <img style={{ height: "16px", width: "18px" }} src="dashlogos/revenue.svg" alt="" />
                </div>
                <p className="c_title f_lato">Total Revenues</p>
                <div className="ci__main">
                    <p className="c_value">$2,129,230</p>
                    <span>+2.5%</span>
                </div>
            </div>
            <div className="counter_item">
                <div style={{backgroundColor:"#DEBF85"}} className="logo_style">
                    <img style={{width: "20px"}} src="dashlogos/transactions.svg" alt="" />
                </div>
                <p className="c_title f_lato">Total Transactions</p>
                <div className="ci__main">
                    <p className="c_value">1,520</p>
                    <span>+1.7%</span>
                </div>
            </div>
            <div className="counter_item">
                <div style={{backgroundColor:"#ECA4A4"}} className="logo_style">
                    <img style={{width: "19px" }} src="dashlogos/likes.svg" alt="" />
                </div>
                <p className="c_title f_lato">Total Likes</p>
                <div className="ci__main">
                    <p className="c_value">9,721</p>
                    <span>+1.4%</span>
                </div>
            </div>
            <div className="counter_item">
                <div style={{backgroundColor:"#A9B0E5"}} className="logo_style">
                    <img style={{ width: "20px" }} src="dashlogos/users.svg" alt="" />
                </div>
                <p className="c_title f_lato">Total Users</p>
                <div className="ci__main">
                    <p className="c_value">9,721</p>
                    <span>+4.2%</span>
                </div>
            </div>
        </div>
    )
}

export default Counter

const BarGraph = () => {
    const barGraphdata = [
        {
            user: 500,
            guest: 400,
        },
        {
            user: 350,
            guest: 450,
        },
        {
            user: 200,
            guest: 300,
        },
        {
            user: 400,
            guest: 320,
        }
    ]

    let unit;
    const width = window.innerWidth;
    if (width < 500) {
        unit = 30
    }else {
        unit = 40
    }

    console.log(unit);

    return (
        <div className='bargraph'>
            <div className='bargraph_title'>
                <div className="bt_left f_monts">
                    <h2>Activities</h2>
                    <select className="act_select" name="" id="">
                        <option className="option_activity" value="may_june_2021">May - June 2021</option>
                    </select>
                </div>
                <div className="bt_right">
                    <div className="guest_color">
                        <div></div>
                        <span>Guest</span>
                    </div>
                    <div className="user_color">
                        <div></div>
                        <span>User</span>
                    </div>
                </div>
            </div>
            <div className="bargraph__in">
                <div className="line_item">
                    <span>500</span>
                    <div className='line'></div>
                </div>
                <div className="line_item">
                    <span>400</span>
                    <div className='line'></div>
                </div>
                <div className="line_item">
                    <span>300</span>
                    <div className='line'></div>
                </div>
                <div className="line_item">
                    <span>200</span>
                    <div className='line'></div>
                </div>
                <div className="line_item">
                    <span>100</span>
                    <div className='line'></div>
                </div>
                <div className="line_item">
                    <span>0</span>
                    <div className='line'></div>
                </div>
            </div>
            <div className="bars f_lato">
                {
                    barGraphdata?.map((data, index) => {
                        return (
                            <div key={index} className="bar_item_o">
                                <div className="bars_item">
                                    <div style={{ height: `${(data.user / 100) * unit}px` }} className="user"></div>
                                    <div style={{ height: `${(data.guest / 100) * unit}px` }} className="guest"></div>
                                </div>
                                <span>Week {index + 1}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BarGraph
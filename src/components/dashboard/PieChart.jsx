import "./pie.css";

const PieChart = () => {
    return (
        <div className="top_product">
            <div className="tp_header">
                <h2>Top products</h2>
                <span>May - June 2021</span>
            </div>
            <div className="tp_main">
                <div className="tp_left">
                    <div class="main_pai_chart">
                        <div class="pie animate arrg_1" style={{ "--p": "55", "--c": "#98D89E" }}></div>
                        <div class="pie animate arrg_2" style={{ "--p": "31", "--c": "#F6DC7D" }}></div>
                        <div class="pie animate arrg_3" style={{ "--p": "14", "--c": "#EE8484" }}></div>
                    </div>
                </div>
                <div className="tp_right">
                    <div className="color_indecator">
                        <div className="ci_item">
                            <div className="ci_circle"></div>
                            <div className="ci_details">
                                <h3>Basic Tees</h3>
                                <span>55%</span>
                            </div>
                        </div>
                        <div className="ci_item">
                            <div className="ci_circle"></div>
                            <div className="ci_details">
                                <h3>Custom Short Pants</h3>
                                <span>31%</span>
                            </div>
                        </div>
                        <div className="ci_item">
                            <div className="ci_circle"></div>
                            <div className="ci_details">
                                <h3>Super Hoodies</h3>
                                <span>14%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PieChart;

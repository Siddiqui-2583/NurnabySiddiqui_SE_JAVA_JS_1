import React from 'react';
import Chart from "react-google-charts";
import './Dashboard.css'
const Dashboard = () => {
    const salesData = [
      ["Months", "Sales"],
      ["Jan", 100],
      ["Feb", 500],
      ["Mar", 450],
      ["May", 930],
      ["Jun", 400],
      ["Jul", 800],
      ["Aug", 660],
      ["Sep", 1030],
      ["Oct", 800],
      ["Nov", 660],
      ["Dec", 1030],
    ];
    
    const options = {
      title: "Company Performance",
      curveType: "function",
      legend: { position: "bottom" },
    };
    return (
      <div>
        <br />
        <br /><br />
        <div className="chart">
          <Chart
            chartType="Line"
            width="500px"
            height="300px"
            data={salesData}
            options={options}
          />
        </div>
        <div className="chart">
          <Chart
            width={"500px"}
            height={"300px"}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Product category", "Units sold"],
              ["Motherboard", 11],
              ["Ram", 2],
              ["Graphics card", 2]
            ]}
            options={{
              title: "Best selling products",
              // Just add this option
              is3D: true,
            }}
            rootProps={{ "data-testid": "2" }}
          />
        </div>
      </div>
    );
};

export default Dashboard;
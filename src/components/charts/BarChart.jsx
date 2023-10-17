import { useState } from "react";
import classes from "./BarChart.module.css";
import BarChartItem from "./BarChartItem";
import { monthDetails, quaterDetails } from "../../data/BarChart";

const BarChart = () => {
  const [chartDetails, setChartDetails] = useState(monthDetails);
  const [chartWidth, setChartWidth] = useState("6%");
  const periodHandler = (event) => {
    setChartDetails(
      event.target.value === "month" ? monthDetails : quaterDetails
    );
    setChartWidth(event.target.value === "month" ? "6%" : "20%");
  };
  return (
    <div className={classes["chart-body"] + " d-flex flex-column text-center"}>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <p className="fs-4 fw-bold m-0">Overview</p>
          <p className="fs-6">Monthly Earning</p>
        </div>
        <div>
          <select className="form-select" onChange={periodHandler}>
            <option value="month">Monthly</option>
            <option value="quater">Quarterly</option>
          </select>
        </div>
      </div>
      <div className="d-flex justify-content-around h-100">
        {chartDetails.map((chart) => (
          <BarChartItem
            key={chart.period}
            details={chart}
            chartWidth={chartWidth}
          />
        ))}
      </div>
    </div>
  );
};

export default BarChart;

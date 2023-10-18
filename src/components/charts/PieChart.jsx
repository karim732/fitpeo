import React, { useState } from "react";
import { Chart } from "primereact/chart";
import { pieData, pieOptions } from "../../data/pieData";
import classes from "./PieChart.module.css";

const PieChart = () => {
  const [chartData] = useState(pieData);
  const [chartOptions] = useState(pieOptions);

  return (
    <div
      className={classes.pieChartWidth + " card flex justify-content-center"}
    >
      <Chart
        type="doughnut"
        data={chartData}
        options={chartOptions}
        className="w-full"
        // height="300px"
      />
    </div>
  );
};
export default PieChart;

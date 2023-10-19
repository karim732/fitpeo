import React, { useState } from "react";
import { Chart } from "primereact/chart";
import { pieData, pieOptions } from "../../data/pieData";
import classes from "./PieChart.module.css";

const PieChart = () => {
  const [chartData] = useState(pieData);
  const [chartOptions] = useState(pieOptions);

  return (
    <div
      className={classes.pieChartWidth + " card d-flex justify-content-center"}
    >
      <Chart
        type="doughnut"
        data={chartData}
        options={chartOptions}
        className="w-full d-flex justify-content-center"
      />
    </div>
  );
};
export default PieChart;

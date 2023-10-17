import React, { useState } from "react";
import { Chart } from "primereact/chart";
import { pieData, pieOptions } from "../../data/pieData";

const PieChart = () => {
  const [chartData] = useState(pieData);
  const [chartOptions] = useState(pieOptions);

  return (
    <div className="card flex justify-content-center">
      <Chart
        type="doughnut"
        data={chartData}
        options={chartOptions}
        className="w-full"
        height="300px"
      />
    </div>
  );
};
export default PieChart;

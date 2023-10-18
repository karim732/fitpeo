import BarChart from "./BarChart";
import PieChart from "./PieChart";
import classes from "./Charts.module.css";
const Charts = () => {
  return (
    <div className={classes.charts}>
      <BarChart style={{ width: "100%" }} />
      <PieChart />
    </div>
  );
};

export default Charts;

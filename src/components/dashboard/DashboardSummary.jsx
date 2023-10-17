import DashboardItem from "./DashboardItem";
import { dashboardItemDetails } from "../../data/dashboardItem";
import classes from "./DashboardSummary.module.css";
const DashboardSummary = () => {
  return (
    <div className={classes["dashboard-summary"]}>
      {dashboardItemDetails.map((itemDetails) => (
        <DashboardItem key={itemDetails.text} details={itemDetails} />
      ))}
    </div>
  );
};

export default DashboardSummary;

import classes from "./Dashboard.module.css";

import Charts from "./charts/Charts";
import DashboardSummary from "./dashboard/DashboardSummary";
import DashboardHeader from "./dashboard/DashboardHeader";
import DataTableLocal from "./datatable/DataTableLocal";

const Dashboard = (props) => {
  return (
    <main>
      <div className={classes.dashboard}>
        <DashboardHeader onToggle={props.onToggle} toggled={props.toggled} />
        <DashboardSummary />
        <Charts />
        <DataTableLocal />
      </div>
    </main>
  );
};

export default Dashboard;
